/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("services").del();
  await knex("services").insert([
    {
      id: 1,
      name: "Pet Grooming",
    },
    {
      id: 2,
      name: "Veterinarian",
    },
    {
      id: 3,
      name: "Dog Training",
    },
    {
      id: 4,
      name: "Pet Boarding",
    },
    {
      id: 5,
      name: "Pet Sitting",
    },
    {
      id: 6,
      name: "Dog Walking",
    },
    {
      id: 7,
      name: "Pet Photography",
    },
    {
      id: 8,
      name: "Pet Adoption",
    },
    {
      id: 9,
      name: "Mobile Veterinary Services",
    },
    {
      id: 10,
      name: "Pet Supplies Store",
    },
  ]);
};
