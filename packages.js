// Update price range display dynamically
function updatePrice(value) {
    document.getElementById('price-output').textContent = `Rs${value}`;
}

// Handle applying filters (demo purposes)
document.querySelector('.apply-filters-btn').addEventListener('click', function() {
    const destination = document.getElementById('destination').value;
    const priceRange = document.getElementById('price-range').value;
    const experienceTypes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
    const duration = document.getElementById('duration').value;
    const sortBy = document.getElementById('sort').value;

    // Filter logic goes here (this is just a demo alert)
    alert(`Filters applied:
    Destination: ${destination}
    Price Range: Rs${priceRange}
    Experience Types: ${experienceTypes.join(', ')}
    Duration: ${duration}
    Sort By: ${sortBy}`);
});
