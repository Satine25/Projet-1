document.addEventListener("DOMContentLoaded", () => {

    const descriptions = {

        "droit.jpg":
            "La Faculté de Droit et Science Politique forme les étudiants aux métiers du droit et de l’administration.",

        "iut vannes.jpg":
            "L’IUT de Vannes propose des formations technologiques professionnalisantes.",

        "pontivy.jpg":
            "Le site universitaire de Pontivy accueille plusieurs formations spécialisées.",

        "ensibs_lorient.jpg":
            "L’ENSIBS est l’école d’ingénieurs de l’Université Bretagne Sud.",

        "sciences.jpg":
            "La Faculté Sciences & Sciences de l’Ingénieur propose des formations scientifiques.",

        "lettres.jpg":
            "La Faculté Lettres, Langues et Sciences Humaines accueille des étudiants dans les domaines littéraires.",

        "iae.jpeg":
            "L’IAE Bretagne Sud est l’école universitaire de management."
    };

    const zone = document.getElementById("description-text");
    document.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG") {
            const nom = e.target.getAttribute("src");
            zone.textContent =
                descriptions[nom] ||
                "Aucune description disponible.";
        }
    });
});