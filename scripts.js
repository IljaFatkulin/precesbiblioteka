const POP_UP = document.getElementById('popUp');
let Preces = [];

window.addEventListener('load', () => {
    Preces = JSON.parse(localStorage.getItem("Preces") || "[]");
    console.log(Preces)
    render();
});

document.getElementById('jaunaprece').addEventListener('click', () => {

    let prece = {nosaukums: nosaukums.value, cena: cena.value};

    nosaukums.value = "";
    cena.value = "";

    Preces.push(prece);

    render();
})

function render() {
    let biblioteka = document.getElementById('biblioteka');
    biblioteka.innerHTML = "";

    for(let i = 0; i < Preces.length; i++) {
        let prece = `
        <div class="prece">
            <h3>Nosaukums: ${Preces[i].nosaukums}</h3>
            <h4>Cena: ${Preces[i].cena}</h4>
        </div>`;

        biblioteka.innerHTML += prece;
    }

    localStorage.setItem("Preces", JSON.stringify(Preces))
}
