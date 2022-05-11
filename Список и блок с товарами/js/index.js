
// табы

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

// аккордеон

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

const containerOne = document.querySelector('.service-title-1')
const containerTwo = document.querySelector('.service-title-favourites')

document.addEventListener('click', (event) => {
  if (event.target.closest('.service-title-1')) {
    if (event.target.classList.contains('block-star')) {
      if (event.target.parentElement.closest('.service-title-1')) {
        containerTwo.insertAdjacentElement('afterbegin', event.target)
      }
    }
  } else if (event.target.closest('.service-title-favourites')) {
    if (event.target.classList.contains('block-star')) {
      if (event.target.parentElement.closest('.service-title-favourites')) {
        containerOne.insertAdjacentElement('afterbegin', event.target)
      }
    }
  }
})


//Прелоадер

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}

// Смена иконки списка

// const icon = document.querySelector('.accordion-item')

// icon.addEventListener('click', (event) => {
//   const target = event.target
//   // console.log(event.target)
//   target.classList.toggle('item_active')
// })

function item() {
  let items = document.getElementsByClassName('block');
  for (let x = 0; x < items.length; x++) {
    let item = items[x];
    item.addEventListener('click', function (fn) {
      fn.target.classList.toggle('item_active');
    });
  }
}

item()

function icons() {
  let items = document.getElementsByClassName('icon');
  for (let x = 0; x < items.length; x++) {
    let item = items[x];
    item.addEventListener('click', function (fn) {
      fn.target.classList.toggle('item_active');
    });
  }
}

icons()


// Смена звезды

function initFavs() {
  let items = document.getElementsByClassName('block-star');
  for (let x = 0; x < items.length; x++) {
    let item = items[x];
    item.addEventListener('click', function (fn) {
      fn.target.classList.toggle('block-star-fav');
    });
  }
}

initFavs()











