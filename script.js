// Banco de flashcards (tema AGRINHO / agricultura / sustentabilidade)
const flashcards = [
    {
        question: "O que é agricultura sustentável?",
        answer: "É a prática agrícola que busca produzir alimentos de forma equilibrada, preservando o meio ambiente, os recursos naturais e garantindo a qualidade de vida das gerações futuras."
    },
    {
        question: "Qual a importância da rotação de culturas?",
        answer: "A rotação de culturas melhora a fertilidade do solo, reduz pragas e doenças, e diminui a necessidade de agrotóxicos e fertilizantes químicos."
    },
    {
        question: "O que significa AGRINHO?",
        answer: "O Programa Agrinho é uma iniciativa educacional do SENAR que promove a formação de cidadãos conscientes sobre temas como meio ambiente, cidadania e agropecuária."
    },
    {
        question: "Por que a preservação da água é essencial no campo?",
        answer: "A água é fundamental para a produção de alimentos. Sua preservação garante a irrigação, a qualidade dos produtos e a sustentabilidade dos ecossistemas."
    },
    {
        question: "O que é compostagem?",
        answer: "É o processo natural de decomposição de resíduos orgânicos que transforma restos de alimentos e vegetais em adubo rico em nutrientes para o solo."
    },
    {
        question: "Qual o papel das abelhas na agricultura?",
        answer: "As abelhas são polinizadoras essenciais. Elas contribuem diretamente para a produção de muitas culturas, como frutas, hortaliças e grãos."
    },
    {
        question: "O que é agroecologia?",
        answer: "É uma abordagem que une conhecimentos científicos e tradicionais para criar sistemas agrícolas sustentáveis, respeitando a biodiversidade e os ciclos naturais."
    },
    {
        question: "Como a tecnologia ajuda no campo?",
        answer: "Com drones, sensores, aplicativos e agricultura de precisão, o produtor consegue usar menos recursos, aumentar a produtividade e reduzir impactos ambientais."
    }
];

let currentIndex = 0;
let isFlipped = false;

// Elementos do DOM
const flashcard = document.getElementById('flashcard');
const cardQuestion = document.getElementById('card-question');
const cardAnswer = document.getElementById('card-answer');
const counter = document.getElementById('counter');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnFlip = document.getElementById('btn-flip');
const btnShuffle = document.getElementById('btn-shuffle');

// Atualiza o cartão atual
function updateCard() {
    const card = flashcards[currentIndex];
    cardQuestion.textContent = card.question;
    cardAnswer.textContent = card.answer;
    counter.textContent = `${currentIndex + 1} / ${flashcards.length}`;

    // Reseta a virada
    if (isFlipped) {
        flashcard.classList.remove('flipped');
        isFlipped = false;
    }
}

// Virar o cartão
function flipCard() {
    flashcard.classList.toggle('flipped');
    isFlipped = !isFlipped;
}

// Próximo cartão
function nextCard() {
    currentIndex = (currentIndex + 1) % flashcards.length;
    updateCard();
}

// Cartão anterior
function prevCard() {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    updateCard();
}

// Embaralhar
function shuffleCards() {
    for (let i = flashcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
    }
    currentIndex = 0;
    updateCard();
}

// Eventos
flashcard.addEventListener('click', flipCard);
btnFlip.addEventListener('click', flipCard);
btnNext.addEventListener('click', nextCard);
btnPrev.addEventListener('click', prevCard);
btnShuffle.addEventListener('click', shuffleCards);

// Inicialização
updateCard();
