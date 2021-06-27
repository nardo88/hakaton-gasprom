const passwors = document.getElementById('passwors')
const login = document.getElementById('login')


document.addEventListener('submit', e => {
    e.preventDefault()


    fetch('../auth.json')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })

        .then(data => {
            if (data) {

                if (login.value === data.login && passwors.value === data.passwors) {
                    passwors.value = ''
                    login.value = ''
                    localStorage.setItem('auth', JSON.stringify(data));
                    location.pathname = 'dushboard.html'
                } else {
                    alert('Не верный логин или пароль')
                }


            }
        })
})