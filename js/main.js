const mobileMenuToggleBtn = document.querySelector('#mobile_menu_toggle_btn i')
const mainNav = document.querySelector('#main_nav')


mobileMenuToggleBtn.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu()
{
    mainNav.classList.toggle('active')

    updateMobileMenuIcon()
}

function updateMobileMenuIcon()
{
    mobileMenuToggleBtn.classList.contains('fa-bars')
        ? (mobileMenuToggleBtn.classList.remove('fa-bars'), mobileMenuToggleBtn.classList.add('fa-times'))
        : (mobileMenuToggleBtn.classList.add('fa-bars'), mobileMenuToggleBtn.classList.remove('fa-times'));


}