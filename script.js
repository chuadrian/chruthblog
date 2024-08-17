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
        return;
    }

    //filter posts based on queryy
    const results = posts.filter(post => post.title.toLowerCase().includes(query));

    //display new results
    results.forEach(post => {
        const postElement = document.createElement('p');
        
        //create a link for each post
        const linkElement = document.createElement('a');
        linkElement.href = post.url;  // URL to navigate to
        linkElement.textContent = `${post.title} - ${post.date}`;  //text to display
        
        postElement.appendChild(linkElement);
        resultsContainer.appendChild(postElement);
    });
}

//attach event listener to the search input
document.getElementById('search-input').addEventListener('input', searchPosts);

