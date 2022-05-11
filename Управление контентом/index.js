// Изменяем размер шрифта

$(document).ready(function () {

    //Минимальный размер шрифта

    let min = 12;

    //Максимальный размер шрифта

    let max = 25;

    //Сохраняем заданное в таблице стилей значение размера шрифта

    let reset = $('p').css('fontSize');

    //Изменение размера будет проводиться для указанных элементов

    let element = $('p.intro');




    //Устанавливаем в переменной значение шрифта по умолчанию (удаляем px)

    let size = str_replace(reset, 'px', '');

    let size_reset = size;

    //Функция увеличения размера шрифта

    $('button.fontSizePlus').click(function () {



        //Если размер шрифта меньше или равен максимальному значению

        if (size <= max) {

            //Увеличиваем размер шрифта

            size++;

            //Устанавливаем размер шрифта

            element.css({
                'fontSize': size
            });

        }

        //Прерываем передачу события далее по дереву DOM

        return false;

    });



    //Функция уменьшения размера шрифта

    $('button.fontSizeMinus').click(function () {



        //Если размер шрифта больше или равен минимальному значению

        if (size >= min) {

            //Уменьшаем размер

            size--;


            //Устанавливаем размер шрифта

            element.css({
                'fontSize': size
            });

        }

        //Прерываем дальнейшую передачу события по дереву DOM

        return false;

    });

});

//Функция замена строки

function str_replace(haystack, needle, replacement) {

    let temp = haystack.split(needle);

    return temp.join(replacement);

}

// Изменение ширины страницы

$(document).ready(function () {
    $('.set-width-btn').click(function () {
        let newPageWidth = $('.input-page-width').val();
        $('.page-container').width(newPageWidth);
    })
})

// Изменение ширины блоков

$(document).ready(function () {
    $(".set-width-btn").click(function () {
        let newWidth = $(".input-width").val();
        $(".block").width(newWidth);
    });
});


// Изменение высоты блоков

$(document).ready(function () {
    $('.set-width-btn').click(function () {
        let newHeight = $('.input-height').val();
        $('.block').height(newHeight);
    });
});

// Изменение цвета текста заголовка

document.querySelector('.color').onclick = changeColor;

let currentColor = "red";
function changeColor() {
    if (currentColor == "red") {
        document.getElementById('main').style.color = "green";
        currentColor = "green";
    }
    else if (currentColor == 'green') {
        document.getElementById('main').style.color = 'blue'
        currentColor = 'blue';
    }
    else if (currentColor == 'blue') {
        document.getElementById('main').style.color = 'orange'
        currentColor = 'orange';
    }
    else {
        document.getElementById('main').style.color = "red";
        currentColor = "red";
    }
}

// Изменение цвета текста в блоках

document.querySelector('.text-color').onclick = changePageColor;

let currentPageColor = 'black';
function changePageColor() {
    if (currentPageColor == 'black') {
        document.getElementById('all').style.color = 'darkgreen';
        currentPageColor = 'darkgreen'
    }
    else if (currentPageColor == 'darkgreen') {
        document.getElementById('all').style.color = 'gold';
        currentPageColor = 'gold';
    }
    else if (currentPageColor == 'gold') {
        document.getElementById('all').style.color = 'red'
        currentPageColor = 'red';
    }
    else {
        document.getElementById('all').style.color = 'black';
        currentPageColor = 'black';
    }
}


// Изменение background-color 1 блока

document.querySelector('.back-color').onclick = changeBackgroundColor;

let currentBackgroundColor = 'lightblue';
function changeBackgroundColor() {
    if (currentBackgroundColor == 'lightblue') {
        document.getElementById('block-element').style.backgroundColor = 'lightgreen';
        currentBackgroundColor = 'lightgreen';
    }
    else if (currentBackgroundColor == 'lightgreen') {
        document.getElementById('block-element').style.backgroundColor = 'yellow';
        currentBackgroundColor = 'yellow';
    }
    else {
        document.getElementById('block-element').style.backgroundColor = 'lightblue';
        currentBackgroundColor = 'lightblue';
    }
}



function togFunc(id) {

    //находим блок div по его id, который передали в функцию 

    elem = document.getElementById(id);

    //смотрим, включен ли сейчас элемент

    state = elem.style.display;

    //если включен, то выключаем

    if (state == '') elem.style.display = 'none';

    //иначе - включаем

    else elem.style.display = '';
}


// Задаем элемент, текст в котором будем менять

const btn = document.querySelector('.btn > span');

// Определяем событие click и создаем функцию

btn.addEventListener('click', function () {

    // Из дерева DOM элементов выбираем элемент с классом btn и 
    // записываем условный оператор для смены текста при нажатии 
    // на кнопку

    btn.innerHTML =
        (btn.innerHTML === 'С картинкой') ?
            btn.innerHTML = 'Без картинки' :
            btn.innerHTML = 'С картинкой';
})




