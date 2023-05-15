document.addEventListener('DOMContentLoaded', () => {
  //card options

  var cardArray = [
    {
      name: 'ovni',
      img: '../images/ovni.jpg'
    },
    {
      name: 'stego',
      img: '../images/stego-space.png'
    },
    {
      name: 'dino',
      img: '../images/dino.jpg'
    },
    {
      name: 'dinoBody',
      img: '../images/dino-body.png'
    },
    {
      name: 'blackOvni',
      img: '../images/black-ovni.jpg'
    },
    {
      name: 'planet',
      img: '../images/planet.png'
    },
    {
      name: 'ovni',
      img: '../images/ovni.jpg'
    },
    {
      name: 'stego',
      img: '../images/stego-space.png'
    },
    {
      name: 'dino',
      img: '../images/dino.jpg'
    },
    {
      name: 'dinoBody',
      img: '../images/dino-body.png'
    },
    {
      name: 'blackOvni',
      img: '../images/black-ovni.jpg'
    },
    {
      name: 'planet',
      img: '../images/planet.png'
    }
  ];
  console.log(cardArray);

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsChosenIds = [];
  let cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', '../images/blank-card.jpg');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.append(card);
    }
  }
  createBoard();

  var clicks = 0;

  function flipCard() {
    clicks++;
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 200);
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId === optionTwoId) {
      alert('You have clicked the same card!');
      cards[optionOneId].setAttribute('src', '../images/blank-card.jpg');
      cards[optionTwoId].setAttribute('src', '../images/blank-card.jpg');
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert('WELL DONE!');
      cards[optionOneId].setAttribute('src', '../images/removed-card.jpg');
      cards[optionTwoId].setAttribute('src', '../images/removed-card.jpg');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      alert('Sorry, try again.');
      cards[optionOneId].setAttribute('src', '../images/blank-card.jpg');
      cards[optionTwoId].setAttribute('src', '../images/blank-card.jpg');
    }
    cardsChosen = [];
    cardsChosenIds = [];
    resultDisplay.textContent = cardsWon.length * 10; // I put "*10" just because I liked it to show a bigger score than the length of the array.
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent =
        parseInt(cardsWon.length * 10 + 10000 / clicks, 10) +
        '  ************  CONGRATULATIONS, YOU HAVE WON!';
      //resultDisplay.textContent = " CONGRATULATIONS! YOU HAVE WON!";
    }
  }
});
