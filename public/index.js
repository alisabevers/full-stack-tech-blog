console.log('im working');

const signUpForm = document.querySelector('.loginSignUpForm');

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