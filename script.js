const bgMusic = document.getElementById('bgMusic');
const musicControl = document.getElementById('musicControl');
let isMusicPlaying = true;

musicControl.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicControl.classList.remove('playing');
    } else {
        bgMusic.play();
        musicControl.classList.add('playing');
    }
    isMusicPlaying = !isMusicPlaying;
});

const messages = [
    {
        text: "MAUU TIDAKK SALL?",
        image: "https://i.pinimg.com/736x/1e/7c/6f/1e7c6ff7a0c26f7eaefbce683656193d.jpg"
    },
    {
        text: "PENCETT YANG KIRI SALL",
        image: "https://i.pinimg.com/736x/90/73/a9/9073a9359bff531cd830ae7384752934.jpg"
    },
    {
        text: "terakhir, kalo \"no\" PARAHH SIH SALL, yaudah dehh",
        image: "https://i.pinimg.com/736x/a6/43/f5/a643f5a40db387585b56bc767b66fddb.jpg"
    }
];

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(() => createHeart(), 300);

const title = document.querySelector('.title');
const noBtn = document.querySelector('.no-btn');
const yesBtn = document.querySelector('.yes-btn');
let noCount = 0;

function runAway(e) {
    const noButton = e.target;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const isMobile = window.innerWidth <= 768;

    // Ensure button stays within 80% of the screen
    const safeArea = {
        minX: 20,
        maxX: windowWidth - buttonWidth - 20,
        minY: 20,
        maxY: windowHeight - buttonHeight - 20
    };

    let newX, newY;

    // Different movement patterns for mobile and desktop
    if (isMobile) {
        // Smoother, more controlled movement for mobile
        const moveDistance = 100; // Smaller distance for mobile
        newX = Math.max(safeArea.minX, Math.min(safeArea.maxX,
            buttonWidth + (Math.random() * (windowWidth - buttonWidth * 2))));
        newY = Math.max(safeArea.minY, Math.min(safeArea.maxY,
            buttonHeight + (Math.random() * (windowHeight - buttonHeight * 2))));
    } else {
        // Faster, more random movement for desktop
        newX = Math.max(safeArea.minX, Math.min(safeArea.maxX,
            Math.random() * (windowWidth - buttonWidth)));
        newY = Math.max(safeArea.minY, Math.min(safeArea.maxY,
            Math.random() * (windowHeight - buttonHeight)));
    }

    noButton.style.position = 'fixed';
    noButton.style.transition = isMobile ? 'all 0.8s ease' : 'all 0.3s ease';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
    noButton.style.zIndex = '9999';
}

yesBtn.addEventListener('click', () => {
    title.innerHTML = "HORE!! i knew you would say vqsghvwegdsbjs";
    document.querySelector('img').src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/good-night-kiss-kiss.gif";
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
    if (!isMusicPlaying) {
        bgMusic.play();
        musicControl.classList.add('playing');
        isMusicPlaying = true;
    }
});

noBtn.addEventListener('click', () => {
    if (noCount < 3) {
        noCount++;
        title.innerHTML = messages[noCount - 1].text;
        document.querySelector('img').src = messages[noCount - 1].image;
    } else {
        title.innerHTML = "HEHE TAPI BOONG SAL, MUHEHEHE";
        if (!noBtn.classList.contains('running')) {
            noBtn.classList.add('running');
            runAway({ target: noBtn });
        }
    }
});

// Handle both mouse and touch events
noBtn.addEventListener('mouseover', (e) => {
    if (noCount >= 3) runAway(e);
});

noBtn.addEventListener('touchstart', (e) => {
    if (noCount >= 3) {
        e.preventDefault();
        runAway(e);
    }
}, { passive: false });

// Keep button in view
setInterval(() => {
    if (noCount >= 3 && noBtn.classList.contains('running')) {
        const rect = noBtn.getBoundingClientRect();
        if (rect.right < 0 || rect.bottom < 0 || 
            rect.left > window.innerWidth || 
            rect.top > window.innerHeight) {
            runAway({ target: noBtn });
        }
    }
}, 100);
