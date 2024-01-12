const enlaceFacebook = document.querySelector(".enlaceFacebook");
const enlaceInstagram = document.querySelector(".enlaceInstagram");

function redireccion(redireccion) {
    window.location.href = redireccion
}
enlaceFacebook.addEventListener('click', (e)=>{
    e.preventDefault
    redireccion('https://www.facebook.com/Maderkios')
})
enlaceInstagram.addEventListener('click', (e)=>{
    e.preventDefault
    redireccion('https://www.instagram.com/maderkios/')
})