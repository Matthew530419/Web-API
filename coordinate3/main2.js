const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');



window.addEventListener('load', () => {

    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2 ;
    const targetHalfHeight = targetRect.height / 2;

    document.addEventListener('mousemove', (event) => {
        const X = event.clientX;
        const Y = event.clientY;
        console.log(`${event.clientX}, ${event.clientY}`);

        vertical.style.transform = `translateX(${X}px)`;
        horizontal.style.transform = `translateY(${Y}px)`;
        target.style.transform = `translate(${X-targetHalfWidth}px, ${Y-targetHalfHeight}px)`;
        tag.style.transform = `translate(${X}px, ${Y}px)`;
        tag.innerHTML = `${X}px, ${Y}px `;
    });
});
