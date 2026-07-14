window.RCM_API_BASE =
  window.RCM_API_BASE ||
  (["127.0.0.1", "localhost"].includes(window.location.hostname)
    ? "http://127.0.0.1:8070"
    : "https://rcm-api.michaeljirasek.com");
