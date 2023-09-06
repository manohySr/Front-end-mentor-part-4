let featuresMobile = document.querySelector(".features-mobile");
let companyMobile = document.querySelector(".company-mobile");
let features = document.querySelector(".features");
let company = document.querySelector(".company");
let dropdownFeatures = document.querySelector(".dropdown--features");
let dropdownCompany = document.querySelector(".dropdown--company");
let dropdownFeaturesMobile = document.querySelector(
  ".dropdown--features--mobile"
);
let dropdownCompanyMobile = document.querySelector(
  ".dropdown--company--mobile"
);
let closeIcon = document.querySelector(".mobile__close-icon");
let menuNavigation = document.querySelector(".mobile__menu-navigation");
let menuIcon = document.querySelector(".mobile__menu-icon");

function droping(doc) {
  if (doc.style.display == "block") doc.style.display = "none";
  else doc.style.display = "block";
}

function onClickEvent(doc, elt) {
  doc.addEventListener("click", () => {
    droping(elt);
  });
}

onClickEvent(featuresMobile, dropdownFeaturesMobile);
onClickEvent(companyMobile, dropdownCompanyMobile);
onClickEvent(features, dropdownFeatures);
onClickEvent(company, dropdownCompany);
onClickEvent(menuIcon, menuNavigation);
onClickEvent(closeIcon, menuNavigation);
