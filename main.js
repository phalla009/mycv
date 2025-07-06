document.querySelectorAll(".skill-bar").forEach((bar) => {
  bar.addEventListener("mouseenter", () => {
    const level = bar.querySelector(".skill-level");
    const percent = level.getAttribute("data-percent");
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = percent;
    tooltip.style.position = "absolute";
    tooltip.style.right = "5px";
    tooltip.style.top = "-25px";
    tooltip.style.background = "#2c3e50";
    tooltip.style.color = "#fff";
    tooltip.style.padding = "2px 5px";
    tooltip.style.fontSize = "0.75em";
    tooltip.style.borderRadius = "4px";
    bar.appendChild(tooltip);
  });

  bar.addEventListener("mouseleave", () => {
    const tooltip = bar.querySelector(".tooltip");
    if (tooltip) tooltip.remove();
  });
});
