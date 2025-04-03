const button = document.getElementById('btn');
const btn = document.getElementById('btn2');


const months = ["January", "February", "March", "April", "May", "June", "July"];


button.addEventListener("click", () => {
    const idx = Math.floor(Math.random() * months.length);
    const query = `${months[idx]}`; 
    const url = `http://localhost:3000/modo2?teste=${encodeURIComponent(query)}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("month2").innerText = data.mes
        })
        .catch(error => {
            console.error("Erro ao fazer a requisição:", error);
        });
});


btn.addEventListener("click", () => {
    const url = `http://localhost:3000/modo1`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("month3").innerText = data.mes
        })
        .catch(error => {
            console.error("Erro ao fazer a requisição:", error);
        });
});










