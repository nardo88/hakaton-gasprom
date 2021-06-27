const dushboard = document.querySelector('.dushboard');
const controlItem = document.querySelectorAll('.control__item');
const dushboardContentItem = document.querySelectorAll('.dushboard-content__item');


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
        e.preventDefault()
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






// logout

document.querySelector('.logout').addEventListener('click', () => {
    localStorage.removeItem("auth")
    location.reload();
})