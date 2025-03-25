const cart = document.getElementById("cart")
let addCart = document.getElementById("addCart")

const menu = document.getElementById('menu')
const cancel = document.getElementById('cancel')
const infom = document.getElementById('info-m')


let imagesElement = document.getElementById('img')


let images = ['img/f1.jpg', 'img/f4.jpg', 'img/f10.avif']
let image = 0

function changeImage() {
    image = (image + 1) % images.length
    imagesElement.src = images[image]
}
setInterval(changeImage, 5000)

infom.style.display = "none"

menu.addEventListener('click', () => {
    menu.style.display = 'none'
    infom.style.display = 'block'
    cancel.style.display = 'block'
})
cancel.addEventListener('click', () => {
    menu.style.display = 'block'
    infom.style.display = 'none'
    cancel.style.display = 'none'
})

