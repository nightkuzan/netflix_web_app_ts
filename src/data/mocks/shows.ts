import { Show } from "@/domain/entities/Show";

export const shows: Show[] = [
  {
    id: "1",
    title: "The Dark Knight",
    description:
      "Batman faces a new enemy, the Joker, who is causing havoc in Gotham City.",
    posterUrl:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    backdropUrl:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    type: "movie",
    genres: ["Action", "Crime", "Drama"],
    releaseYear: 2008,
    rating: 9.0,
    duration: "2h 32m",
    language: "en",
    translations: {
      es: {
        title: "El Caballero Oscuro",
        description:
          "Batman se enfrenta a un nuevo enemigo, el Joker, que está causando estragos en Ciudad Gotham.",
      },
      fr: {
        title: "Le Chevalier Noir",
        description:
          "Batman affronte un nouvel ennemi, le Joker, qui sème le chaos à Gotham City.",
      },
    },
  },
  {
    id: "2",
    title: "Inception",
    description:
      "A thief who enters the dreams of others to steal their secrets from their subconscious.",
    posterUrl:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=925&q=80",
    backdropUrl:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=925&q=80",
    type: "movie",
    genres: ["Action", "Adventure", "Sci-Fi"],
    releaseYear: 2010,
    rating: 8.8,
    duration: "2h 28m",
    language: "en",
    translations: {
      es: {
        title: "Origen",
        description:
          "Un ladrón que entra en los sueños de otros para robar sus secretos del subconsciente.",
      },
      fr: {
        title: "Inception",
        description:
          "Un voleur qui entre dans les rêves des autres pour voler leurs secrets de leur subconscient.",
      },
    },
  },
  {
    id: "3",
    title: "Stranger Things",
    description:
      "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
    posterUrl:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    backdropUrl:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    type: "series",
    genres: ["Drama", "Fantasy", "Horror"],
    releaseYear: 2016,
    rating: 8.7,
    seasons: 4,
    language: "en",
    translations: {
      es: {
        title: "Stranger Things",
        description:
          "Cuando un niño desaparece, su madre, un jefe de policía y sus amigos deben enfrentarse a fuerzas sobrenaturales aterradoras para recuperarlo.",
      },
      fr: {
        title: "Stranger Things",
        description:
          "Quand un jeune garçon disparaît, sa mère, un chef de police et ses amis doivent affronter des forces surnaturelles terrifiantes pour le récupérer.",
      },
    },
  },
  {
    id: "4",
    title: "Breaking Bad",
    description:
      "A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family's financial future.",
    posterUrl:
      "https://images.unsplash.com/photo-1627873649417-c67f701f1949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    backdropUrl:
      "https://images.unsplash.com/photo-1627873649417-c67f701f1949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    type: "series",
    genres: ["Crime", "Drama", "Thriller"],
    releaseYear: 2008,
    rating: 9.5,
    seasons: 5,
    language: "en",
    translations: {
      es: {
        title: "Breaking Bad",
        description:
          "Un profesor de química de secundaria convertido en productor de metanfetamina se asocia con un ex alumno para asegurar el futuro financiero de su familia.",
      },
      fr: {
        title: "Breaking Bad",
        description:
          "Un professeur de chimie au lycée devenu producteur de méthamphétamine s'associe à un ancien élève pour assurer l'avenir financier de sa famille.",
      },
    },
  },
  {
    id: "5",
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterUrl:
      "https://images.unsplash.com/photo-1604975701397-6365ccbd028a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    backdropUrl:
      "https://images.unsplash.com/photo-1604975701397-6365ccbd028a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    type: "movie",
    genres: ["Drama"],
    releaseYear: 1994,
    rating: 9.3,
    duration: "2h 22m",
    language: "en",
    translations: {
      es: {
        title: "Cadena perpetua",
        description:
          "Dos hombres encarcelados establecen un vínculo a lo largo de varios años, encontrando consuelo y eventual redención a través de actos de decencia común.",
      },
      fr: {
        title: "Les Évadés",
        description:
          "Deux hommes emprisonnés se lient au fil des années, trouvant réconfort et rédemption éventuelle par des actes de décence commune.",
      },
    },
  },
  {
    id: "6",
    title: "The Witcher",
    description:
      "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    posterUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
    backdropUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
    type: "series",
    genres: ["Action", "Adventure", "Fantasy"],
    releaseYear: 2019,
    rating: 8.2,
    seasons: 2,
    language: "en",
    translations: {
      es: {
        title: "The Witcher",
        description:
          "Geralt de Rivia, un cazador de monstruos solitario, lucha por encontrar su lugar en un mundo donde las personas a menudo resultan más malvadas que las bestias.",
      },
      fr: {
        title: "The Witcher",
        description:
          "Geralt de Riv, un chasseur de monstres solitaire, peine à trouver sa place dans un monde où les humains s'avèrent souvent plus cruels que les bêtes.",
      },
    },
  },

  {
    id: "7",
    title: "Interstellar",
    description:
      "A group of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    posterUrl:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
    backdropUrl:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
    type: "movie",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    releaseYear: 2014,
    rating: 8.6,
    duration: "2h 49m",
    language: "en",
    translations: {
      es: {
        title: "Interestelar",
        description:
          "Un grupo de exploradores viaja a través de un agujero de gusano en el espacio para asegurar la supervivencia de la humanidad.",
      },
      fr: {
        title: "Interstellar",
        description:
          "Un groupe d'explorateurs voyage à travers un trou de ver dans l'espace pour assurer la survie de l'humanité.",
      },
    },
  },
  {
    id: "8",
    title: "Game of Thrones",
    description:
      "Nine noble families wage war against each other to gain control over the lands of Westeros.",
    posterUrl:
      "https://images.unsplash.com/photo-1604971924648-c3035c718b6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1025&q=80",
    backdropUrl:
      "https://images.unsplash.com/photo-1604971924648-c3035c718b6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1025&q=80",
    type: "series",
    genres: ["Action", "Adventure", "Drama"],
    releaseYear: 2011,
    rating: 9.2,
    seasons: 8,
    language: "en",
    translations: {
      es: {
        title: "Juego de Tronos",
        description:
          "Nueve familias nobles libran una guerra entre sí para controlar las tierras de Westeros.",
      },
      fr: {
        title: "Game of Thrones",
        description:
          "Neuf familles nobles se livrent une guerre pour prendre le contrôle des terres de Westeros.",
      },
    },
  },
  {
    id: "9",
    title: "Avatar: The Last Airbender",
    description:
      "A young boy must master all four elements and bring peace to a world divided by war.",
    posterUrl:
      "https://images.unsplash.com/photo-1558980664-10c2360b1b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
    backdropUrl:
      "https://images.unsplash.com/photo-1558980664-10c2360b1b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
    type: "series",
    genres: ["Animation", "Action", "Adventure"],
    releaseYear: 2005,
    rating: 9.3,
    seasons: 3,
    language: "en",
    translations: {
      es: {
        title: "Avatar: La Leyenda de Aang",
        description:
          "Un joven debe dominar los cuatro elementos y traer la paz a un mundo dividido por la guerra.",
      },
      fr: {
        title: "Avatar : Le Dernier Maître de l'air",
        description:
          "Un jeune garçon doit maîtriser les quatre éléments et ramener la paix dans un monde déchiré par la guerre.",
      },
    },
  },
];
