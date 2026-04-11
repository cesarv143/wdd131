const gymPrograms = [
    { name: "Youth Boxing", schedule: "Mon-Wed-Fri at 4:00 PM", level: "Beginner" },
    { name: "Advanced Sparring", schedule: "Tue-Thu at 6:00 PM", level: "Advanced" },
    { name: "Conditioning", schedule: "Saturdays at 9:00 AM", level: "All Levels" }
];
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.querySelector("#currentYear");
    const modSpan = document.querySelector("#lastModified");
    
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (modSpan) modSpan.textContent = `Last Modified: ${document.lastModified}`;

    const visitDisplay = document.querySelector("#visit-message");
    if (visitDisplay) {
        let visits = Number(localStorage.getItem("gymVisits")) || 0;
        
        if (visits === 0) {
            visitDisplay.textContent = `Welcome! This is your first visit to the club.`;
        } else {
            visitDisplay.textContent = `Welcome back! You have visited us ${visits} times.`;
        }
        localStorage.setItem("gymVisits", visits + 1);
    }

    const programContainer = document.querySelector("#program-cards");
    if (programContainer) {
        
        gymPrograms.forEach(program => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h3>${program.name}</h3>
                <p><strong>Level:</strong> ${program.level}</p>
                <p><em>${program.schedule}</em></p>
            `;
            programContainer.appendChild(card);
        });
    }
});