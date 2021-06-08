const PRICE_PER_PAGEVIEW = 0.16

let pageviewsInput = document.getElementById('pageview')
let billingChoice = document.getElementById('billing')
let pvTotal = document.getElementById('pageviews-total')
let priceTotal = document.getElementById('price-total')
let frequency = document.getElementById('frequency')

let pageviewValue = pageviewsInput.value
let billingChecked = billingChoice.checked

const calculatePrice = (total, flag) => {
    let value = flag ? PRICE_PER_PAGEVIEW * total * 12 : PRICE_PER_PAGEVIEW * total
    return value.toFixed(2)
}

const setValues = () => {
    pvTotal.innerHTML = `${pageviewValue}k`
    priceTotal.innerHTML = `$${calculatePrice(pageviewValue, billingChecked)}`
    frequency.innerHTML = billingChecked ? 'year' : 'month'
}
setValues()

pageviewsInput.addEventListener('input', () => {
    pageviewValue = pageviewsInput.value
    setValues()
})

billingChoice.addEventListener('change', () => {
    billingChecked = billingChoice.checked
    setValues()
})