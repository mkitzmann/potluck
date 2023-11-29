import {InferModel, relations} from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const events = sqliteTable('events', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
});
export const eventsRelations = relations(events, ({many}) => ({
	items: many(items)
}))

export const items = sqliteTable('items', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  amount: integer('amount'),
	event: text('event_id')
});

export const itemsRelations = relations(items, ({one}) => ({
	event: one(events, {
		fields: [items.event],
		references: [events.id]
	})
}))


export type Events = InferModel<typeof events>;
export type Items = InferModel<typeof items>;
