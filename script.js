
const posts = [
    { title: "The Best Fonts to Use For Your Website", date: "17 August 2024", category: "Web Design" },
    { title: "What Programming Languages Suit Me", date: "18 August 2024", category: "Web Design" },
    { title: "Being Consistent In Programming", date: "19 August 2024", category: "Web Design" },
];

function searchPosts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');

    // Clear previous results
    resultsContainer.innerHTML = '';

    if (query === '') {
        // If search bar is cleared, clear the results
        return;
    }

    // Filter posts based on query
    const results = posts.filter(post => post.title.toLowerCase().includes(query));

    // Display new results
    results.forEach(post => {
        const postElement = document.createElement('p');
        postElement.textContent = `${post.title} - ${post.date}`;
        resultsContainer.appendChild(postElement);
    });
}

document.getElementById('search-input').addEventListener('input', searchPosts);
