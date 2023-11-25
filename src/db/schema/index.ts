import { InferModel } from 'drizzle-orm';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const events = sqliteTable('events', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
});

// export const items = sqliteTable('events', {
//   id: text('id').primaryKey(),
//   title: text('title').notNull(),
//   amount: text('description'),
// });

export type Note = InferModel<typeof events>;
