document.addEventListener('DOMContentLoaded', function() {
    const uploadButton = document.getElementById('upload-button');

    uploadButton.addEventListener('click', function() {
        const titleInput = document.getElementById('post-title');
        const imageInput = document.getElementById('post-image');

        const title = titleInput.value.trim();
        const imageLink = imageInput.value.trim();

        if (title && imageLink) {
            addPostToHomePage(title, imageLink);
            alert('Post uploaded successfully!');
        } else {
            alert('Please fill in both title and image link fields.');
        }
    });

    function addPostToHomePage(title, imageLink) {
        const blogPostsContainer = document.getElementById('blog-posts');

        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');

        postElement.innerHTML = `
            <h1>${title}</h1>
            <img src="${imageLink}" alt="${title}">
        `;

        blogPostsContainer.appendChild(postElement);
    }
});
