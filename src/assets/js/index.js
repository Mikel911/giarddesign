const menuButton = document.querySelector('.header__hamb')
const navbar = document.querySelector('.navbar')
const body = document.querySelector('body')
const btnGallery = document.querySelector('.fourth__link')
const gallery = document.querySelector('.fourth__gallery')


function hambMenu () {
    document.querySelector('.navbar').classList.toggle('active');
    if (navbar.classList.contains('active')) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
}

document.addEventListener('click', function (e){
    if(e.target.classList.contains('gallery-img')){
        const src = e.target.getAttribute('src')
        document.querySelector('.modal-img').src = src
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
        myModal.show()
    }
})

window.onload = () => {
    const grid = document.querySelector('.grid')
    const masonry = new Masonry(grid, {
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        itemSelector: '.grid-item',
        originBottom: false,
        percentPosition: true

    });
}

menuButton.addEventListener('click', hambMenu)

btnGallery.addEventListener('click', () => {
    gallery.classList.toggle('active')
})



