let $ = document;
const bottomLinkDropdownMenu2 = $.querySelector(".bottom-link-dropdown-menu2");
const mobileDontShowWrapper = $.querySelector(".mobile-dont-show__wrapper");
const mobMenu = $.querySelector(".mob-menu");
const mobMenuIcon1 = $.querySelector(".mob-menu__icon1");
const mobMenuIcon2 = $.querySelector(".mob-menu__icon2");
const mobMenuIcon3 = $.querySelector(".mob-menu__icon3");
const mobNavbar = $.querySelector(".mob-navbar");
const mobNavbarList = $.querySelector(".mob-navbar__list");
const mobNavbarItem1 = $.querySelector(".mob-navbar__item1");
const mobNavbarItem2 = $.querySelector(".mob-navbar__item2");
const mobNavbarItem3 = $.querySelector(".mob-navbar__item3");
const mobNavbarItem4 = $.querySelector(".mob-navbar__item4");
const mobNavbarItem5 = $.querySelector(".mob-navbar__item5");
const mobNavbarItem7 = $.querySelector(".mob-navbar__item7");
const mobDropdownMenu1 = $.querySelector(".mob-dropdown-menu1");
const mobDropdownMenu2 = $.querySelector(".mob-dropdown-menu2");
const mobDropdownMenu3 = $.querySelector(".mob-dropdown-menu3");
const mobDropdownMenu4 = $.querySelector(".mob-dropdown-menu4");
const mobDropdownMenu5 = $.querySelector(".mob-dropdown-menu5");
const mobDropdownMenu7 = $.querySelector(".mob-dropdown-menu7");
const mobDropdownItemBack1 = $.querySelector(".mob-dropdown-item-back1");
const mobDropdownItemBack2 = $.querySelector(".mob-dropdown-item-back2");
const mobDropdownItemBack3 = $.querySelector(".mob-dropdown-item-back3");
const mobDropdownItemBack4 = $.querySelector(".mob-dropdown-item-back4");
const mobDropdownItemBack5 = $.querySelector(".mob-dropdown-item-back5");
const mobDropdownItemBack7 = $.querySelector(".mob-dropdown-item-back7");

const storeListPackages = $.querySelector(".store-list-packages");
const storeListSimcart = $.querySelector(".store-list-simcart");
const storeListDevices = $.querySelector(".store-list-devices");
const sub1 = $.querySelector(".sub1");
const sub2 = $.querySelector(".sub2");
const sub3 = $.querySelector(".sub3");
const storeItem = $.querySelector(".store-item");
const storeItemIcon1 = $.querySelector(".store-item-icon1");
const storeItemIcon2 = $.querySelector(".store-item-icon2");
const storeItemIcon3 = $.querySelector(".store-item-icon3");
const storeListLink1 = $.querySelector(".store-list-link1");
const storeListLink2 = $.querySelector(".store-list-link2");
const storeListLink3 = $.querySelector(".store-list-link3");
const storeWrapper = $.querySelector(".store-wrapper");

const scrollbar = $.querySelector(".scrollbar");

const noTalk = $.querySelector(".no-talk");
const noTalkCloseContainer = $.querySelector(".no-talk-close-container");
const noTalkMinLogo = $.querySelector(".no-talk-min-logo");
const noTalkContainer = $.querySelector(".no-talk-container");

const infoSectionWrapper1 = $.querySelector(".info-section-wrapper1");
const infoSectionWrapper2 = $.querySelector(".info-section-wrapper2");
const infoSectionWrapper3 = $.querySelector(".info-section-wrapper3");
const infoSectionWrapper4 = $.querySelector(".info-section-wrapper4");
const infoSectionWrapper5 = $.querySelector(".info-section-wrapper5");
const infoSectionWrapper6 = $.querySelector(".info-section-wrapper6");
const infoSectionUl1 = $.querySelector(".info-section-ul1");
const infoSectionUl2 = $.querySelector(".info-section-ul2");
const infoSectionUl3 = $.querySelector(".info-section-ul3");
const infoSectionUl4 = $.querySelector(".info-section-ul4");
const infoSectionUl5 = $.querySelector(".info-section-ul5");
const infoSectionUl6 = $.querySelector(".info-section-ul6");
const infoPlusIconHorizontal1 = $.querySelector(".info-plus-icon-horizontal1");
const infoPlusIconHorizontal2 = $.querySelector(".info-plus-icon-horizontal2");
const infoPlusIconHorizontal3 = $.querySelector(".info-plus-icon-horizontal3");
const infoPlusIconHorizontal4 = $.querySelector(".info-plus-icon-horizontal4");
const infoPlusIconHorizontal5 = $.querySelector(".info-plus-icon-horizontal5");
const infoPlusIconHorizontal6 = $.querySelector(".info-plus-icon-horizontal6");
const descriptionTabsRightLink = $.querySelector(
  ".description-tabs-right-link"
);

function owl() {
  ".owl-carousel".owlCarousel({
    rtl: true,
  });
}

mobileDontShowWrapper.addEventListener("click", () => {
  bottomLinkDropdownMenu2.classList.toggle("show-bottom-link-dropdown-menu2");
});

mobMenu.addEventListener("click", () => {
  mobMenuIcon1.classList.toggle("rotatePositive");
  mobMenuIcon2.classList.toggle("noneDisplay");
  mobMenuIcon3.classList.toggle("rotateNegative");
  mobNavbar.classList.toggle("showMobNavbar");
});

// mobNavbarItem1.addEventListener("click", () => {
//   mobNavbar.style.transform = "translateX(100%)";
//   mobDropdownMenu1.classList.toggle("visible");
// });
// mobNavbarItem2.addEventListener("click", () => {
//   mobNavbar.style.transform = "translateX(100%)";
//   mobDropdownMenu2.classList.toggle("visible");
// });
// mobNavbarItem3.addEventListener("click", () => {
//   mobNavbar.style.transform = "translateX(100%)";
//   mobDropdownMenu3.classList.toggle("visible");
// });
// mobNavbarItem4.addEventListener("click", () => {
//   mobNavbar.style.transform = "translateX(100%)";
//   mobDropdownMenu4.classList.toggle("visible");
// });
// mobNavbarItem5.addEventListener("click", () => {
//   mobNavbar.style.transform = "translateX(100%)";
//   mobDropdownMenu5.classList.toggle("visible");
// });
// mobNavbarItem7.addEventListener("click", () => {
//   mobNavbar.style.transform = "translateX(100%)";
//   mobDropdownMenu7.classList.toggle("visible");
// });

// mobDropdownItemBack1.addEventListener("click", () => {
//   mobDropdownMenu1.style.transform = "translateX(0%)";
//   mobNavbar.style.transform = "translateX(0)";
//   mobDropdownMenu1.classList.toggle("visible");
// });
// mobDropdownItemBack2.addEventListener("click", () => {
//   mobDropdownMenu2.style.transform = "translateX(0%)";
//   mobNavbar.style.transform = "translateX(0)";
//   mobDropdownMenu2.classList.toggle("visible");
// });
// mobDropdownItemBack3.addEventListener("click", () => {
//   mobDropdownMenu3.style.transform = "translateX(0%)";
//   mobNavbar.style.transform = "translateX(0)";
//   mobDropdownMenu3.classList.toggle("visible");
// });
// mobDropdownItemBack4.addEventListener("click", () => {
//   mobDropdownMenu4.style.transform = "translateX(0%)";
//   mobNavbar.style.transform = "translateX(0)";
//   mobDropdownMenu4.classList.toggle("visible");
// });
// mobDropdownItemBack5.addEventListener("click", () => {
//   mobDropdownMenu5.style.transform = "translateX(0%)";
//   mobNavbar.style.transform = "translateX(0)";
//   mobDropdownMenu5.classList.toggle("visible");
// });
// mobDropdownItemBack7.addEventListener("click", () => {
//   mobDropdownMenu7.style.transform = "translateX(0%)";
//   mobNavbar.style.transform = "translateX(0)";
//   mobDropdownMenu7.classList.toggle("visible");
// });

storeListPackages.addEventListener("click", () => {
  storeListLink1.classList.add("dark-color");
  storeListLink2.classList.remove("dark-color");
  storeListLink3.classList.remove("dark-color");
  sub1.classList.toggle("show-sub-store");
  sub2.classList.remove("show-sub-store");
  sub3.classList.remove("show-sub-store");
  storeItemIcon1.classList.toggle("rotate-down");
  storeItemIcon2.classList.remove("reverse-rotate");
  storeItemIcon3.classList.remove("reverse-rotate");
});
storeListSimcart.addEventListener("click", () => {
  storeListLink1.classList.remove("dark-color");
  storeListLink2.classList.add("dark-color");
  storeListLink3.classList.remove("dark-color");
  sub2.classList.toggle("show-sub-store");
  sub1.classList.remove("show-sub-store");
  sub3.classList.remove("show-sub-store");
  storeItemIcon2.classList.toggle("reverse-rotate");
  storeItemIcon1.classList.add("rotate-down");
  storeItemIcon3.classList.remove("reverse-rotate");
});
storeListDevices.addEventListener("click", () => {
  storeListLink1.classList.remove("dark-color");
  storeListLink2.classList.remove("dark-color");
  storeListLink3.classList.add("dark-color");
  sub3.classList.toggle("show-sub-store");
  sub1.classList.remove("show-sub-store");
  sub2.classList.remove("show-sub-store");
  storeItemIcon3.classList.toggle("reverse-rotate");
  storeItemIcon2.classList.remove("reverse-rotate");
  storeItemIcon1.classList.add("rotate-down");
});

const isBookmarkScrollingDown = () => {
  let previousScrollPosition = 3200;
  let goingDown = false;
  let scrollPosition = window.pageYOffset;

  if (scrollPosition < previousScrollPosition) {
    goingDown = true;
  }
  previousScrollPosition = scrollPosition;
  return goingDown;
};

descriptionTabsRightLink.addEventListener("click", () => {
  var audio = document.getElementById("audio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

const handleScroll = () => {
  if (isBookmarkScrollingDown()) {
    scrollbar.classList.add("scroll-down");
    scrollbar.classList.remove("scroll-up");
  } else {
    scrollbar.classList.add("scroll-up");
    scrollbar.classList.remove("scroll-down");
  }
};

window.addEventListener("scroll", handleScroll);

noTalkMinLogo.addEventListener("click", () => {
  noTalk.classList.add("small-width");
  setTimeout(() => {
    noTalkMinLogo.style.display = "none";
    noTalk.classList.add("small-height");
    noTalk.classList.add("center");
    noTalkContainer.style.display = "block";
  }, 500);
});

noTalkCloseContainer.addEventListener("click", () => {
  noTalk.classList.remove("small-height");

  setTimeout(() => {
    noTalk.classList.remove("small-width");
    noTalkContainer.style.display = "none";
    noTalk.classList.remove("center");
    noTalkMinLogo.style.display = "block";
  }, 500);
});

infoSectionWrapper1.addEventListener("click", () => {
  infoSectionUl1.classList.toggle("show-info-section-list");
  infoPlusIconHorizontal1.classList.toggle("rotate0");
});
infoSectionWrapper2.addEventListener("click", () => {
  infoSectionUl2.classList.toggle("show-info-section-list");
  infoPlusIconHorizontal2.classList.toggle("rotate0");
});
infoSectionWrapper3.addEventListener("click", () => {
  infoSectionUl3.classList.toggle("show-info-section-list");
  infoPlusIconHorizontal3.classList.toggle("rotate0");
});
infoSectionWrapper4.addEventListener("click", () => {
  infoSectionUl4.classList.toggle("show-info-section-list");
  infoPlusIconHorizontal4.classList.toggle("rotate0");
});
infoSectionWrapper5.addEventListener("click", () => {
  infoSectionUl5.classList.toggle("show-info-section-list");
  infoPlusIconHorizontal5.classList.toggle("rotate0");
});
infoSectionWrapper6.addEventListener("click", () => {
  infoSectionUl6.classList.toggle("show-info-section-list");
  infoPlusIconHorizontal6.classList.toggle("rotate0");
});
