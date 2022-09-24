const cardArray = [
    {
        nom: 'cheeseburger',
        img: 'images/cheeseburger.png' 
    },
    {
        nom: 'fries',
        img: 'images/fries.png'
    },
    {
        nom: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        nom: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        nom: 'milshake',
        img: 'images/milkshake.png'
    },
    {
        nom: 'pizza',
        img: 'images/pizza.png'
    },

    {
        nom: 'cheeseburger',
        img: 'images/cheeseburger.png' 
    },
    {
        nom: 'fries',
        img: 'images/fries.png'
    },
    {
        nom: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        nom: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        nom: 'milshake',
        img: 'images/milkshake.png'
    },
    {
        nom: 'pizza',
        img: 'images/pizza.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
let cardChose = []
let cardChoseId = []
const cardWon = []

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
        
    }
}

createBoard()

const result = document.querySelector('#result')

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOne = cardChoseId[0]
    const optionTwo = cardChoseId[1]

    if(optionOne == optionTwo){
        alert('You have clicked the same image!')
    }

    if(cardChose[0] == cardChose[1]){
        alert('You have a match!')
        cards[optionOne].setAttribute('src', 'images/white.png')
        cards[optionTwo].setAttribute('src', 'images/white.png')
        cards[optionOne].removeEventListener('click', flipCard)
        cards[optionTwo].removeEventListener('click', flipCard)
        cardWon.push(cardChose)
    }else{
        cards[optionOne].setAttribute('src', 'images/blank.png')
        cards[optionTwo].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again.')
    }
    cardChose = []
    cardChoseId = []
    if(cardWon.length == cardArray.length/2){
        result.textContent = 'Congratulation!'
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardChose.push(cardArray[cardId].nom)
    cardChoseId.push(cardId)
    
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChose.length === 2){
        setTimeout( checkMatch, 500)
    }
}