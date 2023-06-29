/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user_services").del();
  await knex("user_services").insert([
    {
      id: 1,
      user_id: 32,
      service_id: 4,
    },
    {
      id: 2,
      user_id: 29,
      service_id: 7,
    },
    {
      id: 3,
      user_id: 18,
      service_id: 2,
    },
    {
      id: 4,
      user_id: 34,
      service_id: 9,
    },
    {
      id: 5,
      user_id: 40,
      service_id: 1,
    },
    {
      id: 6,
      user_id: 24,
      service_id: 8,
    },
    {
      id: 7,
      user_id: 39,
      service_id: 6,
    },
    {
      id: 8,
      user_id: 20,
      service_id: 5,
    },
    {
      id: 9,
      user_id: 27,
      service_id: 10,
    },
    {
      id: 10,
      user_id: 16,
      service_id: 3,
    },
    {
      id: 11,
      user_id: 17,
      service_id: 7,
    },
    {
      id: 12,
      user_id: 25,
      service_id: 2,
    },
    {
      id: 13,
      user_id: 37,
      service_id: 9,
    },
    {
      id: 14,
      user_id: 38,
      service_id: 10,
    },
    {
      id: 15,
      user_id: 28,
      service_id: 8,
    },
    {
      id: 16,
      user_id: 19,
      service_id: 6,
    },
    {
      id: 17,
      user_id: 30,
      service_id: 4,
    },
    {
      id: 18,
      user_id: 35,
      service_id: 5,
    },
    {
      id: 19,
      user_id: 36,
      service_id: 10,
    },
    {
      id: 20,
      user_id: 21,
      service_id: 3,
    },
    {
      id: 21,
      user_id: 32,
      service_id: 7,
    },
    {
      id: 22,
      user_id: 39,
      service_id: 2,
    },
    {
      id: 23,
      user_id: 22,
      service_id: 9,
    },
    {
      id: 24,
      user_id: 16,
      service_id: 1,
    },
    {
      id: 25,
      user_id: 26,
      service_id: 8,
    },
    {
      id: 26,
      user_id: 34,
      service_id: 6,
    },
    {
      id: 27,
      user_id: 23,
      service_id: 5,
    },
    {
      id: 28,
      user_id: 40,
      service_id: 5,
    },
    {
      id: 29,
      user_id: 17,
      service_id: 3,
    },
    {
      id: 30,
      user_id: 19,
      service_id: 7,
    },
    {
      id: 31,
      user_id: 25,
      service_id: 2,
    },
    {
      id: 32,
      user_id: 36,
      service_id: 9,
    },
    {
      id: 33,
      user_id: 38,
      service_id: 9,
    },
    {
      id: 34,
      user_id: 27,
      service_id: 8,
    },
    {
      id: 35,
      user_id: 21,
      service_id: 6,
    },
    {
      id: 36,
      user_id: 30,
      service_id: 4,
    },
    {
      id: 37,
      user_id: 35,
      service_id: 5,
    },
    {
      id: 38,
      user_id: 16,
      service_id: 10,
    },
    {
      id: 39,
      user_id: 17,
      service_id: 3,
    },
    {
      id: 40,
      user_id: 22,
      service_id: 7,
    },
    {
      id: 41,
      user_id: 32,
      service_id: 2,
    },
    {
      id: 42,
      user_id: 33,
      service_id: 9,
    },
    {
      id: 43,
      user_id: 36,
      service_id: 1,
    },
    {
      id: 44,
      user_id: 24,
      service_id: 8,
    },
    {
      id: 45,
      user_id: 25,
      service_id: 6,
    },
    {
      id: 46,
      user_id: 20,
      service_id: 5,
    },
    {
      id: 47,
      user_id: 40,
      service_id: 7,
    },
    {
      id: 48,
      user_id: 17,
      service_id: 3,
    },
    {
      id: 49,
      user_id: 19,
      service_id: 7,
    },
    {
      id: 50,
      user_id: 22,
      service_id: 2,
    },
    {
      id: 51,
      user_id: 37,
      service_id: 7,
    },
    {
      id: 52,
      user_id: 38,
      service_id: 1,
    },
    {
      id: 53,
      user_id: 28,
      service_id: 8,
    },
    {
      id: 54,
      user_id: 34,
      service_id: 6,
    },
    {
      id: 55,
      user_id: 21,
      service_id: 5,
    },
    {
      id: 56,
      user_id: 40,
      service_id: 5,
    },
    {
      id: 57,
      user_id: 16,
      service_id: 3,
    },
    {
      id: 58,
      user_id: 18,
      service_id: 7,
    },
    {
      id: 59,
      user_id: 26,
      service_id: 2,
    },
    {
      id: 60,
      user_id: 30,
      service_id: 9,
    },
    {
      id: 61,
      user_id: 36,
      service_id: 1,
    },
    {
      id: 62,
      user_id: 24,
      service_id: 8,
    },
    {
      id: 63,
      user_id: 27,
      service_id: 6,
    },
    {
      id: 64,
      user_id: 20,
      service_id: 5,
    },
    {
      id: 65,
      user_id: 40,
      service_id: 3,
    },
    {
      id: 66,
      user_id: 17,
      service_id: 3,
    },
    {
      id: 67,
      user_id: 19,
      service_id: 7,
    },
    {
      id: 68,
      user_id: 22,
      service_id: 2,
    },
    {
      id: 69,
      user_id: 32,
      service_id: 9,
    },
    {
      id: 70,
      user_id: 39,
      service_id: 1,
    },
    {
      id: 71,
      user_id: 28,
      service_id: 8,
    },
    {
      id: 72,
      user_id: 34,
      service_id: 6,
    },
    {
      id: 73,
      user_id: 21,
      service_id: 5,
    },
    {
      id: 74,
      user_id: 40,
      service_id: 2,
    },
    {
      id: 75,
      user_id: 16,
      service_id: 3,
    },
    {
      id: 76,
      user_id: 18,
      service_id: 7,
    },
    {
      id: 77,
      user_id: 26,
      service_id: 2,
    },
    {
      id: 78,
      user_id: 30,
      service_id: 9,
    },
    {
      id: 79,
      user_id: 35,
      service_id: 1,
    },
    {
      id: 80,
      user_id: 24,
      service_id: 8,
    },
    {
      id: 81,
      user_id: 27,
      service_id: 6,
    },
    {
      id: 82,
      user_id: 20,
      service_id: 5,
    },
    {
      id: 83,
      user_id: 40,
      service_id: 9,
    },
    {
      id: 84,
      user_id: 17,
      service_id: 3,
    },
    {
      id: 85,
      user_id: 19,
      service_id: 7,
    },
    {
      id: 86,
      user_id: 22,
      service_id: 2,
    },
    {
      id: 87,
      user_id: 32,
      service_id: 9,
    },
    {
      id: 88,
      user_id: 36,
      service_id: 1,
    },
    {
      id: 89,
      user_id: 24,
      service_id: 8,
    },
    {
      id: 90,
      user_id: 27,
      service_id: 6,
    },
    {
      id: 91,
      user_id: 20,
      service_id: 5,
    },
    {
      id: 92,
      user_id: 40,
      service_id: 8,
    },
    {
      id: 93,
      user_id: 16,
      service_id: 3,
    },
    {
      id: 94,
      user_id: 18,
      service_id: 7,
    },
    {
      id: 95,
      user_id: 26,
      service_id: 2,
    },
    {
      id: 96,
      user_id: 30,
      service_id: 9,
    },
    {
      id: 97,
      user_id: 35,
      service_id: 1,
    },
    {
      id: 98,
      user_id: 37,
      service_id: 8,
    },
    {
      id: 99,
      user_id: 23,
      service_id: 6,
    },
    {
      id: 100,
      user_id: 16,
      service_id: 5,
    },
  ]);
};
