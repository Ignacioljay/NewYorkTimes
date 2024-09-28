const apiKey = 'IaLdA2fdWJUMyriRlfFtMEiWQw3A0H8Y';
const blogContainer = document.getElementById('blog-container');
const defaultImageUrl = 'https://via.placeholder.com/280x180.png?text=No+Image+Available';
const toggleButton = document.getElementById('toggle-button');
const categories = document.getElementById('categories');

async function fetchRandomNews(category = 'world') {
    try {
        const apiURL = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${apiKey}`;
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching random news", error);
        return [];
    }
}

function displayContent(articles) {
    blogContainer.innerHTML = "";
    articles.forEach((article) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");

        const img = document.createElement("img");
        img.src = article.multimedia ? article.multimedia[0].url : defaultImageUrl;
        img.alt = article.title || 'No title';

        const title = document.createElement("h2");
        title.textContent = article.title || 'Untitled Article';

        const description = document.createElement("p");
        description.textContent = article.abstract || 'No description available.';

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogContainer.appendChild(blogCard);
    });
}

async function loadCategoryNews(category) {
    try {
        const articles = await fetchRandomNews(category);
        displayContent(articles);
    } catch (error) {
        console.error("Error displaying content", error);
    }
}

loadCategoryNews();


document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const category = e.target.dataset.category;
        loadCategoryNews(category);
    });
});


toggleButton.addEventListener('click', () => {
    const isVisible = categories.style.display !== 'none';
    categories.style.display = isVisible ? 'none' : 'flex'; 
});

if (window.innerWidth <= 600) {
    categories.style.display = 'none';
}