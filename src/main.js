import "./style.css";

// ─── Date Range Picker ───
function setDateRange(days) {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - days);

    const fmt = (d) => d.toISOString().split("T")[0];
    const startStr = fmt(start);
    const endStr = fmt(end);

    const startEl = document.getElementById("range-start");
    const endEl = document.getElementById("range-end");
    const outputEl = document.getElementById("range-output");

    if (startEl) startEl.value = startStr;
    if (endEl) endEl.value = endStr;
    if (outputEl) {
        outputEl.innerHTML = `Selected range: <span class="text-text">${startStr}</span> → <span class="text-text">${endStr}</span> <span class="text-primary">(${days} days)</span>`;
    }
}

// Update range output when date inputs change manually
function updateRangeOutput() {
    const startEl = document.getElementById("range-start");
    const endEl = document.getElementById("range-end");
    const outputEl = document.getElementById("range-output");
    if (!startEl || !endEl || !outputEl) return;

    const start = new Date(startEl.value);
    const end = new Date(endEl.value);
    const days = Math.round((end - start) / (1000 * 60 * 60 * 24));

    outputEl.innerHTML = `Selected range: <span class="text-text">${startEl.value}</span> → <span class="text-text">${endEl.value}</span> <span class="text-primary">(${days} days)</span>`;
}

document.addEventListener("DOMContentLoaded", () => {
    const startEl = document.getElementById("range-start");
    const endEl = document.getElementById("range-end");
    if (startEl) startEl.addEventListener("change", updateRangeOutput);
    if (endEl) endEl.addEventListener("change", updateRangeOutput);
});

// Expose to inline onclick handlers
window.setDateRange = setDateRange;
