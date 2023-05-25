
const newPostForm = document.getElementById('newPostForm');

const postBlog = async (event) => {
    event.preventDefault();

    const title = document.getElementById('titleInput').value;
    console.log(title);
    const content = document.getElementById('contentInput').value;
    console.log(content);

    const postBlogValue = await fetch('/api/posts/', {
        method: "POST",
        body: JSON.stringify({
            title, content
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if(postBlogValue.ok) {
        alert('Blog post was successful!')
        window.location.href = "/dashboard"
    } else {
        alert('Blog post was unsuccessful. Please try again.')
    }
}

newPostForm.addEventListener('submit', postBlog);