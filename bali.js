// Gallery carousel

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    const thumbnails = document.querySelectorAll('.thumbnails img');

    slides[currentIndex].classList.remove('active');
    thumbnails[currentIndex].classList.remove('active');

    currentIndex = index;

    slides[currentIndex].classList.add('active');
    thumbnails[currentIndex].classList.add('active');
}

function currentSlide(index) {
    showSlide(index);
}













function openTab(event, tabName) {
    var i, tabContent, tabLinks;

    // Hide all tab content
    tabContent = document.getElementsByClassName('tab-content');
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    // Remove 'active' class from all tab links
    tabLinks = document.getElementsByClassName('tab-link');
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active');
    }

    // Show the current tab and add 'active' class to the link
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}















// Variables for pricing logic
const adultPrice = 100;  // Example price per adult
const childPrice = 50;   // Example price per child

// Update total price on input change
document.getElementById("bookingForm").addEventListener("input", calculateTotalPrice);

function calculateTotalPrice() {
    const adults = parseInt(document.getElementById("adults").value);
    const children = parseInt(document.getElementById("children").value);

    const totalPrice = (adults * adultPrice) + (children * childPrice);
    document.getElementById("total-price").textContent = `$${totalPrice}`;
}

// Form submission event listener (for demo purposes)
document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Booking Confirmed!");
    // In a real application, you would redirect to a payment page or handle the booking logic.
});
