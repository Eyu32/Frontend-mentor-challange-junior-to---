const quoteId = document.querySelector('#quote_id')
const quoteContainer =  document.querySelector('#quote')
const btn = document.querySelector('#btn')
const img = document.querySelector('#btn-image')

const url = "https://api.adviceslip.com/advice"

const getQuote = () => {
    // img.classList.add('rotate')
    quoteContainer.classList.remove('fade')
    fetch(url)
    .then(data => data.json())
    .then(item => {
        quoteContainer.classList.remove('fade')
        quoteId.textContent = `#${item.slip.id}`
        quoteContainer.innerHTML = `&#x201F${item.slip.advice}&#x201D`
        // img.classList.remove('rotate')
    })
}
getQuote()
btn.addEventListener('click', getQuote)