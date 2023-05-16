// function that posts the NEW username and password to the User table in our DB
const signUpForm = document.getElementById('signUpForm');

const submitForm = async (event) => {
    event.preventDefault();

    const username = document.getElementById('usernameInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();

    const postValue = await fetch('/api/users/sign-up', {
        method: "POST",
        body: JSON.stringify({
            username, password
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if(postValue.ok) {
        window.location.href = "/"
    } else {
        alert('Sign-up unsuccessful. Please try again.')
    }

}

signUpForm.addEventListener('submit', submitForm);
