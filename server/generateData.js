import fs from "fs";

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
  "Might Guy",
  "Anko",
  "Iruka",
  "Konohamaru",
  "Hanabi",
  "Karin",
  "Suigetsu",
  "Jugo",
];

const locations = ["Konoha", "Suna", "Kiri", "Iwa", "Kumo"];
const healthStates = ["Healthy", "Injured", "Critical"];

function generateCharacters(count = 1000) {
  const characters = [];

  for (let i = 0; i < count; i++) {
    const nameSuffix =
      Math.floor(i / names.length) > 0
        ? ` ${Math.floor(i / names.length)}`
        : "";
    characters.push({
      id: `char_${i}_${Math.random().toString(36).substr(2, 9)}`,
      name: `${names[i % names.length]}${nameSuffix}`.trim(),
      location: locations[Math.floor(Math.random() * locations.length)],
      health: healthStates[Math.floor(Math.random() * healthStates.length)],
      power: Math.floor(Math.random() * (10000 - 100 + 1)) + 100,
    });
  }

  return characters;
}

const data = {
  characters: generateCharacters(1000),
};

fs.writeFileSync("server/db.json", JSON.stringify(data, null, 2));
console.log("✅ Generated db.json with 1000 characters");
