
/*tabs*/

let jsTriggers = document.querySelectorAll('.js-tab-trigger');

jsTriggers.forEach(function (trigger) {
  trigger.addEventListener('click', function () {
    let id = this.getAttribute('data-tab'),
      content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'),
      activeTrigger = document.querySelector('.js-tab-trigger.active'),
      activeContent = document.querySelector('.js-tab-content.active');

    activeTrigger.classList.remove('active');
    trigger.classList.add('active');

    activeContent.classList.remove('active');
    content.classList.add('active');
  });
});

/*accordeon*/

let accordion = (function (element) {

  let _getActiveItems = function (elements) {
    let items = [];
    elements.forEach(function (item) {
      if (item.classList.contains('show')) {
        items.push(item);
      }
    });
    return items;
  };

  return function () {
    let _mainElement = {},
      _items = {},
      _contents = {};


    let _actionClick = function (e) {
      if (!e.target.classList.contains('accordion-item-header')) {
        return;
      }
      e.preventDefault();
      let header = e.target,
        item = header.parentElement,
        activeItems = _getActiveItems(_items);

      if (!activeItems.length) {
        item.classList.add('show');
      } else {
        activeItems.forEach(function (activeItem) {
          if (!activeItem.contains(item)) {
            activeItem.classList.remove('show');
          }
        });
        item.classList.toggle('show');
      }
    },
      _setupListeners = function () {
        _mainElement.addEventListener('click', _actionClick);
      };

    return {
      init: function (element) {
        _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
        _items = _mainElement.querySelectorAll('.accordion-item');
        _setupListeners();
      }
    }

  }
})();


let accordion1 = accordion();
accordion1.init('#accordion');

//Перемещение элементов при клике

const containerOne = document.querySelector('.service-title')
const containerTwo = document.querySelector('.service-title2')

document.addEventListener('click', (e) => {
  if (e.target.closest('.service-title')) {
    if (e.target.classList.contains('btnBlock')) {
      if (e.target.parentElement.closest('.service-title')) {
        containerTwo.insertAdjacentElement('afterbegin', e.target)
      }
    }
  } else if (e.target.closest('.service-title2')) {
    if (e.target.classList.contains('btnBlock')) {
      if (e.target.parentElement.closest('.service-title2')) {
        containerOne.insertAdjacentElement('afterbegin', e.target)
      }
    }
  }
})

//Сохранение при перезагрузке страницы

let array = [
  { "btnBlock": "button" }
];

localStorage.setItem("myKey", JSON.stringify(array));

//Прелоадер

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}


