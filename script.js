//access the two select elements (active below 1007px)
let pricingSelect = document.querySelector('#network-footer-pricing');
let localeSelect = document.querySelector('#network-footer-language');

//access the span that will show the selected pricing area
const selectedPricingSpan = document.querySelector('.ea-regional-pricing-button-selected-text')
selectedPricingSpan.innerText = pricingSelect.value;

//add an event listener for the "change" event of the "select" element
pricingSelect.addEventListener('change', () => {
    const selectedPricing = pricingSelect.value;
    selectedPricingSpan.innerText=selectedPricing;
})

//access the span that will show the selected locale area and the one for the corresponding flag
const selectedLocaleSpan = document.querySelector('.ea-locale-selector__selected-text')
selectedLocaleSpan.innerText = localeSelect.value;

const selectedLocaleFlagSpan = document.querySelector('.ea-locale-selector__selected-flag')
selectedLocaleFlagSpan.id = (localeSelect.value).split(" ").join("-");

//add an event listener for the "change" event of the "select" element
localeSelect.addEventListener('change', () => {
    const selectedLocale = localeSelect.value;
    selectedLocaleSpan.innerText=selectedLocale;
    selectedLocaleFlagSpan.id = (localeSelect.value).split(" ").join("-");
})



//access the two network footer buttons relative to pricing and locale:
const pricingButton = document.querySelector("#ea-regional-pricing-button")
const localeButton = document.querySelector("#ea-locale-button")

//access the two div elements (active above 1007px)
const pricingList = document.querySelector("#princing-items")
const localeList = document.querySelector("#locale-items")

const mediaQuery = window.matchMedia("(min-width: 1007px)")

const priceClassToHide = document.querySelector(".openPrice")
const localeClassToHide = document.querySelector(".openLocale")

// ! Function to toggle div in pricing select on 1007px window
function pricingOnClick() {
    // ! if click select add div class 
    pricingButton.addEventListener('click', (e) => {
        if (mediaQuery.matches) {
            pricingList.classList.toggle("openPrice")
            e.stopPropagation()
        } else {
            pricingList.classList.remove("openPrice")
        }
    })

    // ! if click anywhere on the screen remove class 
    document.addEventListener("click", (e) => {
        pricingList.classList.remove("openPrice")
        e.stopPropagation()
    })
}

pricingOnClick()

// ! Function to toggle div in locale select on 1007px window
function localeOnClick() {
    // ! if click select add div class 
    localeButton.addEventListener('click', (e) => {
        if (mediaQuery.matches) {
            localeList.classList.toggle("openLocale")
            e.stopPropagation()
        } else {
            localeList.classList.remove("openLocale")
        }
    })

    // ! if click anywhere on the screen remove class 
    document.addEventListener("click", (e) => {
        localeList.classList.remove("openLocale")
        e.stopPropagation()
    })
}

localeOnClick()

//

//---- Copyright

// Set the copyright dynamically in the footer
const copyrightYear = document.querySelector("#copyright-year");

// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the element with the ID "copyright-year"
copyrightYear.innerText = currentYear;