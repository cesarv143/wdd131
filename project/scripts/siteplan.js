const registerAthlete = () => {
    const name = document.querySelector("#name").value.trim();
    const age = document.querySelector("#age").value.trim();
    const level = document.querySelector("input[name='level']:checked")?.value;

    if (!name || !age || !level) {
        alert("Please fill out all fields before registering.");
        return;
    }

    const athleteData = {
        name: name,
        age: parseInt(age),
        level: level
    };

    
    localStorage.setItem("boxingAthlete", JSON.stringify(athleteAthlete));
    updateWelcomeMessage(athleteData);
};

const updateWelcomeMessage = (user) => {
    const display = document.querySelector("#welcome");
    
    display.innerHTML = `<p>👊 <strong>Welcome, ${user.name}!</strong> You are officially registered as a ${user.level} boxer.</p>`;
};

const showGearList = () => {
    const level = document.querySelector("input[name='level']:checked")?.value;
    const gearListDiv = document.querySelector("#gearList");
    
    if (!level) {
        alert("Please select a training level to see recommendations.");
        return;
    }

    const gearMap = {
        beginner: ["Hand wraps", "12oz Training Gloves", "Jump rope"],
        intermediate: ["Mouthguard", "Headgear", "Sparring Gloves"],
        advanced: ["Custom Boxing Shoes", "Professional Gloves", "Speed Bag"]
    };

    
    const items = gearMap[level].map(item => `<li>${item}</li>`).join("");
    gearListDiv.innerHTML = `<h3>Recommended Gear:</h3><ul>${items}</ul>`;
};

const toggleTrainingTips = () => {
    const tipsDiv = document.querySelector("#trainingTips");
    tipsDiv.classList.toggle("tips-visible");
    tipsDiv.classList.toggle("tips-hidden");
};


document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelector("#currentYear").textContent = new Date().getFullYear();

    
    const savedData = localStorage.getItem("boxingAthlete");
    if (savedData) {
        updateWelcomeMessage(JSON.parse(savedData));
    }

    
    document.querySelector("#registerBtn").addEventListener("click", registerAthlete);
    document.querySelector("#gearBtn").addEventListener("click", showGearList);
    document.querySelector("#toggleTipsBtn").addEventListener("click", toggleTrainingTips);
});