const postBlogBtn = document.getElementById('postBlogBtn');

const redirectPage = async (event) => {
    event.preventDefault();

    document.location.href = "/make-post";
}

postBlogBtn.addEventListener('click', redirectPage);