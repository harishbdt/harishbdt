let count = 0; // Initialize count to 0

function increaseCount() {
    count++; // Increment the count by 1
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; //Display the count in the HTML
}

function checkCountValue() {
    if (count === 10) {
        alert("Your followers count reached to 10. Congratulations");
    } else if (count === 20) {
        alert("Your followers count reached to 20. Congratulations");
    } else if (count === 0) {
        alert("Your followers count is Reset to ZERO");
    }
}

function resetCount() {
    count = 0;
    displayCount();
    checkCountValue();
}