
//  toggle menu button for responsiveness
function toggleMenu() {
    const menuIcon = document.querySelector('.menuIcon');
    menuIcon.classList.toggle('change');
    navBar.classList.toggle('active');
}
function delay(URL) {
    setTimeout(function () { window.location = URL }, 350);
}