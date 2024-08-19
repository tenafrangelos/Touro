document.addEventListener('DOMContentLoaded', () => {
    const destinations = [

        {
            name: 'Karnak Temple Complex',
            image: 'https://t4.ftcdn.net/jpg/04/81/84/89/240_F_481848997_GZRlLd7bokHCeMSuLCCzgCxw0IGFw42I.jpg',
            description: 'A vast religious site dedicated to the Theban triad, known for its.'
        },
        {
            name: 'Valley of the Kings',
            image: 'https://t4.ftcdn.net/jpg/05/21/52/47/240_F_521524779_cBHpDExWQZnVze90Pc1IWjz7MLmelgdx.jpg',
            description: 'The burial site of New Kingdom pharaohs, including Tutankhamun’s tomb.'
        },
        {
            name: 'Luxor Temple',
            image: 'https://t4.ftcdn.net/jpg/02/23/23/17/240_F_223231795_fv1b4XP2GMncfRTS4j8gRCFK37nb8DFd.jpg',
            description: 'A central temple dedicated to the rejuvenation of kingship, beautifully lit at night.'
        },
        {
            name: 'Mortuary Temple of Hatshepsut',
            image: 'https://t3.ftcdn.net/jpg/08/36/05/30/240_F_836053059_6ultOa2KJKTtXT091VQmsOdEvrnO2VqX.jpg',
            description: 'An elegant temple at Deir el-Bahri, built for Egypt’s most famous female pharaoh.'
        },
        {
            name: 'Colossi of Memnon',
            image: 'https://t4.ftcdn.net/jpg/05/11/65/79/240_F_511657928_gu6RysmewitA9SsCGF5QeMc8q2CM9JO2.jpg',
            description: 'Two towering statues of Amenhotep III, once part of a grand mortuary temple.'
        },
        {
            name: 'Valley of the Queens',
            image: 'https://t4.ftcdn.net/jpg/05/67/53/93/240_F_567539342_WFFnWXFL2BAhx7xykl4eHOod7iPM9hko.jpg',
            description: 'The burial site of queens, featuring the beautifully decorated tomb of Nefertari.'
        },
        {
            name: 'Luxor Museum',
            image: 'https://t4.ftcdn.net/jpg/07/90/42/95/240_F_790429534_LZBBpqL7aePqp0g3xeEPQWfGi4PtPydm.jpg',
            description: 'A museum showcasing artifacts from Luxor, including items from Tutankhamun’s tomb.'
        },
        {
            name: 'Ramesseum',
            image: 'https://t4.ftcdn.net/jpg/05/04/97/95/240_F_504979557_s6Oa8uO6QUocorno1xqtC8Li5cgK16Xj.jpg   ',
            description: 'The mortuary temple of Ramses II, famous for its colossal fallen statue.'
        },
        {
            name: 'Tombs of the Nobles',
            image: 'https://t3.ftcdn.net/jpg/07/46/03/80/240_F_746038043_g4HBQNRXEYMyfVkzkADR2YZaTiHlbcti.jpg',
            description: 'Tombs of high-ranking officials, notable for their colorful depictions of daily life.'
        },
        {
            name: 'Temple of Abydos',
            image: 'https://t3.ftcdn.net/jpg/07/45/57/28/240_F_745572880_KVyvAoFlIM3M4fGStguYmfgUMq8Plk06.jpg',
            description: 'An ancient temple dedicated to Osiris, known for its well-preserved and intricate carvings.'
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