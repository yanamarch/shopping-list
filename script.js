const listItemsContainer = document.querySelector('#items');
const input = document.querySelector('#input');

input.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const value = input.value;
        if (value) {
            const newItem = document.createElement('div');
            newItem.textContent = value;
            newItem.addEventListener('click', () => {
                newItem.classList.toggle('done');
            });
            listItemsContainer.appendChild(newItem);
            input.value = '';
        }
    }
});