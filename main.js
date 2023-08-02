let ingreso = prompt("bien venido al mercado de vinos, deseacomprar ? escriba si para continuar");
let costoTinto = 100;
let costoBlanco = 50;



function comprar() {
    let seleccion = prompt("escriba tinto o blanco para continuar");
    if (seleccion === "tinto") {
        let tinto = prompt("cuantas botellas de vino tinto desea ?");
        let costo = tinto * costoTinto;
        alert(`usted encargo ${tinto} de vino tinto por un costo de $ ${costo} pesos`)
    } else if (seleccion === "blanco"){
        let blanco = prompt("cuantas botellas de vino blanco desea ?");
        let costo2 = blanco * costoBlanco;
        alert(`usted encargo ${blanco} de vino blanco por un costo de $ ${costo2} pesos`);
}};

if (ingreso === "si") {

    comprar();


} else {
    prompt("regrese cuando desee comprar");
};