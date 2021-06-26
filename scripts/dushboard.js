const dushboard = document.querySelector('.dushboard');
const controlItem = document.querySelectorAll('.control__item');
const dushboardContentItem = document.querySelectorAll('.dushboard-content__item');
const dropdown = document.querySelectorAll('.dropdown');


const addActive = (array, i , className) => {
    array.forEach((item, ind) => {
        item.classList.remove(className)
        if (ind === i){
            item.classList.add(className)

        }
    })
}

dushboard.addEventListener('click', e => {
    const target = e.target;


    if (target.closest('.control__item')){
        const elem = target.closest('.control__item')
        controlItem.forEach((item, i) => {
            item.classList.remove('control__item--active')

            if (item === elem){
            item.classList.add('control__item--active')
            addActive(dushboardContentItem, i, 'dushboard-content__item--active')
            }
        })
    }
})


addActive(dushboardContentItem, 0, 'dushboard-content__item--active')



dropdown.forEach(item => {
    item.addEventListener('click', e => {
        const target = e.target.closest('.dropdown__top')

        if (target){
            const body = target.nextElementSibling;
            if (body.children[0]){

                const h = body.children[0].clientHeight
                if (body.clientHeight === 0){
                    body.style.maxHeight = `${h}px`

                } else {
                    body.style.maxHeight = `${0}px`
                }
            }

        }
    })
})



// logout

document.querySelector('.logout').addEventListener('click', () => {
    localStorage.removeItem("auth")
    location.reload();
})