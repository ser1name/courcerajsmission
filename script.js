function initGallery() {
  const figures = document.querySelectorAll("figure");

  // Ajouter tabindex automatiquement
  figures.forEach((fig, index) => {
    fig.setAttribute("tabindex", index + 1);

    // Événements souris
    fig.addEventListener("mouseover", () => highlight(fig));
    fig.addEventListener("mouseout", () => unHighlight(fig));

    // Événements clavier
    fig.addEventListener("focus", () => highlight(fig));
    fig.addEventListener("blur", () => unHighlight(fig));
  });
}

function highlight(figure) {
  figure.style.borderColor = "#007BFF";
}

function unHighlight(figure) {
  figure.style.borderColor = "#ddd";
}

