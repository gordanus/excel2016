function resenja() {
    var password = prompt("Unesite lozinku da biste preuzeli fajl:");
    if (password === "excelguru") {
        window.open("Resenja.zip")
    } else if (password === null) {
        return;
    } else {
        alert("Neispravna lozinka, probajte ponovo!");
    }
}

// dogadjaj za dugmad
// onclick="lekcijaDva()"
