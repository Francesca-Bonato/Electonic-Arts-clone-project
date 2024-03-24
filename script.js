// Set the copyright dynamically in the footer
const copyrightYear = document.querySelector("#copyright-year");

// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the element with the ID "copyright-year"
copyrightYear.innerText = currentYear;




const pricingSelect = document.querySelector("#ea-regional-pricing-button")
const pricingList = document.querySelector("#princing-items")

const countrySelect = document.querySelector("#ea-locale-button")


function pricingOnClick() {
    pricingSelect.addEventListener('click', () => {
     /*    pricingList.style.display = "flex"; */
     pricingList.classList.toggle("openPrice")
    })
}

pricingOnClick()