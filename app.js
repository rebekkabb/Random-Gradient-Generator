
const colorBox = document.querySelector('.color-bg');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const infoText = document.querySelector('.info-text');

let status = false;

let timer = null;

if (startButton) {
    startButton.addEventListener('click', function () {
        status = true;
        if (status === true) {
            timer = setInterval(onTick, 1000);
        }
        startButton.classList.add('disabled');

    });
}

if (stopButton) {
    stopButton.addEventListener('click', function () {
        status = false;
        startButton.classList.remove('disabled');
    })
}


function onTick() {
    if (status === false) {
        complete();
        return;
    }

    const generatedColor = generateRandomGradient();
    colorBox.style.background = generatedColor;
    infoText.innerHTML = "background: " + generatedColor + ";";
}


function complete() {
    clearInterval(timer);
    timer = null;
}



function generateRandomGradient() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const  firstColor1 = randomBetween(0, 255);
    const  firstColor2 = randomBetween(0, 255);
    const  firstColor3 = randomBetween(0, 255);
    const  secondColor1 = randomBetween(0, 255);
    const  secondColor2 = randomBetween(0, 255);
    const  secondColor3 = randomBetween(0, 255);
    return 'linear-gradient(to right, rgba(' + firstColor1 + ',' + firstColor2 + ',' + firstColor3 + ','
        + '255' + ') 0%, rgba(' + secondColor1 + ',' + secondColor2 + ',' + secondColor3 + ',' + '255' + ') 100%)';
}


