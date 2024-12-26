function navigateTo(page) {
    window.location.href = page;
}


// NIN Validation Simulation
document.getElementById('nin').addEventListener('input', function () {
    const ninValidationMessage = document.getElementById('nin-validation');
    const ninValue = this.value;

    if (ninValue.length === 11 && !isNaN(ninValue)) {
        ninValidationMessage.textContent = "NIN Validated Successfully!";
        ninValidationMessage.style.color = "green";
    } else {
        ninValidationMessage.textContent = "Invalid NIN. Must be 11 digits.";
        ninValidationMessage.style.color = "red";
    }
});

// GPS Coordinates Capture Simulation
function captureGPS() {
    const gpsDisplay = document.getElementById('gps-coordinates');
    // Simulating GPS coordinates
    gpsDisplay.textContent = "Coordinates: 13.0059, 5.2476"; // Example: Sokoto coordinates
}
