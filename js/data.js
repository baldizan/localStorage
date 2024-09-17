document.addEventListener("DOMContentLoaded", function () {
    showData()
});

const showData = () => {
    let span = document.querySelector('#data');
    let data = localStorage.getItem("data")
    data ? span.innerHTML = `<p>${data}</p>` : null;
}
