// Messages to show when "No" is clicked
const noMessages = [
    "What rey baby fellow, why no? 🥺",
    "BABY STOP PLAYING WITH ME! 💭",
    "Don't break my heart, wife! 💔",
    "Pretty fellow just say YES? 🥹",
    "Come on, you know you want to be mine! 😊",
    "Alex Valkov ki kasam, yes bolde... 👀",
    "Sleepy fellow say y E s! 😄",
    "I won't give up fellow! 💪",
    "Oops, No other options left! heheh 😅",
    "Look how big Yes is now! 🎯",
    "One more No and Yes will take over! 🚀",
    "The Yes button is inevitable! ⭐",
    "You can't escape the Yes! 🌟"
];

let noClickCount = 0;
let yesBtnScale = 1;

// Get elements
const surpriseBtn = document.getElementById('surpriseBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const surpriseScreen = document.getElementById('surpriseScreen');
const valentineScreen = document.getElementById('valentineScreen');
const successScreen = document.getElementById('successScreen');
const heartsContainer = document.getElementById('heartsContainer');
const successHeartsContainer = document.getElementById('successHeartsContainer');

// Function to create flying hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = ['❤️', '💕', '💖', '💗', '💘', '💝'][Math.floor(Math.random() * 6)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    return heart;
}

// Start hearts animation
function startHearts(container) {
    const interval = setInterval(() => {
        const heart = createHeart();
        container.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 200);

    return interval;
}

// Surprise button click
surpriseBtn.addEventListener('click', () => {
    surpriseScreen.classList.remove('active');
    valentineScreen.classList.add('active');
    startHearts(heartsContainer);
});

// Yes button click
yesBtn.addEventListener('click', () => {
    valentineScreen.classList.remove('active');
    successScreen.classList.add('active');
    startHearts(successHeartsContainer);

    // Create explosion of hearts
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = createHeart();
            successHeartsContainer.appendChild(heart);
        }, i * 50);
    }
});

// No button click
noBtn.addEventListener('click', () => {
    noClickCount++;

    // Change message
    if (noClickCount <= noMessages.length) {
        message.textContent = noMessages[noClickCount - 1];
    } else {
        message.textContent = "Fine, I'll make Yes even BIGGER! 😤";
    }

    // Increase Yes button size
    yesBtnScale += 0.25;
    yesBtn.style.transform = `scale(${yesBtnScale})`;
    yesBtn.style.zIndex = '100';

    // Add a little shake animation to the No button
    noBtn.style.animation = 'shake 0.5s';
    setTimeout(() => {
        noBtn.style.animation = '';
    }, 500);

    // If Yes button gets really big, make it fill more space
    if (yesBtnScale > 5) {
        yesBtn.style.position = 'fixed';
        yesBtn.style.top = '50%';
        yesBtn.style.left = '50%';
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesBtnScale})`;
    }
});

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);
