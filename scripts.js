document.addEventListener("DOMContentLoaded", function() {
    const reviews = [
        {
            title: "Fantastic Four (2005)",
            image: "images/Fantastic_Four_Poster.jpg",
            content: "This movie was awesome! I give it 4 stars.",
            stars: 3
        },
        {
            title: "Movie Title 2 (2024)",
            image: "placeholder.jpg",
            content: "Not as great as the first one. I give it 3 stars.",
            stars: 3
        },
        // Add more reviews here
    ];

    const reviewsContainer = document.getElementById("reviews-container");

    reviews.forEach(review => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");

        reviewElement.innerHTML = `
            <img src="${review.image}" alt="Movie Poster" class="poster">
            <div>
                <h3>${review.title}</h3>
                <p>${review.content}</p>
                <div class="stars">${'★'.repeat(review.stars)}${'☆'.repeat(5 - review.stars)}</div>
            </div>
        `;

        reviewsContainer.appendChild(reviewElement);
    });

    window.showPage = function(page) {
        const pages = document.querySelectorAll(".page");
        pages.forEach(p => p.style.display = "none");
        document.getElementById(page).style.display = "block";
    };

    showPage('home');
});
