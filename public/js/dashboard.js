
const newPostForm = document.getElementById('newPostForm');

const postBlog = async (event) => {
    event.preventDefault();

    const titleValue = document.getElementById('titleInput').value;
    console.log(titleValue);
    const contentValue = document.getElementById('contentInput').value;
    console.log(contentValue);
}

newPostForm.addEventListener('submit', postBlog);