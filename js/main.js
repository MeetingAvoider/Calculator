const p = document.querySelector(".p");
const buttones = document.querySelectorAll(".btn");

buttones.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonApretado = button.textContent;

    if (button.id === "c") {
      p.textContent = "0";
      return;
    }

    if (button.id === "b") {
      if (p.textContent.length === 1 || p.textContent === "Error!") {
        p.textContent = "0";
      } else {
        p.textContent = p.textContent.slice(0, -1);
      }
      return;
    }

    if (button.id === "i") {
      try {
        p.textContent = eval(p.textContent);
      } catch {
        p.textContent = "Error!";
      }
      return;
    }

    if (p.textContent === "0" || p.textContent === "Error!") {
      p.textContent = buttonApretado;
    } else {
      p.textContent += buttonApretado;
    }
  });
});
