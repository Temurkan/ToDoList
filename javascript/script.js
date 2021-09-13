const input = document.querySelector('input')
const addBtn = document.querySelector('.add')
const ul = document.querySelector('.list-group')
const edit = document.querySelector('.edit')
const doneBtn = document.querySelector('.done-btns')
const edits = document.querySelector('.edits')
const colors = document.querySelector('.colors')
const themes = document.querySelector('.themes')
const colorBtn = document.querySelector('.edits-text-color')
const themeBtn = document.querySelector('.edits-text-theme')
const buttons = document.querySelectorAll('.btn')
const colorsText = document.querySelectorAll('.colors-item .btn')
const themesText = document.querySelectorAll('.themes-text')
const colorChange = document.querySelector('.color-change')

let mask = document.querySelector('.lds-spinner')

window.addEventListener('load', () => {
    mask.classList.add('hide')
})

// Color change
buttons.forEach(btne => {
    btne.addEventListener('click', () => {
        const colored = btne.getAttribute('data-color')
        colorChange.innerHTML = colored
    })
})

addBtn.addEventListener('click', () => {
    const inpVal = input.value

    if (input.value != '') {
        const removeBtn = document.createElement('button')
        const doneCircle = document.createElement('div')
        const done = document.createElement('div')
        const p = document.createElement('p')

        doneCircle.classList.add('done-circle')
        removeBtn.classList.add('remove')
        removeBtn.classList.add('btnf')
        removeBtn.innerText = '-'

        // Done button
        doneCircle.addEventListener('click', () => {
            done.classList.toggle('done-btn')
            done.classList.add('active')
            p.classList.toggle('done')
            p.classList.toggle('decor')
        })     

        done.style.backgroundColor = colorChange.innerText
        doneCircle.style.borderColor = colorChange.innerText

        // Color change
        buttons.forEach(btne => {
            btne.addEventListener('click', () => {
                const colored = btne.getAttribute('data-color')
                done.style.backgroundColor = colored
                doneCircle.style.borderColor = colored
            })
        })


        const li = document.createElement('li')
        li.classList.add('list-group-item')
        p.innerText = inpVal
        li.append(doneCircle)
        doneCircle.append(done)
        li.append(p)
        li.append(removeBtn)
        ul.prepend(li)
        input.value = ''

        // Remove item
        document.querySelectorAll('.remove').forEach(btn => {
            btn.addEventListener('click', () => btn.parentElement.remove())
        })

    }
})



edit.addEventListener('click', () => {
    edits.classList.add('active')
    doneBtn.classList.remove('none')
    edit.classList.add('none')
    themeBtn.classList.remove('active')

    doneBtn.addEventListener('click', () => {
        edits.classList.remove('active')
        edit.classList.remove('none')
        doneBtn.classList.add('none')

        if (colors.classList.contains('active')) {
            colors.classList.remove('active')
        }

        if (themes.classList.contains('active')) {
            themes.classList.remove('active')
        }
    })

})

colorBtn.addEventListener('click', () => {
    colors.classList.toggle('active')
    themeBtn.classList.toggle('active')
    themes.classList.remove('active')
})

themeBtn.addEventListener('click', () => {
    themes.classList.toggle('active')
    colors.classList.remove('active')
})

colorsText.forEach(col => {
    col.addEventListener('click', () => {
        edits.classList.remove('active')
        colors.classList.remove('active')
        themes.classList.remove('active')
        doneBtn.classList.add('none')
        edit.classList.remove('none')
    })
})

themesText.forEach(col => {
    col.addEventListener('click', () => {
        edits.classList.remove('active')
        colors.classList.remove('active')
        themes.classList.remove('active')
        doneBtn.classList.add('none')
        edit.classList.remove('none')
    })
})
