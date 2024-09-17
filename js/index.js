document.addEventListener("DOMContentLoaded", function () {
    saveData()
});

const saveData = () => {
    let button = document.querySelector('#buttonText');

    button.addEventListener('click', function () {
        let input = document.querySelector('#inputText').value;
        input != null ? localStorage.setItem("data", input) : null;
    }
)};
