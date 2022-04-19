/*accordeon*/

let panelItem = document.querySelectorAll('.accord_str'),
    bodyItem = document.querySelectorAll('.panel-body');
panelItem.__proto__.forEach = [].__proto__.forEach;

let activePanel;
panelItem.forEach(function (item, i, panelItem) {
    item.addEventListener('click', function (e) {
        //show new thingy;
        this.classList.add('panel-active');
        this.nextElementSibling.classList.add('active');
        //hide old thingy
        if (activePanel) {
            activePanel.classList.remove('panel-active');
            activePanel.nextElementSibling.classList.remove('active');
        }
        //update thingy
        activePanel = (activePanel === this) ? 0 : this;
    });
});

/*slider*/

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

/*calculator*/

let form = document.forms.calculator;

form.money.oninput = calculate;
form.profit.onchange = calculate;
form.interest.oninput = calculate;

function calculate() {
    let initial = +form.money.value;
    if (!initial) return;


    let result = Math.round(initial * form.profit.value);

    document.getElementById('money-after').innerHTML = result;
}

calculate();