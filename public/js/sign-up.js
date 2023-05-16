console.log('im working');

// function that posts the NEW username and password to the User table in our DB
const signUpForm = document.getElementById('signUpForm');

const submitForm = async (event) => {
    event.preventDefault();

    const usernameValue = document.getElementById('usernameInput').value;
    console.log(usernameValue);
    const passwordValue = document.getElementById('passwordInput').value;
    console.log(passwordValue);

    const postValue = await fetch('/users/sign-up', {
        method: "POST",
        body: JSON.stringify({
            username: usernameValue,
            password: passwordValue
        })
    })

    if(postValue.ok) {
        alert('You successfully signed up!')
    } else {
        alert('Sign-up unsuccessful. Please try again.')
    }

}

signUpForm.addEventListener('submit', submitForm);
