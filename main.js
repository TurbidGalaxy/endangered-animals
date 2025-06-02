function titleText(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const animals = [
  {
    id: "intro",
    name: "introduction",
    size: "30%",
    c: "intro",
    image: "https://tse3.mm.bing.net/th?id=OIP.A4J_lWfuIOrU577Pe_hh6QHaEo&pid=Api&P=0&w=640&h=400",
    description: `
    Across the globe, countless animal species are slipping silently toward extinction, threatened by habitat destruction, poaching, and environmental changes. These endangered animals are vital parts of our ecosystems, and their loss would disrupt the delicate balance of nature. Understanding their struggles and supporting conservation efforts is more important than ever. By learning about these species and taking action—whether through spreading awareness, supporting protection programs, or adopting sustainable habits—we can help ensure that future generations inherit a world rich in wildlife and natural beauty.
    `
  },
  {
    id: "tarsier",
    name: "philippine tarsier",
    size: "35%",
    c: "tarsier",
    image: "https://images.fineartamerica.com/images-medium-large-5/endangered-philippine-tarsier-tarsius-per-andre-hoffmann.jpg",
    description: `Tarsiers are the only entirely carnivorous primates, preying on insects, lizards, and snakes. Clinging upright to trees, they press the tail against the trunk for support. Their grip is also aided by the tips of their digits, which are expanded into disklike adhesive pads. A species of tarsier endemic to the Philippines. It is found in the southeastern part of the archipelago, particularly on the islands of Bohol, Samar and Leyte.

<br><br>But the Philippine Tarsier is near threatened. There are 5,000 to 10,000 Philippine Tarsiers left in the world. The Philippine tarsier is considered "Near Threatened" due to habitat loss and fragmentation, largely caused by deforestation for agriculture, logging, and mining. Additionally, the illegal pet trade, which involves capturing and selling tarsiers, and their use as tourist attractions also contribute to their declining population.`
  },
  {
    id: "mousedeer",
    name: "philippine mouse deer",
    size: "40%",
    c: "mousedeer",
    image: "https://i.ytimg.com/vi/A_WQk4IWeFk/maxresdefault.jpg",
    description: `The Philippine Mouse-Deer (Tragulus nigricans), also known as the Balabac chevrotain or pilandok (in Filipino), a small, shy, and nocturnal animal with a dark brown body, slender legs, and a white underside. It has large eyes, a short face, and no antlers, but males have tiny fang-like tusks used for defense. About the size of a rabbit, it moves quietly through dense forest undergrowth and is most active at night, feeding on leaves, fruits, and twigs. 
    
    <br><br>It is endemic to Balabac and nearby smaller islands (Bugsuk and Ramos) southwest of Palawan in the Philippines.

The Philippine Mouse Deer is unfortunately endangered, with only an estimated 2525 left.`
  },
  {
    id: "eagle",
    name: "philippine eagle",
    size: "25%",
    c: "eagle",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Noblest_Flyer_Philippine_Eagle.jpg/500px-Noblest_Flyer_Philippine_Eagle.jpg",
    description: `The Philippine Eagle, also known as the monkey-eating eagle, is a large raptor endemic to the Philippines, considered the largest eagle in the world. It's a critically endangered species, facing threats like habitat loss and hunting, with only an estimated 400 pairs left in the wild.

There are only 784 mature Philippine Eagles left in the wild, with the largest number residing in Mindanao (a region in the Philippines)
The Philippine Eagle is critically endangered primarily due to habitat loss caused by deforestation, hunting, and human encroachment.`
  },
  {
    id: "dugong",
    name: "dugong",
    size: "40%",
    c: "dugong",
    image: "https://media.australian.museum/media/dd/thumbnails/images/Dugong_van_Samra_some_rights_reserved_CC_BY-N.width-1600.6b71620.jpg",
    description: `The dugong is a large, grayish marine mammal with a rounded body, fluked tail, and a distinctive downturned snout adapted for grazing on seagrass. It has thick, smooth skin and small bristles on its upper lip to help gather food. Dugongs are gentle and slow-moving, often seen alone or in small groups, and are known for their peaceful behavior. They spend most of their time feeding on seagrass in shallow coastal waters and must surface regularly to breathe, although they can stay underwater for several minutes at a time.
    
    <br><br>Dugongs live in warm, shallow coastal waters, especially in areas with plenty of seagrass beds, like those found in Palawan, Philippines. They are herbivores that feed almost exclusively on seagrass, using their snouts to uproot and eat the soft plants from the seabed.
    
    <br><br>Dugongs are endangered mainly due to habitat loss, especially the destruction of seagrass beds from coastal development, pollution, and climate change. They are also threatened by accidental capture in fishing nets, boat collisions, and in some areas, illegal hunting for meat and oil. Their slow reproduction rate makes it harder for populations to recover, with an estimate of 70,000 dugongs remaining, being marked as Vulnerable, though in the Philippines is Critically Endangered with some suggesting fewer than 200 individuals remaining.`
  },
  {
    id:"cockatoo",
    name:"Red-vented Cockatoo",
    size:"25%",
    c:"cockatoo",
    image:"https://birdfinding.info/wp-content/uploads/2021/09/RedventedCockatoo4.jpg",
    description:`The Red-vented Cockatoo is a small, white parrot with a striking red patch under its tail, a prominent white crest, and a pale curved beak. The Red-vented Cockatoo is also a highly social bird, often seen in noisy, active flocks, and is widely known for its loud, piercing calls, intelligence, and playful behavior. You can usually find them in lowland forests, mangroves, and coastal areas, and they're historically widespread across the Philippine islands, but now its population is limited to a few places like Palawan, where conservation efforts are strongest.

    <br><br>For the reasons why this playful bird is so endangered, the prominent reasons for why are usually on habitat loss, illegal pet trading, and also poaching. Deforestation is truly devastating to this species, with mangrove and lowland forest destruction leading to several homes and nests being destroyed, whilst removing one of their only places to feed. Additionally, they have been heavily captured and sold in the illegal wildlife trade because of their beauty and rarity. These pressures, combined with slow reproduction rates, have caused their population to decline sharply, leading to their classification as Critically Endangered, with estimates suggesting there are only 650 to 1120 wild individuals remaining.
    `
  },
  {
    id:"turtle",
    name:"Philippine Forest Turtle",
    size:"30%",
    c:"turtle",
    image:"https://tse2.mm.bing.net/th?id=OIP.4BZFxM-npeznxCCkOTaptAHaFQ&pid=Api&P=0&w=563&h=400",
    description:`The Philippine Forest Turtle (Siebenrockiella leytensis) is a rare, medium-sized freshwater turtle native to Northern Palawan. It has a dark brown to black shell, a slightly domed carapace, and a distinctive yellowish line behind each eye. This turtle lives in freshwater ecosystems such as forest streams, shaded rivers, and swamps, preferring clear, shallow water with soft, muddy or sandy bottoms, surrounded by dense lowland tropical rainforest with thick canopy cover.

<br><br>Its diet is omnivorous, feeding on aquatic plants, fruits, fallen vegetation, algae, insects, snails, worms, small crustaceans, fish eggs, and sometimes small fish. The species is critically endangered due to habitat loss, illegal wildlife collection, slow reproductive rates, challenges in captive breeding, and its limited range. The exact population is unknown, but it is considered one of the most threatened turtle species in the world, standing at Critically Endangered.

`
  },
  {
    id:"help",
    name:"we need your help",
    size:"30%",
    c:"help",
    image:"https://tse3.mm.bing.net/th?id=OIP.OP-D9eS_Z4XyLoPgXFxHIgHaFj&pid=Api&P=0&w=500&h=375",
    description:`Please help protect the incredible wildlife of Palawan before it’s too late. Organizations like the <a href="https://katala.org" target="_blank" rel="noopener noreferrer">Katala Foundation Inc.</a> are working tirelessly to save the endangered Philippine Cockatoo and other species, while the <a href="https://pcsd.gov.ph" target="_blank" rel="noopener noreferrer">Palawan Council for Sustainable Development (PCSD)</a> fights to preserve the island’s precious habitats. The <a href="https://marinewildlifewatch.org" target="_blank" rel="noopener noreferrer">Marine Wildlife Watch of the Philippines</a> protects vulnerable marine animals like dugongs, and the <a href="https://programs.wcs.org/philippines" target="_blank" rel="noopener noreferrer">Wildlife Conservation Society - Philippines</a> helps maintain biodiversity across the region. The <a href="https://pbfciphil.org" target="_blank" rel="noopener noreferrer">Philippine Biodiversity Conservation Foundation, Inc. (PBCFI)</a> works to educate communities and protect vital habitats.
    
    <br><br>But they can’t do it alone. On a global scale, groups like the <a href="https://www.worldwildlife.org" target="_blank" rel="noopener noreferrer">World Wide Fund for Nature (WWF)</a> and the <a href="https://www.iucn.org" target="_blank" rel="noopener noreferrer">International Union for Conservation of Nature (IUCN)</a> provide essential support to save endangered species worldwide.

<br><br>Your voice, your time, or even a small donation can make a huge difference. Please join the fight to protect Palawan’s unique animals and their fragile environment—before they disappear forever.`
  },
];

function createAnimalPage(animal) {
    let element = document.createElement("div");
    element.className = "animal";
    element.id = animal.id;
    // Only set width, let height be auto to preserve aspect ratio (prevent stretching)
    element.innerHTML = `
        <h2 class="animal-title">${titleText(animal.name)}</h2>
        <img class="${animal.c} animal-img" src="${animal.image}" alt="${animal.name} image" style="width: ${animal.size}; height: auto;">
        <p class="body-text">${animal.description}</p>
        <hr>
    `;
    document.querySelector(".container").appendChild(element);
}

animals.forEach(createAnimalPage);

function scrollToSectionWithOffset(sectionId) {
    const section = document.getElementById(sectionId);
    const navbar = document.querySelector('.navbar');
    if (section && navbar) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const navbarHeight = navbar.offsetHeight;
        window.scrollTo({
            top: sectionTop - navbarHeight - 5,
            behavior: 'smooth'
        });
    }
}

function populateDropdown(animals) {
    const dropdown = document.getElementById('animal-dropdown');
    dropdown.innerHTML = `<option value="">Jump to animal...</option>`;
    animals.forEach((animal) => {
        const opt = document.createElement("option");
        opt.value = animal.id;
        opt.textContent = titleText(animal.name);
        dropdown.appendChild(opt);
    });
    dropdown.addEventListener('change', function () {
        if (this.value) {
            scrollToSectionWithOffset(this.value);
            this.blur();
        }
    });
}

populateDropdown(animals);
