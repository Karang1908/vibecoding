(function () {
  "use strict";

  var sectionPrefixes = [
    ["preWorkshop", "/pre-workshop"],
    ["day1", "/day-1-new"],
    ["day1", "/day-1"],
    ["day2", "/day-2-new"],
    ["day2", "/day-2"],
    ["day3", "/day-3-new"],
    ["day3", "/day-3"],
    ["postWorkshop", "/post-workshop"],
  ];

  function sectionForPath(pathname) {
    for (var i = 0; i < sectionPrefixes.length; i += 1) {
      var section = sectionPrefixes[i][0];
      var prefix = sectionPrefixes[i][1];
      if (pathname === prefix || pathname.indexOf(prefix + "/") === 0) {
        return section;
      }
    }
    return null;
  }

  function checkAccess() {
    var path = window.location.pathname || "/";
    var section = sectionForPath(path);
    if (!section || path.indexOf("/access-closed") === 0) return;

    fetch("/api/access-state", {
      cache: "no-store",
      credentials: "same-origin",
      headers: { Accept: "application/json" },
    })
      .then(function (response) {
        if (!response.ok) throw new Error("Access state unavailable");
        return response.json();
      })
      .then(function (data) {
        if (data.sections && data.sections[section] === false) {
          var returnTo = path + (window.location.search || "");
          window.location.replace(
            "/access-closed/?section=" +
              encodeURIComponent(section) +
              "&returnTo=" +
              encodeURIComponent(returnTo),
          );
        }
      })
      .catch(function () {
        // Keep the lesson usable if the access service is temporarily down.
      });
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(checkAccess);
  } else {
    checkAccess();
  }
})();
