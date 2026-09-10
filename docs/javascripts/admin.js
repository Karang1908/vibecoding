(function () {
  "use strict";

  var elements = {
    loadingView: document.getElementById("loading-view"),
    loginView: document.getElementById("login-view"),
    portalView: document.getElementById("portal-view"),
    loginForm: document.getElementById("login-form"),
    password: document.getElementById("admin-password"),
    passwordVisibility: document.getElementById("password-visibility"),
    loginButton: document.getElementById("login-button"),
    loginError: document.getElementById("login-error"),
    logoutButton: document.getElementById("logout-button"),
    configurationMessage: document.getElementById("configuration-message"),
    sectionsLoading: document.getElementById("sections-loading"),
    sectionList: document.getElementById("section-list"),
    summary: document.getElementById("access-summary"),
    enableAll: document.getElementById("enable-all"),
    blockAll: document.getElementById("block-all"),
    operationStatus: document.getElementById("operation-status"),
    lastUpdated: document.getElementById("last-updated"),
  };

  var currentState = null;
  var saving = false;
  var statusTimer = null;
  var sectionMarks = {
    preWorkshop: "Pre",
    day1: "01",
    day2: "02",
    day3: "03",
    postWorkshop: "Post",
  };

  function showView(view) {
    elements.loadingView.hidden = view !== "loading";
    elements.loginView.hidden = view !== "login";
    elements.portalView.hidden = view !== "portal";
    if (view === "login") window.requestAnimationFrame(function () {
      elements.password.focus();
    });
  }

  async function request(url, options) {
    var settings = options || {};
    settings.headers = Object.assign(
      { Accept: "application/json" },
      settings.body ? { "Content-Type": "application/json" } : {},
      settings.headers || {},
    );
    settings.credentials = "same-origin";

    var response = await fetch(url, settings);
    var body;
    try {
      body = await response.json();
    } catch (_error) {
      body = {};
    }

    if (!response.ok) {
      var error = new Error(body.error || "The request could not be completed.");
      error.status = response.status;
      error.code = body.code;
      throw error;
    }
    return body;
  }

  function showLoginError(message) {
    elements.loginError.textContent = message;
    elements.loginError.hidden = !message;
  }

  function setLoginBusy(isBusy) {
    elements.loginButton.disabled = isBusy;
    elements.password.disabled = isBusy;
    elements.passwordVisibility.disabled = isBusy;
    elements.loginButton.classList.toggle("is-loading", isBusy);
  }

  function setOperationStatus(message, type) {
    window.clearTimeout(statusTimer);
    elements.operationStatus.textContent = message || "";
    elements.operationStatus.className = type ? "is-" + type : "";
    if (message && type === "success") {
      statusTimer = window.setTimeout(function () {
        elements.operationStatus.textContent = "";
        elements.operationStatus.className = "";
      }, 3500);
    }
  }

  function formatUpdatedAt(value) {
    if (!value) return "No access changes yet";
    var date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return "Last changed " + new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date);
  }

  function storageReady(data) {
    return data.configured && data.storage !== "runtime-cache-unavailable";
  }

  function setControlsDisabled(disabled) {
    elements.sectionList.querySelectorAll("input").forEach(function (input) {
      input.disabled = disabled;
    });
    elements.enableAll.disabled = disabled;
    elements.blockAll.disabled = disabled;
  }

  function createSectionRow(definition, enabled) {
    var row = document.createElement("li");
    row.className = "section-row" + (enabled ? " is-enabled" : "");
    row.dataset.section = definition.id;

    var mark = document.createElement("span");
    mark.className = "section-number";
    mark.textContent = sectionMarks[definition.id] || "•";
    mark.setAttribute("aria-hidden", "true");

    var copy = document.createElement("div");
    copy.className = "section-copy";
    var label = document.createElement("strong");
    label.textContent = definition.label;
    var description = document.createElement("span");
    description.textContent = definition.description;
    copy.append(label, description);

    var status = document.createElement("span");
    status.className = "status-chip";
    status.textContent = enabled ? "Open" : "Blocked";

    var switchLabel = document.createElement("label");
    switchLabel.className = "switch";
    var accessibleLabel = document.createElement("span");
    accessibleLabel.className = "visually-hidden";
    accessibleLabel.textContent = "Enable " + definition.label;
    var input = document.createElement("input");
    input.type = "checkbox";
    input.checked = enabled;
    input.dataset.section = definition.id;
    input.addEventListener("change", function () {
      var updates = {};
      updates[definition.id] = input.checked;
      saveUpdates(updates, definition.label);
    });
    var track = document.createElement("span");
    track.className = "switch__track";
    track.setAttribute("aria-hidden", "true");
    switchLabel.append(accessibleLabel, input, track);

    row.append(mark, copy, status, switchLabel);
    return row;
  }

  function render(data) {
    currentState = data;
    elements.sectionList.replaceChildren();

    data.definitions.forEach(function (definition) {
      elements.sectionList.appendChild(
        createSectionRow(definition, data.sections[definition.id] !== false),
      );
    });

    var openCount = Object.values(data.sections).filter(Boolean).length;
    elements.summary.textContent = openCount + " of " + data.definitions.length + " sections open";
    elements.lastUpdated.textContent = formatUpdatedAt(data.updatedAt);
    elements.sectionsLoading.hidden = true;
    elements.sectionList.hidden = false;

    var ready = storageReady(data);
    elements.configurationMessage.hidden = ready;
    if (!ready) {
      var message = elements.configurationMessage.querySelector("p");
      message.textContent =
        "Vercel’s runtime cache could not be reached. Access remains open until it recovers.";
    }
    setControlsDisabled(saving || !ready);
  }

  async function loadSections() {
    elements.sectionsLoading.hidden = false;
    elements.sectionList.hidden = true;
    try {
      var data = await request("/api/admin/sections");
      render(data);
    } catch (error) {
      if (error.status === 401) {
        showView("login");
        return;
      }
      elements.sectionsLoading.hidden = true;
      setOperationStatus(error.message, "error");
    }
  }

  async function saveUpdates(updates, changedLabel) {
    if (saving || !currentState) return;
    saving = true;
    setControlsDisabled(true);

    Object.keys(updates).forEach(function (id) {
      var row = elements.sectionList.querySelector('[data-section="' + id + '"]');
      if (row) row.classList.add("is-pending");
    });
    setOperationStatus("Saving change…", "");

    try {
      var data = await request("/api/admin/sections", {
        method: "PATCH",
        body: JSON.stringify({ updates: updates }),
      });
      saving = false;
      render(data);
      setOperationStatus(
        changedLabel ? changedLabel + " updated" : "Workshop access updated",
        "success",
      );
    } catch (error) {
      saving = false;
      render(currentState);
      if (error.status === 401) {
        showView("login");
        showLoginError("Your session expired. Sign in again.");
        return;
      }
      setOperationStatus(error.message, "error");
    }
  }

  elements.loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    showLoginError("");
    setLoginBusy(true);

    try {
      await request("/api/admin/session", {
        method: "POST",
        body: JSON.stringify({ password: elements.password.value }),
      });
      elements.password.value = "";
      showView("portal");
      await loadSections();
    } catch (error) {
      showLoginError(error.message);
      elements.password.select();
    } finally {
      setLoginBusy(false);
    }
  });

  elements.passwordVisibility.addEventListener("click", function () {
    var visible = elements.password.type === "text";
    elements.password.type = visible ? "password" : "text";
    elements.passwordVisibility.setAttribute("aria-pressed", String(!visible));
    elements.passwordVisibility.setAttribute(
      "aria-label",
      visible ? "Show password" : "Hide password",
    );
    elements.password.focus();
  });

  elements.logoutButton.addEventListener("click", async function () {
    elements.logoutButton.disabled = true;
    try {
      await request("/api/admin/session", { method: "DELETE" });
    } finally {
      currentState = null;
      elements.logoutButton.disabled = false;
      showView("login");
    }
  });

  elements.enableAll.addEventListener("click", function () {
    if (!currentState) return;
    var updates = {};
    currentState.definitions.forEach(function (definition) {
      updates[definition.id] = true;
    });
    saveUpdates(updates);
  });

  elements.blockAll.addEventListener("click", function () {
    if (!currentState) return;
    var updates = {};
    currentState.definitions.forEach(function (definition) {
      updates[definition.id] = false;
    });
    saveUpdates(updates);
  });

  async function initialise() {
    try {
      var session = await request("/api/admin/session");
      if (!session.authenticated) {
        showView("login");
        return;
      }
      showView("portal");
      await loadSections();
    } catch (_error) {
      showView("login");
      showLoginError("The admin service is unavailable. Refresh and try again.");
    }
  }

  initialise();
})();
