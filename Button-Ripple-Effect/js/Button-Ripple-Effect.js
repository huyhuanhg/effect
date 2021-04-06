let btnElement = document.querySelector('.btn');

btnElement.onclick = (e) => {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    
    let circle = document.createElement('span');
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    btnElement.appendChild(circle);
    setTimeout(()=>{
        circle.remove();
    },1000)
}