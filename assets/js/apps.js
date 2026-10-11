/* Live app embeds.
 *
 * Endpoints are not written in the markup: each one is kept encoded here and
 * decoded at runtime, so the page source carries no link to click or copy.
 * Set `proxy` on an app to route it through an HTTPS reverse proxy; when a
 * proxy is set it is used instead of the direct endpoint.
 */

const APPS = [
  {
    mount: "appFrame1",
    ref: "aHR0cHM6Ly93d3cuZXVtZXBsYXQuZXUvcmVzdWx0cy9tZWRpYWhpc3RvcnlkYXNoYm9hcmQv",
    proxy: "",
    title: "EUMEPLAT media history dashboard",
    autoload: true
  }
];

const resolve = (app) => app.proxy || atob(app.ref);

// main.js owns the EN/IT dictionary; re-run it over anything injected here
const refreshI18n = () => window.applyI18n && window.applyI18n();

const blockedByProtocol = (url) =>
  location.protocol === "https:" && url.startsWith("http:");

function buildFrame(app, url) {
  const frame = document.createElement("iframe");
  frame.className = "app-frame";
  frame.title = app.title;
  frame.loading = "lazy";
  frame.referrerPolicy = "no-referrer";
  frame.allow = "fullscreen";
  frame.src = url;
  return frame;
}

function message(host, textKey, fallback, onRetry) {
  const box = document.createElement("div");
  box.className = "app-notice";
  const p = document.createElement("p");
  p.className = "small";
  p.dataset.i18n = textKey;
  p.textContent = fallback;
  box.appendChild(p);
  if (onRetry) {
    const btn = document.createElement("button");
    btn.className = "btn-custom";
    btn.type = "button";
    btn.dataset.i18n = "appsOpenTab";
    btn.textContent = "Open in a new tab";
    btn.addEventListener("click", onRetry);
    box.appendChild(btn);
  }
  host.replaceChildren(box);
  refreshI18n();
}

function launch(app) {
  const host = document.getElementById(app.mount);
  if (!host) return;
  const url = resolve(app);

  if (blockedByProtocol(url)) {
    message(
      host,
      "appsMixed",
      "This app is served over plain HTTP, so the browser will not embed it in a secure page. It opens in its own tab instead.",
      () => window.open(url, "_blank", "noopener,noreferrer")
    );
    return;
  }

  const frame = buildFrame(app, url);
  host.replaceChildren(frame);
  host.dataset.state = "loaded";
}

function placeholder(app) {
  const host = document.getElementById(app.mount);
  if (!host) return;
  const btn = document.createElement("button");
  btn.className = "btn-custom app-launch";
  btn.type = "button";
  btn.dataset.i18n = "appsLaunch";
  btn.textContent = "Launch the app";
  btn.addEventListener("click", () => launch(app), { once: true });
  host.replaceChildren(btn);
  refreshI18n();
}

APPS.forEach((app) => (app.autoload ? launch(app) : placeholder(app)));

document.querySelectorAll("[data-app-action]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const app = APPS.find((a) => a.mount === btn.dataset.appTarget);
    if (!app) return;
    const host = document.getElementById(app.mount);
    const frame = host && host.querySelector("iframe");

    if (btn.dataset.appAction === "reload") {
      if (frame) frame.src = resolve(app);
      else launch(app);
    }
    if (btn.dataset.appAction === "fullscreen" && frame) {
      if (frame.requestFullscreen) frame.requestFullscreen();
    }
  });
});
