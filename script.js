// Set the copyright dynamically in the footer
const copyrightYear = document.querySelector("#copyright-year");

// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the element with the ID "copyright-year"
copyrightYear.innerText = currentYear;




const pricingSelect = document.querySelector("#ea-regional-pricing-button")
const pricingList = document.querySelector("#princing-items")

const localeSelect = document.querySelector("#ea-locale-button")
const localeList = document.querySelector("#locale-items")


function pricingOnClick() {
    pricingSelect.addEventListener('click', () => {
        pricingList.classList.toggle("openPrice")
    })
}

pricingOnClick()



function localeOnClick() {
    localeSelect.addEventListener('click', () => {
        localeList.classList.toggle("openLocale")
    })
}

localeOnClick()