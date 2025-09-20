const temp = 45; // °F
const wind = 5;  // mph

function calculateWindChill(t, s) {
  return (
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(s, 0.16) +
    0.4275 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

const windChillElement = document.getElementById("windchill");
if (temp <= 50 && wind > 3) {
  windChillElement.textContent = `${calculateWindChill(temp, wind)} °F`;
} else {
  windChillElement.textContent = "N/A";
}

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;