function show() {
    document.querySelector('.nav-narrow').style.display = 'block';
    document.querySelector('.fa-xmark').style.display = 'block';
    document.querySelector('.fa-bars').style.display = 'none';


}

function hide() {
    document.querySelector('.nav-narrow').style.display = 'none';
    document.querySelector('.fa-xmark').style.display = 'none';
    document.querySelector('.fa-bars').style.display = 'block';

}

function update() {
    if (window.innerWidth > 1024) {
        document.querySelector('.nav-narrow').style.display = 'none';
        console.log(window.innerWidth);
    } else {
        document.querySelector('.fa-bars').style.display = 'block';
        document.querySelector('.fa-xmark').style.display = 'none';
    }
}

update();
window.addEventListener("resize", update);


