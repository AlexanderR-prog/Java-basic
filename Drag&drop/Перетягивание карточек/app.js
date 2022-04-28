const dragAndDrop = () => {
    const card = document.querySelector('.js-card');
    const cells = document.querySelectorAll('.js-cel');

    const dragStart = function () {
        setTimeout(() => {
            this.classList.add('hide')
        }, 0)

    };
    const dragEnd = function () {
        this.classList.remove('hide');
    };

    const dragOver = function (event) {
        event.preventDefault();

    };
    const dragEnter = function (event) {
        event.preventDefault()
        this.classList.add('hovered');

    };
    const dragLeave = function () {
        this.classList.remove('hovered')

    };
    const dragDrop= function () {
        this.append(card);
        this.classList.remove('hovered')

    };

    cells.forEach((cel) => {
        cel.addEventListener('dragover', dragOver);
        cel.addEventListener('dragenter', dragEnter);
        cel.addEventListener('dragleave', dragLeave);
        cel.addEventListener('drop', dragDrop);
    })


    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);

};
dragAndDrop()

