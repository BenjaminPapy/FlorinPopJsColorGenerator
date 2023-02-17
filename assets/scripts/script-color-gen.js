// 1. Generate color funtion V
// 2. Apply the color to the div + the inner text on btn click V
// 3. Apply color on "spacebar" press V
// 4. Copy to a clipboard V

const colorCards = document.querySelectorAll('.card');
const btnEl = document.getElementById('btn-color');

colorCards.forEach(card => {
    card.addEventListener('click', () => {
        copyClipboard(card.innerText);
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        createPalette();
    }
});

btnEl.addEventListener('click', () => {
    createPalette()
});


async function copyClipboard(color) {
    await navigator.clipboard.writeText(color);

    const notificationEl = document.createElement('div');
    
    notificationEl.className = 'popup';

    notificationEl.innerHTML = `Color <b>${color}</b> is
     copied to the clipboard!`

    document.body.appendChild(notificationEl);

    setTimeout(() => {
        notificationEl.remove();
    }, 2000);
}

function createPalette() {
    colorCards.forEach(card => {
        const newColor = generateColor();

        card.querySelector('.card-color').style.background = newColor;
        card.querySelector('p').innerText = newColor;
    });
}

function generateColor() {
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c',
     'd', 'e', 'f'];

    let color = '#';

    for (let i = 0; i < 6; i ++) {
        color += hexArray[Math.floor(Math.random() *
         hexArray.length)];
    }

    return color
}