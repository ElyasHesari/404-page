const container = document.querySelector('.container')
window.onmousemove = (e)=>{
    let x = e.clientX / 7.6;
    let y = e.clientY / 7.6;
    container.style.backgroundPositionX = x + 'px'
    container.style.backgroundPositionY = y + 'px'
}