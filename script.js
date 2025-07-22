
document.addEventListener('DOMContentLoaded', function() {
  const blogList = document.getElementById('blog-list');
  fetch('posts.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(posts => {
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        const title = document.createElement('h2');
        title.textContent = post.title;
        const date = document.createElement('p');
        date.classList.add('post-date');
        date.textContent = post.date || 'Unknown date';
        
        const content = document.createElement('p');
        content.classList.add('post-content');
        content.textContent = post.content; 
        postElement.appendChild(title);
        postElement.appendChild(date);
        postElement.appendChild(content);
        blogList.appendChild(postElement);
      });
    })
    .catch(error => console.error('Error loading blog posts:', error));
});
