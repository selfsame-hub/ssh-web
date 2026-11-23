const modal = document.getElementById("modalNovoCorte");
const btnNovoCorte = document.getElementById("btnNovoCorte");
const btnFecharModal = document.getElementById("btnFecharModal");
const btnCancelarModal = document.getElementById("btnCancelarModal");
const formNovoCorte = document.getElementById("formNovoCorte");

const abrirModal = () => {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
};

const fecharModal = () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  formNovoCorte.reset();
};

btnNovoCorte.addEventListener("click", abrirModal);
btnFecharModal.addEventListener("click", fecharModal);
btnCancelarModal.addEventListener("click", fecharModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) fecharModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) {
    fecharModal();
  }
});