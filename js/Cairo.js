document.addEventListener("DOMContentLoaded", () => {
    const destinations = [

        {
            name: "The Great Pyramids of Giza",
            image: "https://www.travelandleisure.com/thmb/U6Ts4f8fanbARIPQO9pEGzd8icA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/giza-pyramid-EGYPTSECRETS1016-617b2b1b23dd4fd38bc9f365af7235ab.jpg",
            description:
                "The Great Pyramids of Giza are one of the Seven Wonders of the Ancient World and a must-see for any visitor to Egypt. These colossal structures, built thousands of years ago, stand as a testament to the engineering and architectural skills of the ancient Egyptians.",
        },
        {
            name: "The Egyptian Museum",
            image: "https://images.squarespace-cdn.com/content/v1/56c13cc00442627a08632989/1584900976212-MDBCTD7TZ8UR7IGULJ28/IMG_8657.jpg",
            description:
                "The Egyptian Museum in Cairo houses the world's largest collection of Egyptian antiquities. With artifacts dating back thousands of years, the museum offers a fascinating glimpse into the history and culture of ancient Egypt.",
        },
        {
            name: "Khan el-Khalili Bazaar",
            image:
                "https://live.staticflickr.com/1390/5146069762_05010b2585_b.jpg",
            description:
                "Khan el-Khalili Bazaar is one of the largest and oldest souqs (markets) in the Middle East. This bustling marketplace offers a wide variety of goods, including souvenirs, spices, textiles, and jewelry.",
        },
        {
            name: "The Citadel",
            image:
                "https://images.squarespace-cdn.com/content/v1/5f56423f4aca615934476295/1636618598798-W4UHMXZJXLLJ853B3KCW/Citadel+3.jpg",
            description:
                "The Citadel is a massive medieval fortress located in Cairo. Built by Saladin in the 12th century, the Citadel served as the center of Egyptian government for centuries. It now houses several museums and offers stunning views of the city.",
        },
        {
            name: "Al-Azhar Mosque",
            image:
                "https://ucarecdn.com/e42ad809-10fb-4eeb-a981-74d95948c2ee/-/crop/640x360/20,0/-/preview/",
            description:
                "Al-Azhar Mosque is one of the oldest and most prestigious universities in the Islamic world. Founded in the 10th century, Al-Azhar Mosque is also a functioning mosque and a major center for Islamic learning.",
        },
        {
            name: "The Nile River",
            image:
                "https://cff2.earth.com/uploads/2024/04/29221202/researchers-propose-a-fresh-strategy-for-peace-along-the-nile-river.jpg",
            description:
                "The Nile River is the lifeblood of Egypt. A cruise down the Nile River is a popular way to see some of Egypt's most famous sights, such as the Valley of the Kings and the Temple of Karnak.",
        },
        {
            name: "Coptic Cairo",
            image:
                "https://humbo.s3.eu-north-1.amazonaws.com/place-photo/65865a34fb12b43e67c38e50/Wbyqi7Z6ZP.jpeg",
            description:
                "Coptic Cairo is a historic neighborhood in Cairo that is home to a number of churches and other Christian sites. It is a great place to learn about the history of Christianity in Egypt.",
        },
        {
            name: "Hanging Church",
            image:
                "https://www.egypttailormade.net/media/k2/galleries/399/egypt%20tailor%20made.jpg",
            description:
                "The Hanging Church, also known as the Church of the Virgin Mary, is one of the most famous churches in Coptic Cairo. It is named for its location, as it is built on top of the ruins of two Roman forts.",
        },
    ];

    const destinationList = document.getElementById("destinations");

    destinations.forEach((destination) => {
        const card = document.createElement("div");
        card.className = "destination-card";

        const img = document.createElement("img");
        img.src = destination.image;
        img.alt = destination.name;

        const name = document.createElement("h2");
        name.textContent = destination.name;

        const desc = document.createElement("p");
        desc.textContent = destination.description;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(desc);

        destinationList.appendChild(card);
    });
});
