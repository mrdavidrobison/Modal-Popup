var modal = document.getElementById('modal-wrapper');
var loginBtn = document.getElementById('myBtn');
var closeBtn = document.getElementById('close');

loginBtn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}