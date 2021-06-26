const form = document.querySelector('.auth')

form.addEventListener('submit', e => {
    e.preventDefault()

    const body = {
        login: 'test',
        password: 'test'
    }

    fetch('http://e685001fd2d9.ngrok.io/api/v1/auth', {
        method: 'POST',
        body: JSON.stringify(body)

    })
    .then(response => response.json())
    .then(data => console.log(data))
})