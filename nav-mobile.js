const menuButton = document.querySelector('[data-menu-button]')
const searchButton = document.querySelector('[data-search-button]')
const menuList = document.querySelector('[data-menu-list]')
const navMobile = document.querySelector('[data-nav-mobile]')
const profileHeader = document.querySelector('[data-profile]')
const logoHeader = document.querySelector('[data-logo]')
const input = document.querySelector('[data-header-input]')

menuButton.addEventListener('click',() => {
    navMobile.innerHTML = "";
    menuButton.classList.toggle ('header-close-button');
    navMobile.classList.toggle('active');
    navMobile.innerHTML += menuList.outerHTML;
    navMobile.innerHTML += profileHeader.outerHTML; 

});

searchButton.addEventListener('click' ,() => {
    logoHeader.classList.toggle('hidden');
    input.classList.toggle('active');
    searchButton.classList.toggle('header-close-button');
    menuButton.classList.toggle('hidden');
})