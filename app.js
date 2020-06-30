const newslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');

        //animate links
        navlinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';

            }
            else {
                link.style.animation = 'nav 0.5s ease forwrds ${index / 7 +1.5s}s'
            }

        });
        //burger animation
        
        burger.classList.toggle('toggle');

    });
}
newslide();