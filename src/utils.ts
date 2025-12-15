import type { Character } from "./components/types";

export const generateMockData = (): Character[] => {
  const names = [
    "Naruto",
    "Sasuke",
    "Sakura",
    "Kakashi",
    "Hinata",
    "Rock Lee",
    "Neji",
    "Tenten",
    "Gaara",
    "Temari",
    "Kankuro",
    "Shikamaru",
    "Ino",
    "Choji",
    "Kiba",
    "Shino",
    "Zabuza",
    "Haku",
    "Kisame",
    "Itachi",
    "Deidara",
    "Sasori",
    "Orochimaru",
    "Jiraiya",
    "Tsunade",
    "Minato",
    "Kushina",
    "Obito",
    "Rin",
    "Yamato",
    "Asuma",
    "Kurenai",
  ];
  const locations: Character["location"][] = [
    "Konoha",
    "Suna",
    "Kiri",
    "Iwa",
    "Kumo",
  ];
  const healthStates: Character["health"][] = [
    "Healthy",
    "Injured",
    "Critical",
  ];

  const characters: Character[] = [];
  for (let i = 0; i < 1000; i++) {
    characters.push({
      id: `char_${i}_${Math.random().toString(36).substr(2, 9)}`,
      name: `${names[i % names.length]} ${
        Math.floor(i / names.length) > 0 ? Math.floor(i / names.length) : ""
      }`.trim(),
      location: locations[Math.floor(Math.random() * locations.length)],
      health: healthStates[Math.floor(Math.random() * healthStates.length)],
      power: Math.floor(Math.random() * (10000 - 100 + 1)) + 100,
    });
  }
  return characters;
};

export const getHealthBadgeColor = (health: Character["health"]) => {
  switch (health) {
    case "Healthy":
      return "glass-badge-healthy";
    case "Injured":
      return "glass-badge-injured";
    case "Critical":
      return "glass-badge-critical";
  }
};
