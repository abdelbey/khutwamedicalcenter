let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');
menu.onclick = () => {
    // here once the menu button clicked, we add a class to menu-btn "fa-times", therefore the menu icon changes from menu to fa-times button 
    menu.classList.toggle('fa-times')
    // here once the menu button clicked, we add a class to .header . nav "active" so .header .nav .active in css exsists, therefore the the navbar is showing now
    navbar.classList.toggle('active')
}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    if (window.scrollY > 0) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }

}