(function () {
  "use strict";

  var labels = {
    preWorkshop: "Pre-workshop",
    day1: "Day 1",
    day2: "Day 2",
    day3: "Day 3",
    postWorkshop: "Post-workshop",
  };
  var allowedPrefixes = [
    "/pre-workshop",
    "/day-1",
    "/day-1-new",
    "/day-2",
    "/day-2-new",
    "/day-3",
    "/day-3-new",
    "/post-workshop",
  ];
  var params = new URLSearchParams(window.location.search);
  var section = params.get("section");
  var returnTo = params.get("returnTo") || "/";
  var label = labels[section];

  if (label) {
    document.getElementById("blocked-label").textContent = label;
    document.title = label + " unavailable · Vibecoding 101";
  }

  try {
    var destination = new URL(returnTo, window.location.origin);
    var permitted =
      destination.origin === window.location.origin &&
      allowedPrefixes.some(function (prefix) {
        return destination.pathname === prefix || destination.pathname.startsWith(prefix + "/");
      });
    document.getElementById("try-again").href = permitted
      ? destination.pathname + destination.search
      : "/";
  } catch (_error) {
    document.getElementById("try-again").href = "/";
  }
})();
