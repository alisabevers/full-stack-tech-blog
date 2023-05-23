const loginForm = document.getElementById('loginForm');

const submitForm = async (event) => {
    event.preventDefault();

    const username = document.getElementById('usernameInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();

    const postValue = await fetch('/api/users/login', {
        method: "POST",
        body: JSON.stringify({
            username, password
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if(postValue.ok) {
        window.location.href = "/dashboard"
    } else {
        alert('Sign-up unsuccessful. Please try again.')
    }

}

loginForm.addEventListener('submit', submitForm);