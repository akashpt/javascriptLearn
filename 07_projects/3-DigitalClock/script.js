const clock = document.getElementById('clock');

function updateTime() { // Function to keep the code clean
    const now = new Date();
    clock.textContent = now.toLocaleTimeString(); // textContent is generally preferred
}

setInterval(updateTime, 1000); // Call the function every second

// Initial call to display time immediately
updateTime(); 
