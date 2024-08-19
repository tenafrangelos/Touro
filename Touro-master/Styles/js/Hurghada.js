document.addEventListener("DOMContentLoaded", () => {
  const destinations = [

    {
      name: "El Gouna  ",
      image: "https://static.wixstatic.com/media/5eff48_a3a621a7ddf94512a98404a186ca0a41~mv2.jpg/v1/fit/w_1000,h_868,al_c,q_80/file.png",
      description: "  El Gouna is a luxurious and meticulously planned resort town located on the Red Sea coast, just north of Hurghada, Egypt. Known for its upscale amenities, picturesque surroundings, and vibrant community, El Gouna is often referred to as the (Venice of the Red Sea) due to its network of lagoons, islands, and canals.",
    },
    {
      name: "Sand City Museum ",
      image: "https://gate.ahram.org.eg/Media/News/2022/6/29/2022-637921092343327016-332.jpeg",
      description: "The Sand City Museum in Hurghada is a fascinating outdoor museum dedicated to the art of sand sculpting.Situated in the popular Red Sea resort city of Hurghada, Egypt, this museum is unique in its display of intricate and large-scale sand sculptures.",
    },
    {
      name: "New Marina ",
      image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/4a/fa/25/marina-overview.jpg?w=600&h=600&s=1",
      description:
        "The New Marina in Hurghada is a modern and vibrant harbor area that offers a lively atmosphere with a variety of restaurants, cafes, bars, and shops. It's a popular spot for tourists and locals alike, providing a picturesque setting with stunning views of the Red Sea.",
    },
    {
      name: "Mahmya Island",
      image:"https://cdn.getyourguide.com/img/location/6082a8491c61d-wide.jpeg/88.jpg",
      description:
        "Mahmya Island is a stunning tropical paradise located off the coast of Hurghada. Known for its crystal-clear turquoise waters, pristine white sandy beaches, and vibrant coral reefs.",
    },
    {
      name: "jungle Aqua Park ",
      image:
        "https://i.wakacje.pl/no-index/hotel/egipt/jungle-aqua-park-826306771-original.jpg",
      description:
        "Jungle Aqua Park in Hurghada is one of the largest and most popular water parks in Egypt. Located in the vibrant resort city of Hurghada along the Red Sea coast, the park is part of a larger hotel and resort complex that offers an all-inclusive experience for families, couples, and groups..",
    },
    {
      name: "Mini Egypt Park",
      image:
        "https://hurghadalovers.com/wp-content/uploads/2022/05/Mini-Egypt-Park-hurghada-Tour-Booking-Cheap-Ticket-Prices-to-visit-Sand-City-in-Hurghada.jpg",
      description:
        'Mini Egypt Park in Hurghada is a unique and educational attraction that offers visitors a miniature tour of Egypt’s most famous landmarks, all in one place. Located in the Makadi Bay area, just a short drive from the center of Hurghada, the park features meticulously crafted models of Egypt’s most iconic monuments and buildings at a scale of 1:25..',
    },
    {
      name: "Mosque El Mina Masjid",
      image: "https://htccadmin.rehlat.com/static/media/searchdestination/thingstodo/images/hurghada/mosque_el_mina_masjid/Al-Mina_Mosque_in_Hurghada14.webp",
      description:
        "El Mina Masjid, also known as the El Mina Mosque, is one of the most prominent and beautiful mosques in Hurghada, Egypt. Located near the Hurghada Marina and overlooking the Red Sea, it is a key landmark in the city and a significant place of worship for the local Muslim community.",
    },
    {
      name: "Zeytuna Beach",
      image: "https://www.freedomtravel.se/wp-content/uploads/Zeytouna-Egypten-1024x577.jpg",
      description:
        "Zeytuna Beach is a popular private beach located on a small island within the El Gouna resort area, just north of Hurghada, Egypt. It offers a picturesque and tranquil setting, making it an ideal spot for relaxation, sunbathing, and various water activities.",
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
