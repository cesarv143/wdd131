function saveRegistrationData() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const level = document.querySelector("input[name='level']:checked")?.value;

  if (!name || !age || !level) {
    alert("Please complete all fields.");
    return;
  }

  const user = {
    name,
    age: parseInt(age),
    level
  };

  localStorage.setItem("boxingUser", JSON.stringify(user));
  displayWelcomeMessage(user);
}

function displayWelcomeMessage(user) {
  const message = `👊 Welcome, ${user.name}! You're registered as a ${user.level} boxer.`;
  document.getElementById("welcome").textContent = message;
}

function loadUserData() {
  const saved = localStorage.getItem("boxingUser");
  if (saved) {
    const user = JSON.parse(saved);
    displayWelcomeMessage(user);
  }
}

function toggleTips() {
  const tips = document.getElementById("trainingTips");
  tips.style.display = tips.style.display === "none" ? "block" : "none";
}

function showGearRecommendations() {
  const level = document.querySelector("input[name='level']:checked")?.value;
  const gear = {
    beginner: ["Hand wraps", "Basic gloves", "Jump rope"],
    intermediate: ["Sparring gloves", "Headgear", "Mouthguard"],
    advanced: ["Pro gloves", "Custom shoes", "Heavy bag"]
  };

  if (gear[level]) {
    const list = gear[level].map(item => `<li>${item}</li>`).join("");
    document.getElementById("gearList").innerHTML = `<ul>${list}</ul>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadUserData();

  document.getElementById("registerBtn")?.addEventListener("click", saveRegistrationData);
  document.getElementById("toggleTipsBtn")?.addEventListener("click", toggleTips);
  document.getElementById("gearBtn")?.addEventListener("click", showGearRecommendations);
});