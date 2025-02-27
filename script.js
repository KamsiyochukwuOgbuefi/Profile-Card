const time = document.querySelector('#time');

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    time.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update time every second
setInterval(updateTime, 1000);

// Initialize clock immediately on load
updateTime();
