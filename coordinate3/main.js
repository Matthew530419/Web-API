const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (event) => {
    const X = event.clientX;
    const Y = event.clientY;
    console.log(`${event.clientX}, ${event.clientY}`);

    vertical.style.left =  `${X}px`;
    horizontal.style.top = `${Y}px`;
    target.style.left = `${X}px`;
    target.style.top = `${Y}px`;
    tag.style.left = `${X}px`;
    tag.style.top = `${Y}px`;
    tag.innerHTML = `${X}px, ${Y}px `;
});