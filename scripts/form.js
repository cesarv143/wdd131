const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.querySelector("#product-name");
    const yearSpan = document.querySelector("#year");

    
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();

    
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; 
        option.textContent = product.name; 
        productSelect.appendChild(option);
    });

    
    if (window.location.pathname.includes("review.html")) {
        let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);
        
        
        const counterDisplay = document.querySelector("#counter");
        if(counterDisplay) counterDisplay.textContent = `Reviews completed: ${reviewCount}`;
    }
});