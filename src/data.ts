export type ImageProps = {
  imageIndex: number;
}

export type ImageObject = {
  readonly description: string;
  readonly url: string;
  readonly alt: string;
}

export type RecommendationObject = {
    readonly location: string;
    readonly recommendationReason: string;
}


export const imageList: ImageObject[] = [
  {
    description: "Bavarian Town",
    url: "/assets/img10.JPG",
    alt: "Bavarian Town",
  },
  {
    description: "Bavarian Village",
    url: "/assets/img8.JPG",
    alt: "Bavarian Village",
  },
  {
    description: "Bavarian Lake View",
    url: "/assets/img9.JPG",
    alt: "Bavarian Lake View",
  },
  {
    description: "Bavarian Palace Portal",
    url: "/assets/img7.JPG",
    alt: "Bavarian Palace Portal",
  },
  {
    description: "Bavarian Palace Statue",
    url: "/assets/img6.JPG",
    alt: "Bavarian Palace Statue",
  },
  {
    description: "Polish Palace",
    url: "/assets/img5.JPG",
    alt: "Polish Palace",
  },
  {
    description: "Caserta Palace Fountain",
    url: "/assets/img4.JPG",
    alt: "Caserta Palace Fountain",
  },
  {
    description: "Bavarian Church Ceiling",
    url: "/assets/img2.JPG",
    alt: "Bavarian Church Ceiling",
  },
  {
    description: "Bavarian Palace Garden",
    url: "/assets/img3.JPG",
    alt: "Bavarian Palace Garden",
  },
  {
    description: "Bavarian Palace Ceiling",
    url: "/assets/img1.JPG",
    alt: "Bavarian Palace Ceiling",
  },
  {
    description: "Zell Am See Sunflowers",
    url: "/assets/img12.JPG",
    alt: "Zell Am See Sunflowers",
  },
  {
    description: "Cefalu Sea View",
    url: "/assets/img13.JPG",
    alt: "Cefalu Sea View",
  },
  {
    description: "Cefalu Icecream",
    url: "/assets/img14.JPG",
    alt: "Cefalu Icecream",
  },
  {
    description: "Naples Viewpoint",
    url: "/assets/img15.JPG",
    alt: "Naples Viewpoint",
  },
  {
    description: "Cefalu Market",
    url: "/assets/img16.JPG",
    alt: "Cefalu Market",
  },
  {
    description: "Menton Spiral Staircase",
    url: "/assets/img17.JPG",
    alt: "Menton Spiral Staircase",
  },
  {
    description: "Maratea Rainbow",
    url: "/assets/img18.JPG",
    alt: "Maratea Rainbow",
  },
  {
    description: "Maratea Street",
    url: "/assets/img19.JPG",
    alt: "Maratea Street",
  },
  {
    description: "Menton Staircase",
    url: "/assets/img20.JPG",
    alt: "Menton Staircase",
  },
  {
    description: "Maratea Seafront",
    url: "/assets/img21.JPG",
    alt: "Maratea Seafront",
  },
  {
    description: "Naples Abbey",
    url: "/assets/img22.JPG",
    alt: "Naples Abbey",
  },
  {
    description: "Palermo Ceiling",
    url: "/assets/img23.JPG",
    alt: "Palermo Ceiling",
  },
  {
    description: "Naples Highway",
    url: "/assets/img24.JPG",
    alt: "Naples Highway",
  },
  {
    description: "Procida House",
    url: "/assets/img25.JPG",
    alt: "Procida House",
  },
  {
    description: "Sorrento Cloisters",
    url: "/assets/img26.JPG",
    alt: "Sorrento Cloisters",
  },
  {
    description: "Procida Street",
    url: "/assets/img27.JPG",
    alt: "Procida Street",
  },
  {
    description: "Bavarian palace",
    url: "/assets/img28.JPG",
    alt: "Menton Sidestreet",
  },
  {
    description: "Bavarian palace",
    url: "/assets/img29.JPG",
    alt: "Menton Sunset",
  },
  {
    description: "Menton Alley",
    url: "/assets/img30.JPG",
    alt: "Menton Alley",
  },
  {
    description: "Procida Harbour",
    url: "/assets/img31.JPG",
    alt: "Procida Harbour",
  },
  {
    description: "Cefalu Beach",
    url: "/assets/img33.JPG",
    alt: "Cefalu Beach",
  },
];

export const holidayRecommendations: RecommendationObject[] = [
  {
    location: "Murnau am Staffelsee, Bavière",
    recommendationReason:
      "Une ville pittoresque de Bavière offrant une architecture allemande traditionnelle, des rues charmantes et des vues paisibles sur le lac, idéale pour explorer et se détendre.",
  },
  {
    location: "Lac Tegernsee, Bavière",
    recommendationReason:
      "Des vues époustouflantes sur le lac entouré de montagnes, offrant de superbes opportunités pour la randonnée, le bateau et la connexion avec la nature dans un cadre paisible.",
  },
  {
    location: "Palais de Nymphenburg, Munich",
    recommendationReason:
      "Un grand palais riche en histoire, avec des jardins magnifiques, des statues majestueuses et une architecture complexe qui transporte les visiteurs dans le passé royal de la Bavière.",
  },
  {
    location: "Zell am See, Autriche",
    recommendationReason:
      "Une magnifique région alpine connue pour son lac superbe, ses champs de tournesols et sa proximité avec l'eau et les montagnes, parfaite pour un mélange de détente et d'aventure.",
  },
  {
    location: "Cefalù, Sicile",
    recommendationReason:
      "Une charmante ville côtière avec de belles vues sur la mer, de délicieuses glaces locales et un marché animé, en faisant un lieu idéal pour une escapade méditerranéenne ensoleillée.",
  },
  {
    location: "Maratea, Italie",
    recommendationReason:
      "Connue pour ses rues pittoresques, ses magnifiques vues arc-en-ciel et son front de mer splendide, Maratea offre un mélange unique de beauté naturelle et de charme italien.",
  },
  {
    location: "Naples, Italie",
    recommendationReason:
      "Avec des sites historiques comme l'Abbaye de Naples et des panoramas à couper le souffle, Naples offre un mélange vibrant d'histoire ancienne et de vie urbaine animée, avec des paysages époustouflants.",
  },
  {
    location: "Île de Procida, Italie",
    recommendationReason:
      "Cette île charmante présente des maisons colorées, des ports sereins et des rues tranquilles, offrant une expérience côtière italienne authentique loin des foules de touristes.",
  },
  {
    location: "Menton, France",
    recommendationReason:
      "Célèbre pour ses charmants escaliers en spirale et ses ruelles, Menton offre une retraite paisible sur la Côte d'Azur avec des couchers de soleil à couper le souffle et des chemins cachés à explorer.",
  },
  {
    location: "Sorrente, Italie",
    recommendationReason:
      "Connue pour ses cloîtres historiques et ses vues imprenables sur la baie de Naples, Sorrente allie culture et beauté panoramique, en faisant une destination incontournable.",
  },
];
