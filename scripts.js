function filterGlossary() {
    // Récupère la valeur de la recherche
    let input = document.getElementById('search').value.toLowerCase();
    
    // Récupère toutes les entrées du glossaire
    let entries = document.getElementsByClassName('entry');

    // Boucle sur chaque entrée et affiche ou cache en fonction de la recherche
    for (let i = 0; i < entries.length; i++) {
        let word = entries[i].getElementsByClassName('word')[0];
        
        // Vérifie si le mot correspond à la recherche
        if (word.innerHTML.toLowerCase().includes(input)) {
            entries[i].style.display = "";
        } else {
            entries[i].style.display = "none";
        }
    }
}
