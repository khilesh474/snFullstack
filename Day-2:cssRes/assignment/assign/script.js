const register = e => {
    let uname = document.getElementById('uname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value,
        city = document.getElementById('city').value,
        mn = document.getElementById('mn').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.uname.toLowerCase() == uname.toLowerCase()
        );

    if(!exist){
        formData.push({ uname,email, pwd, city, mn });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('uname').focus();
        alert("Account Created");
    }
    else{
        alert("User Already exists");
    }
    e.preventDefault();
}

function login(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        alert("login succesfull");
    }
    e.preventDefault();
}