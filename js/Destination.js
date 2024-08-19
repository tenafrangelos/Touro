document.addEventListener("DOMContentLoaded", () => {
    const destinations = [

        {
            name: "Cairo",
            image:"../images/Governates/Cairo.jpg",
            
        },
        {
            name: "Hurghada",
            image: "../images/Governates/Hurghada.jpg",
            
        },
        {
            name: "Luxor",
            image: "../images/Governates/Luxor2.jpg",
            
        },
        {
            name: "Mersa Matruh",
            image: "../images/Governates/Mersa Matruh.avif",
        },
        {
            name: "Sharm El-Sheikh",
            image: "../images/Governates/Sharm El Sheikh.jpg",
            
        },
        {
            name: "Aswan",
            image: "../images/Governates/Aswan.jpg",
        },
    ];

    const destinationList = document.getElementById("destinations");

    destinations.forEach((destination) => {
        const card = document.createElement("div");
        card.className = "destination-card";
        card.onclick = function() { window.location.href = `./${destination.name}.html`; }; // New line added

        const img = document.createElement("img");
        img.src = destination.image;
        img.alt = destination.name;

        const name = document.createElement("h2");
        name.textContent = destination.name;


        card.appendChild(img);
        card.appendChild(name);

        destinationList.appendChild(card);
    });
});
