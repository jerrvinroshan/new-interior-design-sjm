// For navbar active
document.querySelectorAll(".navbar--list__link").forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// Navbar
const toggleBtn = document.querySelector('.toggle_btn_icon')
const toggleBtnIcon = document.querySelector('.toggle_btn_icon i')
const toggleMenu = document.querySelector('.toggle_menu')

toggleBtn.onclick = function () {
    toggleMenu.classList.toggle('open')
    const isOpen = toggleMenu.classList.contains('open')

    if (isOpen) {
        toggleBtnIcon.classList = 'fa-solid fa-xmark';
    } else {
        toggleBtnIcon.classList = 'fa-solid fa-bars';
    }
}






const menuLinks = document.querySelectorAll('.portfolio--menulinks');
    const images = document.querySelectorAll('.grid--container .item');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            const filter = this.dataset.filter;

            menuLinks.forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');

            images.forEach(image => {
                if (filter === 'all' || image.classList.contains(filter)) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        });
    });