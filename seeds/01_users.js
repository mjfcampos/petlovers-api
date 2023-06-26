/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      first_name: "Alice",
      last_name: "Smith",
      birth_date: "1992-09-10",
      address: "456 Elm St, Canada",
      city: "Vancouver, Canada",
      country: "Canada",
      email: "alice@example.com",
      phone: "987-654-3210, Canada",
      bio: "I have a deep affection for pets and enjoy their company.",
      type: "client",
    },
    {
      id: 2,
      first_name: "Bob",
      last_name: "Johnson",
      birth_date: "1985-07-22",
      address: "789 Oak St, Canada",
      city: "Toronto, Canada",
      country: "Canada",
      email: "bob@example.com",
      phone: "123-456-7890, Canada",
      bio: "Pets bring immense joy to my life, and I cannot imagine a world without them.",
      type: "client",
    },
    {
      id: 3,
      first_name: "Emma",
      last_name: "Brown",
      birth_date: "1991-04-05",
      address: "123 Pine St, Canada",
      city: "Montreal, Canada",
      country: "Canada",
      email: "emma@example.com",
      phone: "987-654-3210, Canada",
      bio: "My love for pets knows no bounds, and I am happiest when surrounded by them.",
      type: "client",
    },
    {
      id: 4,
      first_name: "David",
      last_name: "Wilson",
      birth_date: "1988-12-18",
      address: "456 Maple Ave, Canada",
      city: "Calgary, Canada",
      country: "Canada",
      email: "david@example.com",
      phone: "123-456-7890, Canada",
      bio: "Being around pets fills my heart with joy and makes life more meaningful.",
      type: "client",
    },
    {
      id: 5,
      first_name: "Olivia",
      last_name: "Lee",
      birth_date: "1995-02-28",
      address: "789 Elmwood Ave, Canada",
      city: "Winnipeg, Canada",
      country: "Canada",
      email: "olivia@example.com",
      phone: "987-654-3210, Canada",
      bio: "Pets have a special place in my heart, and I cherish every moment spent with them.",
      type: "client",
    },
    {
      id: 6,
      first_name: "Liam",
      last_name: "Garcia",
      birth_date: "1987-11-15",
      address: "123 Oak St, Canada",
      city: "Halifax, Canada",
      country: "Canada",
      email: "liam@example.com",
      phone: "123-456-7890, Canada",
      bio: "Pets bring an unparalleled level of happiness into my life, and I cannot imagine living without them.",
      type: "client",
    },
    {
      id: 7,
      first_name: "Sophia",
      last_name: "Martinez",
      birth_date: "1994-06-02",
      address: "456 Pine St, Canada",
      city: "Victoria, Canada",
      country: "Canada",
      email: "sophia@example.com",
      phone: "987-654-3210, Canada",
      bio: "My love for pets is boundless, and their presence fills my life with joy.",
      type: "client",
    },
    {
      id: 8,
      first_name: "Noah",
      last_name: "Lopez",
      birth_date: "1990-09-25",
      address: "789 Maple Ave, Canada",
      city: "Ottawa, Canada",
      country: "Canada",
      email: "noah@example.com",
      phone: "123-456-7890, Canada",
      bio: "Pets have a special place in my heart, and I am grateful for the love they bring into my life.",
      type: "client",
    },
    {
      id: 9,
      first_name: "Ava",
      last_name: "Gonzalez",
      birth_date: "1993-03-11",
      address: "123 Elmwood Ave, Canada",
      city: "Edmonton, Canada",
      country: "Canada",
      email: "ava@example.com",
      phone: "987-654-3210, Canada",
      bio: "I am a firm believer in the healing power of pets and the unconditional love they offer.",
      type: "client",
    },
    {
      id: 10,
      first_name: "William",
      last_name: "Rodriguez",
      birth_date: "1989-08-08",
      address: "456 Oak St, Canada",
      city: "Quebec City, Canada",
      country: "Canada",
      email: "william@example.com",
      phone: "123-456-7890, Canada",
      bio: "Pets have the ability to bring immense joy and make life more meaningful.",
      type: "client",
    },
    {
      id: 11,
      first_name: "Isabella",
      last_name: "Taylor",
      birth_date: "1997-01-19",
      address: "789 Pine St, Canada",
      city: "Regina, Canada",
      country: "Canada",
      email: "isabella@example.com",
      phone: "987-654-3210, Canada",
      bio: "The love I have for pets is immeasurable, and they bring immense happiness into my life.",
      type: "client",
    },
    {
      id: 12,
      first_name: "James",
      last_name: "Anderson",
      birth_date: "1992-04-30",
      address: "123 Maple Ave, Canada",
      city: "Saskatoon, Canada",
      country: "Canada",
      email: "james@example.com",
      phone: "123-456-7890, Canada",
      bio: "Pets have an extraordinary ability to touch our lives and make them better.",
      type: "client",
    },
    {
      id: 13,
      first_name: "Charlotte",
      last_name: "Walker",
      birth_date: "1986-12-05",
      address: "456 Elmwood Ave, Canada",
      city: "Halifax, Canada",
      country: "Canada",
      email: "charlotte@example.com",
      phone: "987-654-3210, Canada",
      bio: "My heart is filled with love for pets, and I cherish every moment spent with them.",
      type: "client",
    },
    {
      id: 14,
      first_name: "Benjamin",
      last_name: "Perez",
      birth_date: "1995-03-27",
      address: "789 Oak St, Canada",
      city: "Vancouver, Canada",
      country: "Canada",
      email: "benjamin@example.com",
      phone: "123-456-7890, Canada",
      bio: "Pets bring immense joy and happiness into my life, and I cannot imagine living without them.",
      type: "client",
    },
    {
      id: 15,
      first_name: "Mia",
      last_name: "Scott",
      birth_date: "1991-07-14",
      address: "123 Pine St, Canada",
      city: "Toronto, Canada",
      country: "Canada",
      email: "mia@example.com",
      phone: "987-654-3210, Canada",
      bio: "Pets hold a special place in my heart, and their love and companionship are truly invaluable.",
      type: "client",
    },

    {
      id: 16,
      first_name: "Emily",
      last_name: "Wilson",
      birth_date: "1993-08-20",
      address: "123 Elm St, Canada",
      city: "Toronto, Canada",
      country: "Canada",
      email: "emily@example.com",
      phone: "123-456-7890, Canada",
      bio: "Pets have always held a special place in my heart, and I enjoy caring for them.",
      type: "provider",
    },
    {
      id: 17,
      first_name: "Daniel",
      last_name: "Lopez",
      birth_date: "1990-06-12",
      address: "456 Oak St, Canada",
      city: "Vancouver, Canada",
      country: "Canada",
      email: "daniel@example.com",
      phone: "987-654-3210, Canada",
      bio: "I have a deep passion for animals, and I provide top-quality care for pets.",
      type: "provider",
    },
    {
      id: 18,
      first_name: "Grace",
      last_name: "Garcia",
      birth_date: "1995-04-25",
      address: "789 Pine St, Canada",
      city: "Montreal, Canada",
      country: "Canada",
      email: "grace@example.com",
      phone: "123-456-7890, Canada",
      bio: "Pets bring joy and happiness into my life, and I love taking care of them.",
      type: "provider",
    },
    {
      id: 19,
      first_name: "Jacob",
      last_name: "Martinez",
      birth_date: "1988-12-02",
      address: "123 Maple Ave, Canada",
      city: "Calgary, Canada",
      country: "Canada",
      email: "jacob@example.com",
      phone: "987-654-3210, Canada",
      bio: "I am dedicated to providing the best care for pets and ensuring their well-being.",
      type: "provider",
    },
    {
      id: 20,
      first_name: "Chloe",
      last_name: "Brown",
      birth_date: "1991-10-17",
      address: "456 Elmwood Ave, Canada",
      city: "Winnipeg, Canada",
      country: "Canada",
      email: "chloe@example.com",
      phone: "123-456-7890, Canada",
      bio: "Pets hold a special place in my heart, and I am committed to their happiness and health.",
      type: "provider",
    },
    {
      id: 21,
      first_name: "Samuel",
      last_name: "Anderson",
      birth_date: "1986-07-08",
      address: "789 Oak St, Canada",
      city: "Halifax, Canada",
      country: "Canada",
      email: "samuel@example.com",
      phone: "987-654-3210, Canada",
      bio: "Providing care and love to pets is my passion, and I am dedicated to their well-being.",
      type: "provider",
    },
    {
      id: 22,
      first_name: "Lily",
      last_name: "Rodriguez",
      birth_date: "1994-03-16",
      address: "123 Pine St, Canada",
      city: "Victoria, Canada",
      country: "Canada",
      email: "lily@example.com",
      phone: "123-456-7890, Canada",
      bio: "Pets bring immense joy to my life, and I take pride in offering quality care for them.",
      type: "provider",
    },
    {
      id: 23,
      first_name: "Matthew",
      last_name: "Lee",
      birth_date: "1992-01-29",
      address: "456 Maple Ave, Canada",
      city: "Ottawa, Canada",
      country: "Canada",
      email: "matthew@example.com",
      phone: "987-654-3210, Canada",
      bio: "I have a genuine love for animals, and I provide compassionate care for pets.",
      type: "provider",
    },
    {
      id: 24,
      first_name: "Avery",
      last_name: "Taylor",
      birth_date: "1996-11-14",
      address: "789 Elmwood Ave, Canada",
      city: "Edmonton, Canada",
      country: "Canada",
      email: "avery@example.com",
      phone: "123-456-7890, Canada",
      bio: "Caring for pets is not just a job for me; it's a passion that brings me joy.",
      type: "provider",
    },
    {
      id: 25,
      first_name: "Olivia",
      last_name: "Harris",
      birth_date: "1993-09-22",
      address: "123 Oak St, Canada",
      city: "Quebec City, Canada",
      country: "Canada",
      email: "olivia@example.com",
      phone: "987-654-3210, Canada",
      bio: "I believe in the power of pets to bring happiness and love, and I provide excellent care for them.",
      type: "provider",
    },
    {
      id: 26,
      first_name: "Logan",
      last_name: "Clark",
      birth_date: "1990-05-10",
      address: "456 Pine St, Canada",
      city: "Regina, Canada",
      country: "Canada",
      email: "logan@example.com",
      phone: "123-456-7890, Canada",
      bio: "Pets have a special place in my heart, and I am committed to their well-being and happiness.",
      type: "provider",
    },
    {
      id: 27,
      first_name: "Sophia",
      last_name: "Lewis",
      birth_date: "1987-03-18",
      address: "789 Maple Ave, Canada",
      city: "Saskatoon, Canada",
      country: "Canada",
      email: "sophia@example.com",
      phone: "987-654-3210, Canada",
      bio: "Providing love and care for pets is not just a job for me; it's my passion and purpose.",
      type: "provider",
    },
    {
      id: 28,
      first_name: "Jack",
      last_name: "Walker",
      birth_date: "1994-02-04",
      address: "123 Elm St, Canada",
      city: "Halifax, Canada",
      country: "Canada",
      email: "jack@example.com",
      phone: "123-456-7890, Canada",
      bio: "I have a deep understanding of the needs of pets and provide them with the love and care they deserve.",
      type: "provider",
    },
    {
      id: 29,
      first_name: "Ava",
      last_name: "Perez",
      birth_date: "1991-12-09",
      address: "456 Oak St, Canada",
      city: "Victoria, Canada",
      country: "Canada",
      email: "ava@example.com",
      phone: "987-654-3210, Canada",
      bio: "Pets enrich our lives in countless ways, and I am dedicated to providing them with the best care possible.",
      type: "provider",
    },
    {
      id: 30,
      first_name: "Lucas",
      last_name: "Robinson",
      birth_date: "1986-10-06",
      address: "789 Pine St, Canada",
      city: "Winnipeg, Canada",
      country: "Canada",
      email: "lucas@example.com",
      phone: "123-456-7890, Canada",
      bio: "Pets bring joy and happiness into my life, and I am committed to providing them with exceptional care.",
      type: "provider",
    },
    {
      id: 31,
      first_name: "Mia",
      last_name: "Gonzalez",
      birth_date: "1993-08-23",
      address: "123 Maple Ave, Canada",
      city: "Calgary, Canada",
      country: "Canada",
      email: "mia@example.com",
      phone: "987-654-3210, Canada",
      bio: "I have a genuine love for animals, and I provide them with the care and attention they deserve.",
      type: "provider",
    },
    {
      id: 32,
      first_name: "Benjamin",
      last_name: "Hall",
      birth_date: "1988-06-30",
      address: "456 Elmwood Ave, Canada",
      city: "Montreal, Canada",
      country: "Canada",
      email: "benjamin@example.com",
      phone: "123-456-7890, Canada",
      bio: "Pets bring immense joy and happiness into my life, and I cannot imagine living without them.",
      type: "provider",
    },
    {
      id: 33,
      first_name: "Aria",
      last_name: "Young",
      birth_date: "1995-04-11",
      address: "789 Oak St, Canada",
      city: "Vancouver, Canada",
      country: "Canada",
      email: "aria@example.com",
      phone: "987-654-3210, Canada",
      bio: "Pets hold a special place in my heart, and their love and companionship are truly invaluable.",
      type: "provider",
    },
    {
      id: 34,
      first_name: "James",
      last_name: "Hernandez",
      birth_date: "1992-02-19",
      address: "123 Pine St, Canada",
      city: "Toronto, Canada",
      country: "Canada",
      email: "james@example.com",
      phone: "123-456-7890, Canada",
      bio: "I have a deep love for animals, and I provide them with the utmost care and attention.",
      type: "provider",
    },
    {
      id: 35,
      first_name: "Ella",
      last_name: "King",
      birth_date: "1989-12-07",
      address: "456 Maple Ave, Canada",
      city: "Ottawa, Canada",
      country: "Canada",
      email: "ella@example.com",
      phone: "987-654-3210, Canada",
      bio: "Caring for pets is my passion, and I ensure they receive the love and care they deserve.",
      type: "provider",
    },
    {
      id: 36,
      first_name: "William",
      last_name: "Scott",
      birth_date: "1996-10-25",
      address: "789 Elmwood Ave, Canada",
      city: "Edmonton, Canada",
      country: "Canada",
      email: "william@example.com",
      phone: "123-456-7890, Canada",
      bio: "Pets have a special place in my heart, and I am dedicated to providing them with the best care possible.",
      type: "provider",
    },
    {
      id: 37,
      first_name: "Victoria",
      last_name: "Lopez",
      birth_date: "1993-08-14",
      address: "123 Oak St, Canada",
      city: "Quebec City, Canada",
      country: "Canada",
      email: "victoria@example.com",
      phone: "987-654-3210, Canada",
      bio: "I have a deep love and respect for pets, and I am committed to their well-being and happiness.",
      type: "provider",
    },
    {
      id: 38,
      first_name: "Henry",
      last_name: "Adams",
      birth_date: "1990-06-01",
      address: "456 Pine St, Canada",
      city: "Regina, Canada",
      country: "Canada",
      email: "henry@example.com",
      phone: "123-456-7890, Canada",
      bio: "Caring for pets is not just a job for me; it's my passion and purpose in life.",
      type: "provider",
    },
    {
      id: 39,
      first_name: "Charlotte",
      last_name: "Lewis",
      birth_date: "1987-04-17",
      address: "789 Maple Ave, Canada",
      city: "Saskatoon, Canada",
      country: "Canada",
      email: "charlotte@example.com",
      phone: "987-654-3210, Canada",
      bio: "I believe in the unconditional love and companionship that pets provide, and I offer them the same in return.",
      type: "provider",
    },
    {
      id: 40,
      first_name: "Michael",
      last_name: "Hall",
      birth_date: "1994-03-05",
      address: "123 Elm St, Canada",
      city: "Halifax, Canada",
      country: "Canada",
      email: "michael@example.com",
      phone: "123-456-7890, Canada",
      bio: "I have a strong affinity for animals, and I strive to provide them with the best care and attention.",
      type: "provider",
    },
  ]);
};
