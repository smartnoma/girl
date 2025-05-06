// Create floating elements
function createFloatingElements() {
  const heartsContainer = document.querySelector(".floating-hearts");
  const flowersContainer = document.querySelector(".floating-flowers");

  // Create hearts
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    heart.style.animation = `float-up ${
      Math.random() * 15 + 10
    }s linear infinite`;
    heart.style.animationDelay = Math.random() * 5 + "s";
    heartsContainer.appendChild(heart);
  }

  // Create flowers
  const flowers = ["🌸", "🌺", "🌹", "🌻", "🌼"];
  for (let i = 0; i < 10; i++) {
    const flower = document.createElement("div");
    flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.position = "absolute";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.top = Math.random() * 100 + "vh";
    flower.style.fontSize = Math.random() * 25 + 15 + "px";
    flower.style.opacity = Math.random() * 0.5 + 0.3;
    flower.style.animation = `float-down ${
      Math.random() * 20 + 10
    }s linear infinite`;
    flower.style.animationDelay = Math.random() * 5 + "s";
    flowersContainer.appendChild(flower);
  }
}

// Modal functionality
const locationBtn = document.getElementById("location-btn");
const paymentBtn = document.getElementById("payment-btn");
const locationModal = document.getElementById("location-modal");
const paymentModal = document.getElementById("payment-modal");
const closeLocation = document.getElementById("close-location");
const closePayment = document.getElementById("close-payment");
const exitButtons = document.querySelectorAll(".exit-button");

// Open modals
locationBtn.addEventListener("click", () => {
  locationModal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

paymentBtn.addEventListener("click", () => {
  paymentModal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

// Close modals
function closeAllModals() {
  locationModal.style.display = "none";
  paymentModal.style.display = "none";
  document.body.style.overflow = "auto";
}

closeLocation.addEventListener("click", closeAllModals);
closePayment.addEventListener("click", closeAllModals);

exitButtons.forEach((button) => {
  button.addEventListener("click", closeAllModals);
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === locationModal || e.target === paymentModal) {
    closeAllModals();
  }
});

// Copy card number
function copyCardNumber() {
  const cardNumber = document.getElementById("cardNumber").textContent;
  navigator.clipboard.writeText(cardNumber.replace(/\s/g, "")).then(() => {
    const copyBtn = document.querySelector(".copy-btn");
    const originalText = copyBtn.textContent;
    copyBtn.textContent = "✅ Nusxalandi!";
    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 2000);
  });
}

// Add animation keyframes
const style = document.createElement("style");
style.innerHTML = `
    @keyframes float-up {
      0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
      100% { transform: translateY(-100px) rotate(360deg); opacity: 0.7; }
    }
    @keyframes float-down {
      0% { transform: translateY(-100px) rotate(0deg); opacity: 0; }
      100% { transform: translateY(100vh) rotate(360deg); opacity: 0.7; }
    }
  `;
document.head.appendChild(style);

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  createFloatingElements();
});
