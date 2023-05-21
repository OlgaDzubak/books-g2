// Змінна що передає кількість книг з шоп листа в хедер
let countLength = document.querySelector('.count-shopping-list');

export function countShoppingBook(arr) {
    if (!arr.length) {
        return countLength.style.display = "none";
    } else {
        countLength.style.display = "block"
        return countLength.firstElementChild.textContent = arr.length;
    }
}
