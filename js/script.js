const modal = document.getElementById('myModal');
const btn = document.getElementById('details');
const span = document.getElementsByClassName('myModal__modal-close')[0];

const prew = document.querySelector('.prew');
const next = document.querySelector('.next');

// -- modal --
btn.onclick = function () {
    modal.style.display = 'block';
}

span.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// -- click carousel img --

document.body.onclick = function (event) {
    event = event || window.event;
        
    if (event.target.classList.contains('car-img')) {
        let allDiv = document.querySelectorAll('.carousel div');
        for (var i = 0; i < allDiv.length; i++) {
            allDiv[i].classList.remove('active');
        }
        
        let parentDiv = event.target.parentElement;
        parentDiv.classList.add('active');
    } 
};


