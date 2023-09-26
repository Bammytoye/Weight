const kgRef = document.getElementById("kg");
const lbRef = document.getElementById("lb");
const ozRef = document.getElementById("oz");

const convertFromKg = () => {
    let kg = kgRef.value;
    //to fixed decimals to 2 digit
    lbRef.value = (kg * 2.205).toFixed(2);
    ozRef.value = (kg * 35.274).toFixed(2);
}
    
let convertFromlb = () => {
    let lb = lbRef.value;
    lbRef.value = ""
    //to fixed decimals to 2 digit
    kgRef.value = (lb * 2.205).toFixed(2);
    ozRef.value = (lb * 16).toFixed(2);
}

let convertFromoz = () => {
    let oz = ozRef.value;
    //to fixed decimals to 2 digit
    kgRef.value = (oz * 35.274).toFixed(2);
    lbRef.value = (oz * 16).toFixed(2);
}

kgRef.addEventListener("input", convertFromKg);
lbRef.addEventListener("input", convertFromlb);
ozRef.addEventListener("input", convertFromoz);
window.addEventListener("input", convertFromKg);
