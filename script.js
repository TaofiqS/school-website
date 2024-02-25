let section=document.querySelectorAll('section')
let navLink=document.querySelectorAll('header nav a')
window.addEventListener=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>offset && top<offset + height){
            navLink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
}
var scrollEventHandler = function()
{
    window.scroll(0, window.pageYOffset)
}
window.addEventListener("scroll", scrollEventHandler, false);
const getScrolBarWidth = () => {
    return window.innerWidth - document.body.clientWidth;
}
const updateScrollBarCSSProp = () => {
document.body.style.setProperty('--scrollbar-width', `${getScrolBarWidth()}px`)
}
window.addEventListener('DOMContentLoaded', updateScrollBarCSSProp);