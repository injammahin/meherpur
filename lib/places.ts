export type GalleryImage = {
  url: string;
  alt: string;
  credit: string;
};

export type PlaceHighlight = {
  name: string;
  bangla?: string;
  description: string;
};

export type Place = {
  slug: string;
  name: string;
  bangla: string;
  eyebrow: string;
  category: "History" | "Heritage" | "Nature" | "Agriculture";
  area: string;
  locationNote: string;
  hero: string;
  summary: string;
  overview: string;
  history: string;
  duration: string;
  durationHours: number;
  bestTime: string;
  bestSeason: string;
  gettingThere: string;
  visitorNote: string;
  mapQuery: string;
  gallery: GalleryImage[];
  highlights: PlaceHighlight[];
  sourceLabel: string;
  sourceUrl: string;
  tags: string[];
  nearby?: boolean;
};

export const fallbackImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Natural_Landscape_of_Meherpur_District%2C_Bangladesh_%282025%29.jpg/3840px-Natural_Landscape_of_Meherpur_District%2C_Bangladesh_%282025%29.jpg";

export const places: Place[] = [
  {
    slug: "mujibnagar",
    name: "Mujibnagar Memorial Complex",
    bangla: "মুজিবনগর স্মৃতি কমপ্লেক্স",
    eyebrow: "The birthplace of a government",
    category: "History",
    area: "Mujibnagar Upazila, Meherpur",
    locationNote: "About 14–20 km south-west of Meherpur town, depending on route",
    hero: "https://media.prothomalo.com/prothomalo-bangla/2026-04-16/0cw3cdgn/MeherpurDH069.jpg",
    summary:
      "The essential Meherpur experience: a national memorial, the historic mango grove, museum, murals and the landscape where Bangladesh’s first provisional government took oath.",
    overview:
      "Mujibnagar is not a single monument. It is a large historic landscape that connects the original oath-taking ground at Baidyanathtala with the memorial, Liberation War museum, sculptural map, murals and the old mango grove. Give it enough time—the meaning is in the sequence between these places.",
    history:
      "On 17 April 1971, Bangladesh’s first provisional government took oath at Baidyanathtala. The place was renamed Mujibnagar in honour of Bangabandhu Sheikh Mujibur Rahman. The memorial complex now preserves this defining chapter through architecture, landscape, objects and visual storytelling.",
    duration: "3–4 hours",
    durationHours: 3.5,
    bestTime: "8:00–11:30 AM",
    bestSeason: "October to March; 17 April is historically significant and can be busy",
    gettingThere:
      "Reserve an easy-bike, CNG or car from Meherpur town for a comfortable return journey. Ask the driver to wait, or agree on a pickup time before entering the complex.",
    visitorNote:
      "Start with the memorial and museum, then walk toward the mango grove and oath-taking site. Carry water, dress respectfully and keep at least half a day free.",
    mapQuery: "Mujibnagar Memorial Complex, Meherpur, Bangladesh",
    gallery: [
      {
        url: "https://media.prothomalo.com/prothomalo-bangla/2026-04-16/0cw3cdgn/MeherpurDH069.jpg",
        alt: "Aerial view of the large Bangladesh map and museum at Mujibnagar",
        credit: "Prothom Alo",
      },
      {
        url: "https://media.prothomalo.com/prothomalo-bangla/2026-04-16/0cw3cdgn/MeherpurDH069.jpg",
        alt: "Aerial view of the large Bangladesh map at Mujibnagar complex",
        credit: "Prothom Alo",
      },
      {
        url: "https://cdn.bdnews24.com/bdnews24/media/bdnews24-english/import/media/2017/12/15/amrokanon.jpg",
        alt: "Morning light passing through the historic Mujibnagar mango grove",
        credit: "bdnews24.com",
      },
      {
        url: "https://adarbepari.com/wp-content/uploads/2019/10/meherpur-mujibnagar-03.jpg",
        alt: "Sculptural scene inside the Mujibnagar memorial complex",
        credit: "Adar Bepari",
      },
      {
        url: "https://www.touristplaces.com.bd/images/pp/6/p120666.jpg",
        alt: "Low memorial building and landscaped lawn at Mujibnagar",
        credit: "Tourist Places Bangladesh",
      },
    ],
    highlights: [
      {
        name: "Mujibnagar Smriti Soudho",
        bangla: "মুজিবনগর স্মৃতিসৌধ",
        description:
          "The monumental centrepiece, recognised by its rising triangular walls and red altar. Pause here before moving through the wider complex.",
      },
      {
        name: "Baidyanathtala Aamrakanan",
        bangla: "বৈদ্যনাথতলা আম্রকানন",
        description:
          "The historic mango grove where the provisional government took oath. It is both a national site and a living, shaded landscape.",
      },
      {
        name: "Liberation War Museum",
        bangla: "মুক্তিযুদ্ধ জাদুঘর",
        description:
          "A focused introduction to the government-in-exile, the Liberation War and the people connected to the events of April 1971.",
      },
      {
        name: "Bangladesh Map & Sculptures",
        bangla: "বাংলাদেশ মানচিত্র ও ভাস্কর্য",
        description:
          "A large open-air interpretation of the war, supported by sculptural scenes and murals representing important national moments.",
      },
      {
        name: "Oath-taking Ground",
        bangla: "শপথ গ্রহণের স্থান",
        description:
          "The red stage and surrounding grounds mark the place connected to the first government’s formal oath on 17 April 1971.",
      },
      {
        name: "Rose Garden & Open Grounds",
        bangla: "গোলাপ বাগান ও প্রাঙ্গণ",
        description:
          "Landscaped spaces that help connect the major memorial elements and give visitors room to rest between historical exhibits.",
      },
    ],
    sourceLabel: "Meherpur District administration",
    sourceUrl: "https://meherpur.gov.bd/pages/tourist-spot",
    tags: ["National history", "Museum", "Architecture", "Mango grove"],
  },
  {
    slug: "amjhupi-nilkuthi",
    name: "Amjhupi Nilkuthi",
    bangla: "আমঝুপি নীলকুঠি",
    eyebrow: "Indigo history beside the Kajla",
    category: "Heritage",
    area: "Amjhupi, Meherpur Sadar",
    locationNote: "About 6–7 km east of Meherpur town",
    hero: "https://www.meherpurpratidin.com/wp-content/uploads/2023/10/Amjhupi-Nilkuthi-01.jpg",
    summary:
      "A shaded colonial-era indigo house with pillared verandas, old rooms, landscaped grounds and a quiet connection to the Kajla River.",
    overview:
      "Amjhupi Nilkuthi is one of Meherpur’s most atmospheric heritage sites. The long veranda, rooms and mature trees make the architecture easy to read, while the Kajla riverside adds a softer landscape beyond the building.",
    history:
      "The site is associated with the exploitative indigo economy of the colonial period. Local and official histories place the kuthi in the early nineteenth century; the surviving compound is now valued as both a historic structure and a visitor destination.",
    duration: "1.5–2 hours",
    durationHours: 1.75,
    bestTime: "3:30–5:30 PM",
    bestSeason: "October to March; avoid the hottest middle hours in summer",
    gettingThere:
      "Easy-bikes and reserved local vehicles are available from Meherpur town. Keep the destination name in Bangla for easier communication with drivers.",
    visitorNote:
      "Walk around the exterior before entering any accessible rooms. Finish at the river-facing side, and avoid leaning on fragile walls or old fittings.",
    mapQuery: "Amjhupi Nilkuthi, Meherpur, Bangladesh",
    gallery: [
      {
        url: "https://www.meherpurpratidin.com/wp-content/uploads/2023/10/Amjhupi-Nilkuthi-01.jpg",
        alt: "White colonial facade of Amjhupi Nilkuthi beneath trees",
        credit: "Meherpur Pratidin",
      },
      {
        url: "https://d3fphkxyf5o5bm.cloudfront.net/image-resize/format%3Dwebp%2Cw%3D720/QwRY54Li1HMwD7oNfpkwLCJDQAz6MmD3p9JgnetS7d",
        alt: "Pillared veranda and green shutters at Amjhupi Nilkuthi",
        credit: "Mindtrip contributor",
      },
      {
        url: "https://images.mindtrip.ai/attractions/618a/eabc/b00a/263e/48b3/43f3/b7ed/932d",
        alt: "Entrance gate to Amjhupi Nilkuthi under a canopy of trees",
        credit: "Mindtrip contributor",
      },
      {
        url: "https://mindtrip.ai/attractions/6170/af4c/f517/08f6/5bd3/abd0/e426/7711",
        alt: "Walkway and seating beside the river at Amjhupi Nilkuthi",
        credit: "Mindtrip contributor",
      },
      {
        url: "https://somogrobangladesh.com/wp-content/uploads/2025/01/Amjhupi-Nilkuthi-Indigo-Plantation-House-1024x463.png",
        alt: "Amjhupi Nilkuthi building framed by green gardens",
        credit: "Somogro Bangladesh",
      },
    ],
    highlights: [
      {
        name: "Main Kuthi House",
        bangla: "মূল কুঠিবাড়ি",
        description:
          "The preserved single-storey structure is the main focus, with a long facade, shaded veranda and multiple historic rooms.",
      },
      {
        name: "Pillared Veranda",
        bangla: "স্তম্ভযুক্ত বারান্দা",
        description:
          "The veranda gives the building its distinctive rhythm and offers the clearest view of its colonial architectural character.",
      },
      {
        name: "Historic Rooms",
        bangla: "ঐতিহাসিক কক্ষসমূহ",
        description:
          "Accessible interior rooms help visitors understand how the compound functioned. Enter only where local staff permit access.",
      },
      {
        name: "Kajla Riverside",
        bangla: "কাজলা নদীর পাড়",
        description:
          "A calm riverside edge and walkway extend the visit beyond architecture into the rural landscape surrounding Amjhupi.",
      },
    ],
    sourceLabel: "Beautiful Bangladesh",
    sourceUrl: "https://beautifulbangladesh.gov.bd/district-destination/meherpur/heritage/189",
    tags: ["Colonial heritage", "Architecture", "Kajla River", "Photography"],
  },
  {
    slug: "bhatpara-nilkuthi",
    name: "Bhatpara Nilkuthi & DC Eco Park",
    bangla: "ভাটপাড়া নীলকুঠি ও ডিসি ইকোপার্ক",
    eyebrow: "Ruins reclaimed by green",
    category: "Heritage",
    area: "Saharbati, Gangni Upazila",
    locationNote: "On the Kajla River in the Gangni area",
    hero: "https://i0.wp.com/adarbepari.com/wp-content/uploads/2017/08/bhatpara-neelkuthi-meherpur.jpg?fit=820%2C430&ssl=1",
    summary:
      "Dramatic red-brick indigo ruins sit inside a landscaped eco park with walking paths, water and family recreation space.",
    overview:
      "Bhatpara combines two different experiences: the rough, weathered remains of an indigo factory and the softer recreational landscape of DC Eco Park. The contrast makes it a strong late-afternoon visit for history lovers and families.",
    history:
      "The surviving brick structure is tied to Meherpur’s colonial indigo industry and the exploitation surrounding forced indigo cultivation. The area was later developed as a visitor centre and eco park, adding paths, planting and recreational features around the heritage core.",
    duration: "2–2.5 hours",
    durationHours: 2.25,
    bestTime: "3:00 PM to sunset",
    bestSeason: "October to March; paths may be wet during the monsoon",
    gettingThere:
      "Use a reserved vehicle from Meherpur or Gangni and confirm your return ride in advance. Search for the full name—Bhatpara Nilkuthi and DC Eco Park—to avoid similarly named parks.",
    visitorNote:
      "Do not climb the ruins. Keep children close around water and uneven heritage surfaces, and confirm current park access before travelling on a holiday.",
    mapQuery: "Bhatpara Nilkuthi and DC Eco Park, Meherpur, Bangladesh",
    gallery: [
      {
        url: "https://i0.wp.com/adarbepari.com/wp-content/uploads/2017/08/bhatpara-neelkuthi-meherpur.jpg?fit=820%2C430&ssl=1",
        alt: "Red brick ruins of Bhatpara Nilkuthi surrounded by green trees",
        credit: "Adar Bepari",
      },
      {
        url: "https://vromonprio.com/images/gallery/dc-eco-park-meherpur-67f72f8d7c88d.webp",
        alt: "Quiet paved walkway beside water in DC Eco Park",
        credit: "Vromonprio",
      },
      {
        url: "https://vromonguide.com/wp-content/uploads/bhatpara-neelkuthi-dc-eco-park-meherpur-770x420.jpg",
        alt: "Bhatpara Nilkuthi ruins within the landscaped eco park",
        credit: "Vromon Guide",
      },
      {
        url: "https://ak-d.tripcdn.com/images/0HJ6312000hukd26o0AB5.jpg",
        alt: "Arched brick heritage ruins in Meherpur District",
        credit: "Trip.com contributor",
      },
      {
        url: "https://i0.wp.com/adarbepari.com/wp-content/uploads/2017/08/bhatpara-neelkuthi-meherpur.jpg?fit=820%2C430&ssl=1",
        alt: "Historic Bhatpara Nilkuthi brick building",
        credit: "Adar Bepari",
      },
    ],
    highlights: [
      {
        name: "Indigo Factory Ruins",
        bangla: "নীলকুঠির ধ্বংসাবশেষ",
        description:
          "Arches, columns and exposed red brick give the site its powerful visual identity and preserve the most important heritage fabric.",
      },
      {
        name: "DC Eco Park",
        bangla: "ডিসি ইকোপার্ক",
        description:
          "A landscaped area around the ruins with paths, planting and family recreation features.",
      },
      {
        name: "Lake & Walkways",
        bangla: "লেক ও হাঁটার পথ",
        description:
          "The water edge and walking paths are best enjoyed in the softer light of late afternoon.",
      },
      {
        name: "Kajla River Landscape",
        bangla: "কাজলা নদীর পরিবেশ",
        description:
          "The river setting connects Bhatpara to the wider agricultural and indigo history of this part of Gangni.",
      },
    ],
    sourceLabel: "Trip.com Meherpur attractions",
    sourceUrl: "https://www.trip.com/travel-guide/attraction/meherpur-district-1706354/tourist-attractions/",
    tags: ["Indigo history", "Ruins", "Eco park", "Family"],
  },
  {
    slug: "eight-martyrs-graveyard",
    name: "Eight Martyrs Graveyard — At Kobor",
    bangla: "আট কবর স্মৃতি কমপ্লেক্স",
    eyebrow: "A respectful nearby side trip",
    category: "History",
    area: "Jagannathpur, Damurhuda, Chuadanga",
    locationNote: "Near Meherpur, but administratively inside Chuadanga District",
    hero: "https://www.dhakatimes24.com/assets/news_photos/2024/12/07/image-373924.jpg",
    summary:
      "A solemn Liberation War memorial with eight graves, landscaped grounds, a museum-photo gallery and spaces for reflection.",
    overview:
      "At Kobor appears in Meherpur-area travel listings because it is a practical nearby heritage trip. For accuracy, visitors should know that the memorial is in Jagannathpur, Damurhuda Upazila of neighbouring Chuadanga District.",
    history:
      "The complex commemorates eight freedom fighters killed during the Liberation War in August 1971. The landscaped graves are supported by a museum and photographic interpretation that place their sacrifice within the wider independence movement.",
    duration: "1–1.5 hours",
    durationHours: 1.25,
    bestTime: "Morning or late afternoon",
    bestSeason: "October to March",
    gettingThere:
      "Use a reserved car or CNG and navigate to Atkobor, Jagannathpur, Damurhuda. Confirm the district and village with the driver before starting.",
    visitorNote:
      "This is a memorial, not a picnic park. Keep voices low, dress respectfully and allow time for the museum or photo gallery if open.",
    mapQuery: "At Kobor, Jagannathpur, Damurhuda, Chuadanga, Bangladesh",
    nearby: true,
    gallery: [
      {
        url: "https://www.dhakatimes24.com/assets/news_photos/2024/12/07/image-373924.jpg",
        alt: "Symmetrical grass-covered graves and palm trees at At Kobor",
        credit: "Dhaka Times",
      },
      {
        url: "https://i0.wp.com/adarbepari.com/wp-content/uploads/2023/01/atkobor-jogonnathpur-chuadanga.jpg?fit=900%2C500&ssl=1",
        alt: "Eight Graves memorial complex at Jagannathpur",
        credit: "Adar Bepari",
      },
      {
        url: "https://www.parjatanbichitra.com/wp-content/uploads/2025/07/8-G20161220184317.webp",
        alt: "Landscaped garden and memorial structures at At Kobor",
        credit: "Parjatan Bichitra",
      },
      {
        url: "https://media.prothomalo.com/prothomalo-bangla%2F2025-12-01%2Ffxszggrf%2FIMG-20251130-WA0194.jpg",
        alt: "Geometric memorial courtyard at At Kobor",
        credit: "Prothom Alo",
      },
      {
        url: "https://vromonprio.com/images/gallery/atkobor-atkabar-chuadanga-67fb689956ba3.webp",
        alt: "Grass-covered graves at Atkobor Liberation War memorial",
        credit: "Vromonprio",
      },
    ],
    highlights: [
      {
        name: "Eight Graves",
        bangla: "আট শহীদের কবর",
        description:
          "The central landscaped graves commemorate the eight freedom fighters and form the emotional centre of the complex.",
      },
      {
        name: "Liberation War Gallery",
        bangla: "মুক্তিযুদ্ধের আলোকচিত্র গ্যালারি",
        description:
          "A photographic presentation connects the local event with Bangladesh’s broader independence movement.",
      },
      {
        name: "Library & Interpretation",
        bangla: "গ্রন্থাগার ও তথ্য",
        description:
          "Supporting spaces give students and interested visitors a deeper route into the history.",
      },
      {
        name: "Open Stage & Grounds",
        bangla: "মুক্তমঞ্চ ও প্রাঙ্গণ",
        description:
          "The carefully maintained outdoor setting provides space for commemorative programmes and quiet reflection.",
      },
    ],
    sourceLabel: "Parjatan Bichitra",
    sourceUrl: "https://www.parjatanbichitra.com/15324",
    tags: ["Liberation War", "Memorial", "Museum", "Nearby trip"],
  },
  {
    slug: "amjhupi-agricultural-farm",
    name: "Amjhupi Agricultural Farm",
    bangla: "আমঝুপি কৃষি খামার",
    eyebrow: "Seasonal colour and working agriculture",
    category: "Agriculture",
    area: "Amjhupi, Meherpur Sadar",
    locationNote: "A working agricultural area; visitor conditions change with the crop season",
    hero: "https://www.bssnews.net/bangla/assets/news_photos/2023/02/03/image-77380-1675406304.jpg",
    summary:
      "A working farm landscape best known to visitors when seasonal sunflower fields turn the horizon bright yellow.",
    overview:
      "Amjhupi’s farm is valuable because it is not a purpose-built theme park. It is a working agricultural landscape where crop research and production become especially photogenic during sunflower season.",
    history:
      "Meherpur’s fertile plain supports diverse crops and seed production. Recent sunflower cultivation at the Amjhupi farm has drawn large seasonal crowds, connecting agricultural development with a growing form of local agro-tourism.",
    duration: "45–75 minutes",
    durationHours: 1,
    bestTime: "7:30–10:00 AM during bloom",
    bestSeason: "Sunflower bloom is seasonal—often around winter to early spring; verify before travelling",
    gettingThere:
      "Ask locally for the active sunflower or demonstration plots at Amjhupi farm. Use a local vehicle and confirm public access before entering any production area.",
    visitorNote:
      "Stay on paths, do not pick flowers or step between crop rows, and remember that the farm may have little to see outside the active crop season.",
    mapQuery: "Amjhupi BADC Farm, Meherpur, Bangladesh",
    gallery: [
      {
        url: "https://www.bssnews.net/bangla/assets/news_photos/2023/02/03/image-77380-1675406304.jpg",
        alt: "Dense sunflower field at Amjhupi oilseed farm in Meherpur",
        credit: "Bangladesh Sangbad Sangstha",
      },
      {
        url: "https://bangladeshpost.net/webroot/uploads/featureimage/2024-01/65ae9c3e5e596.jpg",
        alt: "Visitors walking through a sunflower garden in Meherpur",
        credit: "Bangladesh Post",
      },
      {
        url: "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-badc-meherpur/2024/12/c8aa117f29f447cdb4adb2ffe09796d7.jpg",
        alt: "Entrance to the BADC seed facility in Meherpur",
        credit: "BADC Meherpur official portal",
      },
    ],
    highlights: [
      {
        name: "Seasonal Sunflower Fields",
        bangla: "মৌসুমি সূর্যমুখী ক্ষেত",
        description:
          "The brightest visitor experience, but entirely dependent on planting and flowering schedules.",
      },
      {
        name: "Oilseed Demonstration",
        bangla: "তেলবীজ প্রদর্শনী",
        description:
          "The farm demonstrates productive uses of sunflower and other oilseed crops in Meherpur’s agricultural economy.",
      },
      {
        name: "Rural Photography",
        bangla: "গ্রামীণ আলোকচিত্র",
        description:
          "Wide crop rows, palms and flat horizons create strong images when visitors remain on designated paths.",
      },
      {
        name: "Responsible Agro-tourism",
        bangla: "দায়িত্বশীল কৃষি ভ্রমণ",
        description:
          "The crops are livelihoods and research—not props. Respecting boundaries is part of the experience.",
      },
    ],
    sourceLabel: "Bangladesh Sangbad Sangstha",
    sourceUrl: "https://www.bssnews.net/bangla/national/77380",
    tags: ["Sunflowers", "Agro-tourism", "Seasonal", "Photography"],
  },
  {
    slug: "baradi-horticulture-center",
    name: "Baradi Horticulture Center",
    bangla: "বারাদি হর্টিকালচার সেন্টার",
    eyebrow: "Nurseries, orchards and useful plant knowledge",
    category: "Agriculture",
    area: "Baradi, Meherpur",
    locationNote: "An operational Department of Agricultural Extension centre",
    hero: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Natural_Landscape_of_Meherpur_District%2C_Bangladesh_%282025%29.jpg/3840px-Natural_Landscape_of_Meherpur_District%2C_Bangladesh_%282025%29.jpg",
    summary:
      "A working horticulture centre producing fruit, spice and flower seedlings, with orchard landscapes and practical value for plant lovers.",
    overview:
      "Baradi is best approached as an educational agricultural visit rather than a conventional park. The centre’s work includes improved local and foreign fruit seedlings, grafts, spices, flowers and vegetable production areas.",
    history:
      "The centre operates under the Department of Agricultural Extension and supports sustainable, profitable crop production through nursery plants, grafting material, demonstrations and horticultural services.",
    duration: "45–90 minutes",
    durationHours: 1.25,
    bestTime: "Morning during office hours",
    bestSeason: "Varies by fruit, flower and seedling cycle; call or check locally first",
    gettingThere:
      "Navigate to Horticulture Center, Baradi, Meherpur. Because this is a government working facility, confirm that visitors are permitted before making a special trip.",
    visitorNote:
      "Ask permission before entering production plots or photographing staff. Availability of flowers, fruit and seedlings changes throughout the year.",
    mapQuery: "Horticulture Center Baradi Meherpur Bangladesh",
    gallery: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Natural_Landscape_of_Meherpur_District%2C_Bangladesh_%282025%29.jpg/3840px-Natural_Landscape_of_Meherpur_District%2C_Bangladesh_%282025%29.jpg",
        alt: "Green agricultural landscape and water in Meherpur District",
        credit: "Ashikul Islam Anik / Wikimedia Commons (Meherpur landscape)",
      },
      {
        url: "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-badc-meherpur/2024/12/c8aa117f29f447cdb4adb2ffe09796d7.jpg",
        alt: "Agricultural development facility entrance in Meherpur",
        credit: "BADC Meherpur official portal (district agriculture context)",
      },
    ],
    highlights: [
      {
        name: "Fruit Nursery",
        bangla: "ফলের চারা ও কলম",
        description:
          "The centre produces improved local and foreign fruit seedlings and grafted plants for growers.",
      },
      {
        name: "Flower & Spice Plants",
        bangla: "ফুল ও মসলার চারা",
        description:
          "Seasonal nursery areas may include flowering plants, spices and other horticultural material.",
      },
      {
        name: "Mango & Bamboo Areas",
        bangla: "আমবাগান ও বাঁশবাগান",
        description:
          "Official centre material identifies orchard, bamboo, pond and production zones within the working landscape.",
      },
      {
        name: "Practical Learning",
        bangla: "ব্যবহারিক শেখা",
        description:
          "For gardeners and farmers, the strongest reason to visit is the chance to understand locally suitable plants and propagation.",
      },
    ],
    sourceLabel: "Baradi Horticulture Center official portal",
    sourceUrl: "https://hcdae.meherpur.gov.bd/pages/static-pages/69812411a31054345f1e38e7",
    tags: ["Horticulture", "Nursery", "Learning", "Seasonal"],
  },
  {
    slug: "bhairab-river",
    name: "Bhairab River",
    bangla: "ভৈরব নদ",
    eyebrow: "The old waterline of Meherpur",
    category: "Nature",
    area: "Across parts of Meherpur District",
    locationNote: "Choose a locally accessible bank rather than treating the whole river as one attraction",
    hero: fallbackImage,
    summary:
      "A quiet river landscape tied to Meherpur’s settlement, agriculture and memory—best experienced from a safe local bank in soft evening light.",
    overview:
      "The Bhairab is Meherpur’s oldest and most important river in local historical accounts. It is a landscape rather than a managed attraction, so a good visit depends on choosing a safe, accessible bank with local guidance.",
    history:
      "The river shaped settlement and agricultural life in the district, and older accounts describe it as a significant navigable waterway. Siltation and changing flow have altered its character, but it remains part of Meherpur’s physical and cultural geography.",
    duration: "45–90 minutes",
    durationHours: 1,
    bestTime: "Late afternoon to sunset",
    bestSeason: "Post-monsoon for greener banks; winter for comfortable walking",
    gettingThere:
      "Ask a trusted local resident or driver for a safe public riverside point near your route. Do not rely on a single map pin for the entire river.",
    visitorNote:
      "Avoid steep, muddy or isolated banks, especially after rain. Do not swim without local safety knowledge and never approach the edge after dark.",
    mapQuery: "Bhairab River, Mujibnagar, Meherpur, Bangladesh",
    gallery: [
      {
        url: fallbackImage,
        alt: "Water and green agricultural landscape in Meherpur District",
        credit: "Ashikul Islam Anik / Wikimedia Commons",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Natural_Landscape_of_Meherpur_District%2C_Bangladesh_%282025%29.jpg/3840px-Natural_Landscape_of_Meherpur_District%2C_Bangladesh_%282025%29.jpg",
        alt: "Water and green landscape in Meherpur District",
        credit: "Ashikul Islam Anik / Wikimedia Commons",
      },
      {
        url: "https://www.womenscorner.com.bd/media/imgAll/2020January/meherpur-20200704101110.jpg",
        alt: "Aerial view of Meherpur agricultural land and water",
        credit: "Women's Corner Bangladesh",
      },
    ],
    highlights: [
      {
        name: "Riverside Landscape",
        bangla: "নদীপাড়ের দৃশ্য",
        description:
          "Fields, palms and settlements create a quiet western Bangladesh landscape along accessible stretches of the river.",
      },
      {
        name: "Agricultural Connection",
        bangla: "কৃষির সঙ্গে সম্পর্ক",
        description:
          "The river belongs to the same fertile system that supports Meherpur’s farms, orchards and rural communities.",
      },
      {
        name: "Evening Light",
        bangla: "বিকেলের আলো",
        description:
          "Late afternoon is usually the most comfortable and visually rewarding time for a careful riverside pause.",
      },
      {
        name: "Local Guidance",
        bangla: "স্থানীয় নির্দেশনা",
        description:
          "Access changes between villages, seasons and river conditions. A local recommendation is more useful than a generic pin.",
      },
    ],
    sourceLabel: "Meherpur District river profile",
    sourceUrl: "https://meherpur.gov.bd/pages/static-pages/6980f6a6a31054345f1cfbe3",
    tags: ["River", "Landscape", "Sunset", "Local life"],
  },
];

export const placeBySlug = (slug: string) => places.find((place) => place.slug === slug);

export const categories = ["All", "History", "Heritage", "Nature", "Agriculture"] as const;
