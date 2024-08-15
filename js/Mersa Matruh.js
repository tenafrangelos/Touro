document.addEventListener('DOMContentLoaded', () => {
    const destinations = [

        {
            name: 'Mersa Matruh',
            image: 'https://t4.ftcdn.net/jpg/03/54/30/19/240_F_354301921_UEYKbQtnrkSqvTLN2ZtItEE7AIGPjvj3.jpg',
            description: 'Mersa Matruh Tour by Night. '
        },
        {
            name: 'Siwa Oasis',
            image: 'https://t3.ftcdn.net/jpg/06/03/16/08/240_F_603160806_CdaCCmNljA2h0jH3Fuukmm5LkNbfRnZu.jpg',
            description: 'Siwa Oasis experience with Jeep Safari adventure and lunch from Mersa Matruh.'
        },
        {
            name: 'Quad bike',
            image: 'https://t3.ftcdn.net/jpg/05/24/57/78/240_F_524577870_ZxOy9D3UoJfN51W8wyNgbIf2V2vX1D0U.jpg   ',
            description: 'Quad bike experience with Bedouin dates and tea from Mersa Matruh or Al-Alameen.'
        },
        {
            name: 'Rommel\'s Cave Museum',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2gwP0CQVZBebCdXIctp8bQ4fg7iNGQqZiYA&s',
            description: 'Uncover World War II history at Rommel s Cave Museum, where the "Desert Fox" plotted his campaigns..'
        },
        {
            name: 'Boat Trips',
            image: 'https://t3.ftcdn.net/jpg/05/22/16/42/240_F_522164206_TIjdawSgjF9zGdMXay5xLpyaHTN0JOrg.jpg',
            description: 'Take a boat tour around the coast to explore hidden coves, secluded beaches, and the natural beauty of the Mediterranean Sea.'
        },
        {
            name: 'Ghazala Bay',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHRRLzCFdXDL5tT_acr6hM43Vq8wQykVqyQ&s',
            description: 'Known for its shallow waters, Ghazala Bay is perfect for beginners who want to snorkel in a safe environment.'
        },
        {
            name: 'El Obayed Beach',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/430480347.jpg?k=da0b053d483b0e573d9fba1928bfd00ccae9066a0ed766cb7f9e1dd297713f34&o=&hp=1',
            description: 'This beach is ideal for snorkeling with its clear waters and abundant sea life close to the shore.'
        },
        {
            name: 'Cleopatra’s Beach',
            image: 'https://i.pinimg.com/236x/1a/b6/f1/1ab6f10f05dcecc937835771a9eb61dc.jpg',
            description: 'While more famous for its unique rock formations, the waters around Cleopatra’s Beach also offer interesting snorkeling opportunities.'
        },
        {
            name: 'Salt Cave Salman',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/22/21/ae/salt-cave-salman.jpg?w=1200&h=-1&s=1',
            description: 'Salt Cave Salman offers a serene, salt-infused environment for relaxation and therapeutic benefits in Marsa Matrouh.'
        },
        {
            name: 'Souq Libya',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/c3/f3/68/days.jpg?w=800&h=-1&s=1',
            description: 'Souq Libya is a bustling market in Marsa Matrouh, offering a vibrant array of traditional Egyptian goods and local crafts..'
        }
    ];

    const destinationList = document.getElementById('destinations');

    destinations.forEach(destination => {
        const card = document.createElement('div');
        card.className = 'destination-card';

        const img = document.createElement('img');
        img.src = destination.image;
        img.alt = destination.name;

        const name = document.createElement('h2');
        name.textContent = destination.name;

        const desc = document.createElement('p');
        desc.textContent = destination.description;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(desc);

        destinationList.appendChild(card);
    });
});
