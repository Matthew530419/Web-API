const items = document.querySelector('.items');
const form = document.querySelector('.footer__form');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
    // 1. RX named input.value when user type the value on input tab and click footer button.
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }
    console.log(text);
    // 2. Creat new item with text and delete with trash icon button.
     const itemRow = createItem(text); 
    // 3. Add created new item within class named 'items'.
     items.appendChild(itemRow); 
    // 4. Add scrolling putting newly added item on center.
    itemRow.scrollIntoView({block : 'center'});
    // 5. Initialize input
    input.value  = '';
    input.focus();
}
let id =0;
function createItem (text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__button" >
                <i class="fas fa-trash-alt" data-id=${id}></i>
            </button>
        </div>
        <div class="item__divider"></div>`;
        id++;
    return itemRow; 
}
    form.addEventListener('submit', event => {
        event.preventDefault();
        onAdd();
    })

    items.addEventListener('click', event => {
        const id = event.target.dataset.id;
        if(id) {
            const toBedelete = items.querySelector(`.item__row[data-id ="${id}"]`);
            toBedelete.remove();
        }
    })