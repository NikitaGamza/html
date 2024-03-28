const openPop = document.getElementById('openPop');
openPop.onclick = modalFunc;
const closer = document.getElementById('closer');
closer.onclick = modalFunc;
function modalFunc() {
  const modal = document.getElementById('modal');
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }
}
window.onclick = function (e) {
  if (e.target.classList.contains('modal')) {
    e.target.classList.add('hidden');
  }
};
