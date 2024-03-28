//access the two select elements (active below 1007px)
let pricingSelect = document.querySelector("#network-footer-pricing");
let localeSelect = document.querySelector("#network-footer-language");

//access the span that will show the selected pricing area
const selectedPricingSpan = document.querySelector(
  ".ea-regional-pricing-button-selected-text"
);
selectedPricingSpan.innerText = pricingSelect.value;

//add an event listener for the "change" event of the "select" element
pricingSelect.addEventListener("change", () => {
  const selectedPricing = pricingSelect.value;
  selectedPricingSpan.innerText = selectedPricing;
});

//access the span that will show the selected locale area and the one for the corresponding flag
const selectedLocaleSpan = document.querySelector(
  ".ea-locale-selector__selected-text"
);
selectedLocaleSpan.innerText = localeSelect.value;

const selectedLocaleFlagSpan = document.querySelector(
  ".ea-locale-selector__selected-flag"
);
selectedLocaleFlagSpan.id = localeSelect.value.split(" ").join("-");

//add an event listener for the "change" event of the "select" element
localeSelect.addEventListener("change", () => {
  const selectedLocale = localeSelect.value;
  selectedLocaleSpan.innerText = selectedLocale;
  selectedLocaleFlagSpan.id = localeSelect.value.split(" ").join("-");
});

//access the two network footer buttons relative to pricing and locale:
const pricingButton = document.querySelector("#ea-regional-pricing-button");
const localeButton = document.querySelector("#ea-locale-button");

//access the two div elements (active above 1007px)
const pricingList = document.querySelector("#princing-items");
const localeList = document.querySelector("#locale-items");

const mediaQuery = window.matchMedia("(min-width: 1007px)");

const priceClassToHide = document.querySelector(".openPrice");
const localeClassToHide = document.querySelector(".openLocale");

//add an event listener for the "click" event of the items of the lists
const pricingListItems = document.querySelectorAll(
  ".ea-regional-pricing-selector__item"
);
const localeListItems = document.querySelectorAll(".ea-locale-selector__item");

pricingListItems.forEach((item) => {
  item.addEventListener("click", () => {
    const dataTextValue = item.getAttribute("data-text");
    selectedPricingSpan.innerText = dataTextValue;
  });
});

localeListItems.forEach((item) => {
  item.addEventListener("click", () => {
    const dataTextValue = item.getAttribute("data-text");
    selectedLocaleSpan.innerText = dataTextValue;
    selectedLocaleFlagSpan.id = dataTextValue.split(" ").join("-");
  });
});

const pricingChevron = document.querySelector("#pricing-ea-chevron-footer");
const pricingWhitespace = document.querySelector(
  "#ea-pricing-button-whitespace"
);

// ! Function to toggle div in pricing select on 1007px window
function pricingOnClick() {
  // ! if click select add div class
  pricingButton.addEventListener("click", (e) => {
    if (mediaQuery.matches) {
      pricingChevron.classList.toggle("upside-down");
      pricingWhitespace.classList.toggle("whitespace");
      pricingList.classList.toggle("openPrice");
      localeList.classList.remove("openLocale");
      e.stopPropagation();
    } else {
      pricingList.classList.remove("openPrice");
    }
  });

  // ! if click anywhere on the screen remove class
  document.addEventListener("click", (e) => {
    pricingList.classList.remove("openPrice");
    pricingWhitespace.classList.remove("whitespace");
    pricingChevron.classList.remove("upside-down");
    e.stopPropagation();
  });
}

pricingOnClick();

const localeChevron = document.querySelector("#locale-ea-chevron-footer");
const localeWhitespace = document.querySelector("#ea-locale-button-whitespace");

// ! Function to toggle div in locale select on 1007px window
function localeOnClick() {
  // ! if click select add div class
  localeButton.addEventListener("click", (e) => {
    if (mediaQuery.matches) {
      localeChevron.classList.toggle("upside-down");
      localeWhitespace.classList.toggle("whitespace");
      localeList.classList.toggle("openLocale");
      pricingList.classList.remove("openPrice");

      e.stopPropagation();
    } else {
      localeList.classList.remove("openLocale");
    }
});

// ! if click anywhere on the screen remove class
document.addEventListener("click", (e) => {
    localeList.classList.remove("openLocale");
    localeChevron.classList.remove("upside-down");
    localeWhitespace.classList.remove("whitespace");
    e.stopPropagation();
  });
}

localeOnClick();

//---- Copyright -----
// Set the copyright dynamically in the footer
const copyrightYear = document.querySelector("#copyright-year");

// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the element with the ID "copyright-year"
copyrightYear.innerText = currentYear;
