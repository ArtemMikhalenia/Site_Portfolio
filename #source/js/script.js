let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu-header__menu");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
}

console.log(menuBody);