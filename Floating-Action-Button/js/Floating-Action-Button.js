var fabToggle = document.querySelector('.fab-toggle');
var fabItemVerital = document.querySelectorAll('.fab-item[data-direct="vertical"]');
var fabItemHorizontal = document.querySelectorAll('.fab-item[data-direct="horizontal"]');
var fabItemTopLeft = document.querySelectorAll('.fab-item[data-direct="top-left"]');

showItem = () => {
    fabItemVerital.forEach((e, index) => {
        e.style.bottom = `calc(${(index + 1) * 100}% + 20px)`;

    });
    fabItemHorizontal.forEach((e, index) => {
        e.style.right = `calc(${(index + 1) * 100}% + 20px)`;
    });
    fabItemTopLeft.forEach((e, index) => {
        e.style.bottom = `calc(${(index + 1) * 100 - index*20}%)`;
        e.style.right = `calc(${(index + 1) * 100 - index*20}%)`;
    })
}

hideItem = () => {
    fabItemVerital.forEach(e => {
        e.style.bottom = '10px';

    });
    fabItemHorizontal.forEach((e, index) => {
        e.style.right = `10px`;
    })
    fabItemTopLeft.forEach((e, index) => {
        e.style.bottom = `10px`;
        e.style.right = `10px`;
    })
}

fabToggle.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    if (e.target.classList.contains('active')){
        showItem();
    } else {
        hideItem();
    }
})