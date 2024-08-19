document.addEventListener("DOMContentLoaded", () => {
  const destinations = [
    {
      name: "Sharm El Sheikh city",
      image: "https://live.staticflickr.com/7844/33437952658_a55241a815_b.jpg",
      description: "Sharm El Sheikh Tour by Night.",
    },
    {
      name: "Ras Mohammed National Park",
      image:
        "https://i1.wp.com/www.naamabluehotel.com/wp-content/uploads/2017/10/ras_mohamed_3.jpg?fit=1600%2C1090&ssl=1",
      description:
        "A pristine national park with stunning coral reefs, diverse marine life, and scenic landscapes.",
    },
    {
      name: "Naama Bay",
      image:
        "https://www.hotelscombined.com/rimg/himg/79/a4/47/ice-133422-79897800_3XL-305251.jpg?width=2160&height=1215&crop=true",
      description:
        "A popular tourist destination known for its vibrant nightlife, restaurants, and beautiful beaches.",
    },
    {
      name: "SOHO Square",
      image:
        "https://assets.cairo360.com/app/uploads/2014/02/article_original_6680_20140216_5300a40825840-598x323.jpg",
      description:
        "A bustling entertainment center featuring shops, restaurants, ice skating, and a variety of events.",
    },
    {
      name: "Dahab",
      image:
        "https://www.zubludiving.com/images/Egypt-Red-Sea/Sharm-North/Sharm-El-Sheik-Hurghada-Dahab-Banner02.jpg",
      description:
        'Dahab, meaning "gold" in Arabic, is a small town located on the southeast coast of the Sinai Peninsula in Egypt.',
    },
    {
      name: "Tiran Island",
      image: "https://images.memphistours.com/large/228093890_tiran1.jpg",
      description:
        "An island famous for its clear waters, excellent diving spots, and stunning underwater landscapes.",
    },
    {
      name: "El Fanar Beach",
      image: "https://img.tourister.ru/files/2/6/8/5/9/3/8/6/original.jpg",
      description:
        "El Fanar Beach is renowned for its serene beauty and excellent diving and snorkeling opportunities.",
    },
    {
      name: "Nuweiba",
      image: "https://web.nuweibaclub.com/wp-content/uploads/2020/08/22.jpg",
      description:
        "Nuweiba is a charming coastal town located along the Red Sea, approximately 80 kilometers north of Sharm El-Sheikh.",
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
