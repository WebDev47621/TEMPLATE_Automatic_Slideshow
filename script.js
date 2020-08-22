let index = 0;
show();
function show() {
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByTagName('span');
    for (let i=0; i < slides.length; i++) {
        slides[i].style.display = ' none';
    }

    index++;
    if (index > slides.length) {
        index = 1;
    }
    for (let i=0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '')
    }
    slides[index - 1].style.display = 'block';
    dots[index - 1].className += 'active';
    setTimeout(show, 1500);
}