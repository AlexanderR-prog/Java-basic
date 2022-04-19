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

/*tabs*/

let jsTriggers = document.querySelectorAll('.js-tab-trigger');

jsTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
        var id = this.getAttribute('data-tab'),
            content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'),
            activeTrigger = document.querySelector('.js-tab-trigger.active'),
            activeContent = document.querySelector('.js-tab-content.active');

        activeTrigger.classList.remove('active');
        trigger.classList.add('active');

        activeContent.classList.remove('active');
        content.classList.add('active');
    });
});