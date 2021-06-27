const dushboard = document.querySelector('.dushboard');
const equipmentDocumentsList = document.querySelector('.equipment-documents__list');
const equipment = document.querySelector('.equipment');
const controlItem = document.querySelectorAll('.control__item');
const dushboardContentItem = document.querySelectorAll('.dushboard-content__item');
const documents = document.getElementById('documents')
const archive = document.getElementById('archive')
const addDocument = document.getElementById('add-document')

let documentsList = [{
        id: 1,
        name: 'Акт выполненных работ',
        date: '18.06.2021',
        status: 'close',
        number: '23-СН098',
        archive: false
    },
    {
        id: 2,
        name: 'Акт приема-передачи',
        date: '22.06.2021',
        status: 'in-work',
        number: '23-СН098',
        archive: false
    },
    {
        id: 3,
        name: 'Договор на оказание услуг',
        date: '18.06.2021',
        status: 'sent',
        number: '23-СН098',
        archive: false
    },
    {
        id: 4,
        name: 'Акт выполненных работ',
        date: '18.06.2021',
        status: 'close',
        number: '23-СН098',
        archive: false
    },
    {
        id: 5,
        name: 'Акт приема-передачи',
        date: '22.06.2021',
        status: 'in-work',
        number: '23-СН098',
        archive: false
    },
    {
        id: 6,
        name: 'Договор на оказание услуг',
        date: '18.06.2021',
        status: 'sent',
        number: '23-СН098',
        archive: false
    },
    {
        id: 7,
        name: 'Акт выполненных работ',
        date: '18.06.2021',
        status: 'close',
        number: '23-СН098',
        archive: false
    },
    {
        id: 8,
        name: 'Акт приема-передачи',
        date: '22.06.2021',
        status: 'in-work',
        number: '23-СН098',
        archive: false
    },
    {
        id: 9,
        name: 'Договор на оказание услуг',
        date: '18.06.2021',
        status: 'sent',
        number: '23-СН098',
        archive: false
    },
    {
        id: 10,
        name: 'Акт выполненных работ',
        date: '18.06.2021',
        status: 'close',
        number: '23-СН098',
        archive: true
    },
    {
        id: 11,
        name: 'Акт приема-передачи',
        date: '22.06.2021',
        status: 'in-work',
        number: '23-СН098',
        archive: true
    },
    {
        id: 12,
        name: 'Договор на оказание услуг',
        date: '18.06.2021',
        status: 'sent',
        number: '23-СН098',
        archive: true
    },
    {
        id: 13,
        name: 'Акт выполненных работ',
        date: '18.06.2021',
        status: 'close',
        number: '23-СН098',
        archive: true
    },
    {
        id: 14,
        name: 'Акт приема-передачи',
        date: '22.06.2021',
        status: 'in-work',
        number: '23-СН098',
        archive: true
    },
    {
        id: 15,
        name: 'Договор на оказание услуг',
        date: '18.06.2021',
        status: 'sent',
        number: '23-СН098',
        archive: true
    },
    {
        id: 16,
        name: 'Акт выполненных работ',
        date: '18.06.2021',
        status: 'close',
        number: '23-СН098',
        archive: true
    },
    {
        id: 17,
        name: 'Акт приема-передачи',
        date: '22.06.2021',
        status: 'in-work',
        number: '23-СН098',
        archive: true
    },
    {
        id: 18,
        name: 'Договор на оказание услуг',
        date: '18.06.2021',
        status: 'sent',
        number: '23-СН098',
        archive: true
    },

]

const addActive = (array, i, className) => {
    array.forEach((item, ind) => {
        item.classList.remove(className)
        if (ind === i) {
            item.classList.add(className)

        }
    })
}


const renderDocuments = (data) => {
    documents.innerHTML = '';

    const newArr = data.filter(elem => elem.archive !== true)

    if (!newArr.length) {
        documents.innerHTML = 'Документов нет';
        return
    }
    newArr.forEach(item => {

        const li = document.createElement('li');
        li.classList = 'documents__item document';

        li.innerHTML = `
            <div class="document__column">
                <span class="document__name">${item.name}</span>
                <div class="document__bottom">
                    <span class="document__number">№ ${item.number}</span>
                    <button data-id="${item.id}" class="document__btn document__btn-to-archive">В архив</button>
                </div>
            </div>
            <div class="document__column">
                <span class="document__status ${item.status}">${item.status === 'close' ? 'Закрыть' : item.status === 'sent' ? 'Отправлен' : 'В работе'}</span>
                <span class="document__date">дата загрузки: ${item.date}</span>
            </div>
        `;

        documents.insertAdjacentElement('beforeend', li)

    })
}

const renderArchive = data => {
    archive.innerHTML = '';

    const newArr = data.filter(elem => elem.archive === true)

    if (!newArr.length) {
        archive.innerHTML = 'Документов нет';
        return
    }

    newArr.forEach(item => {

        const li = document.createElement('li');
        li.classList = 'documents__item document';

        li.innerHTML = `
            <div class="document__column">
                <span class="document__name">${item.name}</span>
                <div class="document__bottom">
                    <span class="document__number">№ ${item.number}</span>
                </div>
            </div>
            <div class="document__column">
                <button data-id="${item.id}" class="document__btn document__btn--mb">Извлечь из аврхива</button>
                <span class="document__date">дата загрузки: ${item.date}</span>
            </div>
        `;

        archive.insertAdjacentElement('beforeend', li)

    })
}

renderDocuments(documentsList)
renderArchive(documentsList)





// переключение табов
dushboard.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.control__item')) {
        e.preventDefault()
        equipment.classList.remove('equipment--open')

        const elem = target.closest('.control__item')
        controlItem.forEach((item, i) => {
            item.classList.remove('control__item--active')

            if (item === elem) {
                item.classList.add('control__item--active')
                addActive(dushboardContentItem, i, 'dushboard-content__item--active')
            }
        })
    }


    if (target.classList.contains('document__btn-to-archive')) {
        const i = +target.dataset.id
        documentsList = documentsList.map(item => {
            if (item.id === i) {
                item.archive = true
            }
            return item
        })
        renderDocuments(documentsList)
        renderArchive(documentsList)

    }

    if (target.classList.contains('document__btn--mb')) {
        const i = +target.dataset.id
        
        documentsList = documentsList.map(item => {
            if (item.id === i) {
                item.archive = false
            }
            return item
        })
        renderDocuments(documentsList)
        renderArchive(documentsList)

    }

    if (target.closest('.equipment-item')){
        equipment.classList.add('equipment--open')
    }
})


addActive(dushboardContentItem, 0, 'dushboard-content__item--active')

// logout
document.querySelector('.logout').addEventListener('click', () => {
    localStorage.removeItem("auth")
    location.reload();
})


// добавление документа

addDocument.addEventListener('change', e => {
    const li = document.createElement('li')
    li.classList = 'equipment-documents__item';
    li.innerHTML = `
        <div class="equipment-documents__data">
            <span class="equipment-documents__name">${e.target.files[0].name.split('.')[0]}</span>
            <span class="equipment-documents__number">№ 23-СН098</span>
        </div>
        <div class="equipment-documents__status">
            <select name="" id="" class="equipment-documents__select">
                <option selected value="confirmed">Подтвержден</option>
                <option value="not confirmed">Не подтвержден</option>
                <option value="consideration">На рассмотрении</option>
            </select>
        </div>
    `

    console.dir(e.target.files[0].name);


    equipmentDocumentsList.insertAdjacentElement('afterbegin', li)
})
