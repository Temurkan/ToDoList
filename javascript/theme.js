const link = document.querySelector('head link')
const darkMode = document.querySelector('.dark')
const lightMode = document.querySelector('.light')

if (localStorage.getItem('mode') == 'true') {
    link.setAttribute('href', 'style/style.css')
} else {
    link.setAttribute('href', 'style/dark.css')
}

darkMode.addEventListener('click', () => {

        link.setAttribute('href', 'style/dark.css')
        localStorage.setItem('mode', 'false')

})

lightMode.addEventListener('click', () => {

        link.setAttribute('href', 'style/style.css')
        localStorage.setItem('mode', 'true')

})