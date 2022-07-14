const menubtn = document.querySelector('.hamburguer')

function toggleMenu() {
    const menu = document.querySelector('.header-container--items')
    menu.classList.toggle('menu-active')

    if (menu.classList.contains('menu-active')) {
        menubtn.innerHTML = '<i class="fa-solid  fa-x x-menu"></i>'
    } else {
        menubtn.innerHTML = '<i class="fa-solid  fa-bars hamburguer-menu"></i>'
    }
}

menubtn.addEventListener('click', toggleMenu)
