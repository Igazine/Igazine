document.querySelectorAll(".map-node").forEach((node) => {
  node.addEventListener("pointerenter", () => {
    node.dataset.active = "true";
  });

  node.addEventListener("pointerleave", () => {
    delete node.dataset.active;
  });
});
