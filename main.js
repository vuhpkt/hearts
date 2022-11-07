const body = document.querySelector('body');
const container = document.querySelector('.container');
body.onmousemove = (e) => {
    const heart = document.createElement('span');
    heart.className = 'mouse-heart';
    const size = Math.random() * 30 + 20;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    const rotate = Math.random() * 360
    heart.style.transform = `rotate(${rotate}deg) translate(-50%, -50%)`;

    heart.style.top = e.clientY + 'px';
    heart.style.left = e.clientX + 'px';
    body.appendChild(heart);
    setTimeout(() => {
        heart.remove()
    }, 990);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.appendChild(document.createElement('div'))
    heart.className = 'heart';
    
    const size = Math.random() * 10 + 10;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';

    const rotate = Math.random() * 360
    heart.style.transform = `rotate(${rotate}deg) translate(50%, 50%)`;
    heart.style.setProperty('--inner-rotate', -rotate + 'deg');
    heart.style.setProperty('--rotate', rotate + 'deg');
    if (rotate > 180 && rotate < 240 || rotate > 300 && rotate < 360) {
        heart.style.setProperty('animation', 'moveFast 4s linear')
    } else {
        heart.style.setProperty('animation', 'moveSlow 2s linear')
    }


    container.appendChild(heart);
    setTimeout(() => {
        heart.remove()
    }, 4000);
}

setInterval(() => {
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
    createHeart()
}, 200)