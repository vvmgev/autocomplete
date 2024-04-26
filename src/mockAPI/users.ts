const users = [
  {
    id: 1,
    name: "Terry Medhurst",
  },
  {
    id: 2,
    name: "Sheldon Quigley",
  },
  {
    id: 3,
    name: "Terrill Hills",
  },
  {
    id: 4,
    name: "Miles Cummerata",
  },
  {
    id: 5,
    name: "Mavis Schultz",
  },
  {
    id: 6,
    name: "Alison Reichert",
  },
  {
    id: 7,
    name: "Oleta Abbott",
  },
  {
    id: 8,
    name: "Ewell Mueller",
  },
  {
    id: 9,
    name: "Demetrius Corkery",
  },
  {
    id: 10,
    name: "Eleanora Price",
  },
  {
    id: 11,
    name: "Marcel Jones",
  },
  {
    id: 12,
    name: "Assunta Rath",
  },
  {
    id: 13,
    name: "Trace Douglas",
  },
  {
    id: 14,
    name: "Enoch Lynch",
  },
  {
    id: 15,
    name: "Jeanne Halvorson",
  },
  {
    id: 16,
    name: "Trycia Fadel",
  },
  {
    id: 17,
    name: "Bradford Prohaska",
  },
  {
    id: 18,
    name: "Arely Skiles",
  },
  {
    id: 19,
    name: "Gust Purdy",
  },
  {
    id: 20,
    name: "Lenna Renner",
  },
  {
    id: 21,
    name: "Doyle Ernser",
  },
  {
    id: 22,
    name: "Tressa Weber",
  },
  {
    id: 23,
    name: "Felicity O'Reilly",
  },
  {
    id: 24,
    name: "Jocelyn Schuster",
  },
  {
    id: 25,
    name: "Edwina Ernser",
  },
  {
    id: 26,
    name: "Griffin Braun",
  },
  {
    id: 27,
    name: "Piper Schowalter",
  },
  {
    id: 28,
    name: "Kody Terry",
  },
  {
    id: 29,
    name: "Macy Greenfelder",
  },
  {
    id: 30,
    name: "Maurine Stracke",
  },
];

export const fetchUsers = (value: string): any => {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    setTimeout(
      resolve,
      delay,
      users.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()))
    );
  });
};
