// Create floating hearts
const heartsContainer = document.getElementById('hearts');
const heartEmojis = ['💕', '💗', '💖', '💘', '❤️', '🩷', '💓', '💞'];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  
  // Random position and size
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 18 + 14) + 'px';
  heart.style.animationDuration = (Math.random() * 5 + 6) + 's';
  heart.style.animationDelay = Math.random() * 2 + 's';
  
  heartsContainer.appendChild(heart);
  
  // Remove after animation
  setTimeout(() => {
    heart.remove();
  }, 10000);
}

// Spawn hearts regularly
setInterval(createHeart, 600);

// Initial burst
for (let i = 0; i < 8; i++) {
  setTimeout(createHeart, i * 200);
}

// Heart click counter
const heartBtn = document.getElementById('heartBtn');
const clickCountEl = document.getElementById('clickCount');
let clicks = 0;

const sweetMessages = [
  "I love you more! 😘",
  "Ikaw pa rin ang favorite ko 💕",
  "More months with you pleaseee 🥹",
  "My heart is yours, Love 💗",
  "Forever and always 🤍",
  "You're my person 🥰",
  "Mahal na mahal kita ❤️",
  "Best decision ever was choosing you ✨"
];

heartBtn.addEventListener('click', () => {
  clicks++;
  clickCountEl.textContent = clicks;
  
  // Little bounce effect
  heartBtn.style.transform = 'scale(0.9)';
  setTimeout(() => {
    heartBtn.style.transform = '';
  }, 150);
  
  // Create a burst of hearts on click
  for (let i = 0; i < 5; i++) {
    setTimeout(createHeart, i * 80);
  }
  
  // Show a random sweet message briefly
  if (clicks % 3 === 0) {
    const msg = document.createElement('div');
    msg.textContent = sweetMessages[Math.floor(Math.random() * sweetMessages.length)];
    msg.style.cssText = `
      position: fixed;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      color: #ff6b9d;
      padding: 12px 24px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 1.1rem;
      box-shadow: 0 8px 25px rgba(255,107,157,0.3);
      z-index: 100;
      animation: fadeUp 1.8s ease forwards;
      pointer-events: none;
    `;
    document.body.appendChild(msg);
    
    setTimeout(() => msg.remove(), 1800);
  }
});

// Add fadeUp animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeUp {
    0% { opacity: 0; transform: translate(-50%, -40%); }
    20% { opacity: 1; transform: translate(-50%, -50%); }
    80% { opacity: 1; transform: translate(-50%, -60%); }
    100% { opacity: 0; transform: translate(-50%, -70%); }
  }
`;
document.head.appendChild(style);

// Countdown to October 19, 2026
const anniversaryDate = new Date('2026-10-19T00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = anniversaryDate - now;

  if (distance < 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);
