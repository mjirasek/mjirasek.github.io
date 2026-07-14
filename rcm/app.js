const queryApi = new URLSearchParams(window.location.search).get("api");
const API_BASE = (queryApi || window.RCM_API_BASE || "").replace(/\/$/, "");
const state = { tab: "fit", last: null };

const byId = (id) => document.getElementById(id);

function selectedLayers() {
  return [...document.querySelectorAll('input[name="layers"]:checked')].map((item) => item.value);
}

function payload() {
  return {
    mode: byId("mode").value,
    transform: byId("transform").value,
    backend: byId("backend").value,
    separation: Number(byId("separation").value || 0.7),
    sign_convention: byId("sign-convention").value,
    special_rotation: byId("special-rotation").checked,
    layers: selectedLayers(),
    grid_size: Number(byId("grid-size").value || 40),
    field_span: Number(byId("field-span").value || 1.5),
    iso_scale: Number(byId("iso-scale").value || 0),
  };
}

function setStatus(text, kind = "") {
  const node = byId("status");
  node.textContent = text;
  node.className = `status ${kind}`;
}

function renderFieldMeta(items) {
  byId("field-meta").innerHTML = items.map((item) => `<span>${item}</span>`).join("");
}

function plot(target, figure) {
  return Plotly.react(target, figure.data, figure.layout, { scrollZoom: true, displaylogo: false, responsive: true });
}

function modelRows(model) {
  const rows = [
    ["mode", model.mode],
    ["backend", model.backend],
    ["I/B", model.slope == null ? "n/a" : model.slope.toFixed(6)],
    ["R2", model.r2 == null ? "n/a" : model.r2.toFixed(6)],
    ["sign factor", `${model.sign_factor > 0 ? "+" : ""}${model.sign_factor}`],
    ["connectivity", model.transform],
    ["separation", Number(model.separation).toPrecision(3)],
    ["special rotation", model.special_rotation ? "on" : "off"],
    ["segments", model.n_segments],
    ["model time", `${model.model_elapsed.toFixed(3)} s`],
    ["field time", model.field_elapsed == null ? "off" : model.field_cached ? "cached" : `${model.field_elapsed.toFixed(3)} s`],
    ["area normal", model.area.map((v) => v.toFixed(4)).join(", ")],
    ["sign", model.sign_note],
  ];
  return rows.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join("");
}

async function update() {
  setStatus("computing", "busy");
  byId("update").disabled = true;
  try {
    const response = await fetch(`${API_BASE}/api/model`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload()),
    });
    if (!response.ok) throw new Error(`API ${response.status}`);
    state.last = await response.json();
    await plot("scene", state.last.figures.scene);
    renderFieldMeta(state.last.field_meta);
    renderTab();
    setStatus("ready", "ok");
  } catch (error) {
    setStatus(error.message, "error");
  } finally {
    byId("update").disabled = false;
  }
}

function renderTab() {
  if (!state.last) return;
  const graph = byId("analysis");
  const list = byId("model-list");
  if (state.tab === "model") {
    graph.classList.add("hidden");
    list.classList.remove("hidden");
    list.innerHTML = modelRows(state.last.model);
    return;
  }
  list.classList.add("hidden");
  graph.classList.remove("hidden");
  plot("analysis", state.last.figures[state.tab]);
}

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.tab = button.dataset.tab;
    renderTab();
  });
});

byId("update").addEventListener("click", update);
document.querySelectorAll("select, input").forEach((item) => {
  item.addEventListener("change", update);
});

update();
