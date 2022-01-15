const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
    // 1. RX named input.value when user type the value on input tab and click footer button.
    const text = input.value;
    console.log(text);
    // 2. Creat new item with text and delete with trash icon button.
     const itemRow = createItem(text); 
    // 3. Add created new item within class named 'items'.
     items.appendChild(itemRow); 
    // 4. Initialize input
    input.value  = '';
    input.focus();
}

function createItem (text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const itemName = document.createElement('span');
    itemName.setAttribute('class', 'item__name');
    itemName.innerHTML = text; //innerText와 비교

    const itemBtn = document.createElement('button');
    itemBtn.setAttribute('class', 'item__button');
    itemBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`
    itemBtn.addEventListener('click', ()=> {
        items.removeChild(itemRow);
    });

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider); // items로 하면 왜 안뜸?

    item.appendChild(itemName);
    item.appendChild(itemBtn);
    return itemRow;
}

addBtn.addEventListener('click', () => {
    onAdd();
})
