//BURGER
let iconMenu = document.querySelector(".header__burger");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu-header__menu");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
}

let headerLink = document.querySelectorAll(".menu-header__link");

if (headerLink) {
	headerLink.forEach((link) => {
		link.addEventListener("click", function () {
			menuBody.classList.remove("active");
			iconMenu.classList.remove("active");
			body.classList.remove("lock");
		});
	});
}

//скролл вверх при клике на кнопку

const topButton = document.querySelectorAll(".topbutton");

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

if (topButton.length > 0) {
	for (let index = 0; index < topButton.length; index++) {
		topButton.forEach((item) => {
			item.addEventListener("click", scrollToTop);
		});
	}
}

//=============================================================
const showBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", function () {
	const block = document.querySelector(".wrapper");
	const getItemTopCoord = block.getBoundingClientRect().top;

	let blockCoords = -200;

	if (getItemTopCoord < blockCoords) {
		showBtn.classList.add("visible");
	} else {
		showBtn.classList.remove("visible");
	}
});

//popup=========================================================

const popupLinks = document.querySelectorAll(".popup-link"); //сюда получаем объект, при нажатии на который открывается попап
const bod = document.querySelector("body"); //тег body для запрета скролла при открытом попапе
const lockPadding = document.querySelectorAll(".lock-padding"); //

let unlock = true; //

const timeout = 800;

if (popupLinks.length > 0) {
	//проверяем есть ли у нас ссылки popupLinks
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			//вешаем событие клик
			const popupName = popupLink.getAttribute("href").replace("#", ""); //убираем # из атрибута href и оставляем чистое имя - popup
			const currentPopup = document.getElementById(popupName); //получаю объект с именем popup
			popupOpen(currentPopup); //отправляем объект в функцию
			e.preventDefault(); //запрещаем ссылке перезагружать страницу
		});
	}
}
const popupCloseIcon = document.querySelectorAll(".close-popup"); //элемент, который закрывает popup
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener("click", function (e) {
			popupClose(el.closest(".popup")); //при клике ищет ближайшего родителя с классом popup и закрывает его
			e.preventDefault();
		});
	}
}

function popupOpen(currentPopup) {
	if (currentPopup && unlock) {
		//проверяем есть ли popup и проверяем открыт ли он
		const popupActive = document.querySelector(".popup.open"); //получаем открытый popup
		if (popupActive) {
			//
			popupClose(popupActive, false); //и если он существует, то закрываем его
		} else {
			bodyLock(); //блочим скролл body,
		}
		currentPopup.classList.add("open"); //добавляем к popup класс open
		currentPopup.addEventListener("click", function (e) {
			if (!e.target.closest(".popup__content")) {
				//отсекаем все, кроме области за popup, если у нажатого объекта нету родителя с классом popup__content
				popupClose(e.target.closest(".popup")); //то тогда мы popup закрываем
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	//передаем открытый объект
	if (unlock) {
		popupActive.classList.remove("open");
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue =
		window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px"; //высчитываем разницу между шириной viewport и шириной объекта внутри него
	//получается, что при открытии popup у нас убирается ползунок скролл и сдвигает контент вправо, при закрытии - влево. Неприятно, поэтому мы высчитываем его ширину
	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	bod.style.paddingRight = lockPaddingValue; //и при открытии popup добавляем ширину скролла (padding) к body, смещение пропадает
	bod.classList.add("lock");

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = "0px";
			}
		}
		bod.style.paddingRight = "0px";
		bod.classList.remove("lock");
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener("keydown", function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector(".popup.open");
		popupClose(popupActive);
	}
});

//WOW

const wow = new WOW({
	boxClass: "wow",
	animateClass: "animate__animated",
	offset: 50,
	mobile: true,
	live: true,
});
wow.init();

//TABS

const tabsBtn = document.querySelectorAll(".tab-buttons__item");
const tabsItems = document.querySelectorAll(".portfolio__tab");

tabsBtn.forEach((item) => {
	item.addEventListener("click", () => {
		let tabId = item.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);

		if (!item.classList.contains("active")) {
			tabsBtn.forEach((item) => {
				item.classList.remove("active");
			});

			tabsItems.forEach((item) => {
				item.classList.remove("active");
			});

			item.classList.add("active");
			currentTab.classList.add("active");
		}
	});
});

document.querySelector(".tab_1-btn") &&
	document.querySelector(".tab_1-btn").click();

const swiper = new Swiper(".swiper", {
	direction: "horizontal",
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "3",
	loop: true,
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: false,
	},

	pagination: {
		el: ".swiper-pagination",
	},

	// navigation: {
	// 	nextEl: ".swiper-button-next",
	// 	prevEl: ".swiper-button-prev",
	// },
});
