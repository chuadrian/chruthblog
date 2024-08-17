const posts = [
    { title: "The Best Fonts to Use For Your Website", date: "17 August 2024", category: "Web Design", url: "web_fonts.html" },
    { title: "What Programming Languages Suit Me", date: "18 August 2024", category: "Web Languages", url: "what_languages.html" },
    { title: "Being Consistent In Programming", date: "19 August 2024", category: "Being Consistent", url: "consistency.html" },
];

function searchPosts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');

    //clear previous results
    resultsContainer.innerHTML = '';

    if (query === '') {
        //if search bar is cleared, clear the results
        resultsContainer.style.display = 'none'; //hide results if search is emptyreturn;
    }

    //filter posts based on query
    const results = posts.filter(post => post.title.toLowerCase().includes(query));

    //display new results
    results.forEach(post => {
        const postElement = document.createElement('p');
        
        //create a link for each post
        const linkElement = document.createElement('a');
        linkElement.href = post.url;  //URL to navigate to
        linkElement.textContent = `${post.title} - ${post.date}`;  //Text to display
        
        postElement.appendChild(linkElement);
        resultsContainer.appendChild(postElement);
    });

    //show results
    resultsContainer.style.display = "block";
}

//attach event listeners to the search input
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', searchPosts);
searchInput.addEventListener('focus', () => {
    if (searchInput.value !== '') {
        document.getElementById('search-results').style.display = 'block';
    }
});

searchInput.addEventListener('blur', () => {
    if (searchInput.value === '') {
        document.getElementById('search-results').style.display = 'none';
    }
});
