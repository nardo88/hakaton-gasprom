const passwors = document.getElementById('passwors')
const login = document.getElementById('login')

document.addEventListener('submit', e => {
    e.preventDefault()

    const body = {
        login: login.value,
        password: passwors.value
    }

    fetch('http://e685001fd2d9.ngrok.io/api/v1/auth', {
        method: 'POST',
        body: JSON.stringify(body)

    })
    .then(response => {
        if(response.ok){
            return response.json()
        } else {
            alert('Неверный логин или пароль');
        }
    })

    .then(data => {
        localStorage.setItem('auth', JSON.stringify(data));
        location.pathname = 'dushboard.html'
    })
})