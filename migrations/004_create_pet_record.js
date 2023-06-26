/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("pet_record", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .references("users.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("booking_id")
      .unsigned()
      .references("bookings.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("pet_id")
      .unsigned()
      .references("pets.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("note").notNullable();
    table.integer("rate").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("pet_record");
};
