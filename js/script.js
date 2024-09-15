import {
	skillsData,
	portfolioSitesData,
	portfolioWebappsData,
	portfolioWebappsReactData,
} from "./data.js";

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

//SWIPER

if (document.querySelector(".swiper")) {
	const swiper = new Swiper(".swiper", {
		direction: "horizontal",
		effect: "coverflow",
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: "2",
		loop: true,
		spaceBetween: 50,
		coverflowEffect: {
			rotate: 30,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: true,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			dynamicBullets: true,
		},

		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
		},
	});
}

//RENDER ITEMS
const skillsBlock = document.querySelector(".programs");
const portfolioTab1 = document.querySelector("#tab_1");
const portfolioTab2 = document.querySelector("#tab_2");
const portfolioTab3 = document.querySelector("#tab_3");

const Skill = {
	render: (img, alt, title) => {
		return `<div class="program animate__animated wow animate__zoomIn">
    <img src="${img}" alt="${alt}">
    <p class="program__subtitle">${title}</p>
  </div>`;
	},
};

const PortfolioItem = {
	render: (link, img, alt, title) => {
		return `<div class="portfolio__site site-portfolio animate__animated wow animate__zoomIn">
    <a href="${link}" target="_blank"
      class="site-portfolio__image"><img src="${img}"
        alt="${alt} site image"><span class="site-portfolio__link">Click to visit ${title}</span></a>
  </div>`;
	},
};

if (skillsBlock) {
	for (let key in skillsData) {
		const skillsKey = skillsData[key];

		skillsBlock.innerHTML += Skill.render(
			skillsKey.img,
			skillsKey.alt,
			skillsKey.title
		);
	}
}

if (portfolioTab1) {
	for (let key in portfolioSitesData) {
		const portfolioKey = portfolioSitesData[key];

		portfolioTab1.innerHTML += PortfolioItem.render(
			portfolioKey.link,
			portfolioKey.img,
			portfolioKey.alt,
			portfolioKey.title
		);
	}
}

if (portfolioTab2) {
	for (let key in portfolioWebappsData) {
		const portfolioKey = portfolioWebappsData[key];

		portfolioTab2.innerHTML += PortfolioItem.render(
			portfolioKey.link,
			portfolioKey.img,
			portfolioKey.alt,
			portfolioKey.title
		);
	}
}

if (portfolioTab3) {
	for (let key in portfolioWebappsReactData) {
		const portfolioKey = portfolioWebappsReactData[key];

		portfolioTab3.innerHTML += PortfolioItem.render(
			portfolioKey.link,
			portfolioKey.img,
			portfolioKey.alt,
			portfolioKey.title
		);
	}
}
