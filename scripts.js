let currentPage = 1;
const reviewsPerPage = 3;

function showPage(page) {
    const reviews = document.querySelectorAll('.review');
    reviews.forEach((review, index) => {
        review.style.display = (index >= (page - 1) * reviewsPerPage && index < page * reviewsPerPage) ? 'block' : 'none';
    });
    document.getElementById('page-number').textContent = page;
}

function nextPage() {
    const totalPages = Math.ceil(document.querySelectorAll('.review').length / reviewsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function searchReviews() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const reviews = document.querySelectorAll('.review');
    
    reviews.forEach(review => {
        const title = review.querySelector('h2').textContent.toLowerCase();
        if (title.includes(query)) {
            review.style.display = 'block';
        } else {
            review.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    showPage(currentPage);
});
