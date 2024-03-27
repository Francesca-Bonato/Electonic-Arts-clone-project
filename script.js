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

const mediaQuery = window.matchMedia("(min-width: 1007px)")

const priceClassToHide = document.querySelector(".openPrice")
const localeClassToHide = document.querySelector(".openLocale")

// ! Function to toggle div in pricing select on 1007px window
function pricingOnClick() {
    // ! if click select add div class 
    pricingSelect.addEventListener('click', (e) => {
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
    localeSelect.addEventListener('click', (e) => {
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
