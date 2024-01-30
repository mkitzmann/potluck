import { InferModel, relations } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const event = sqliteTable("event", {
  id: text("id").primaryKey(),
  admin: text("admin_id"),
  title: text("title").notNull(),
  description: text("description"),
});

export const eventRelations = relations(event, ({ many }) => ({
  items: many(item),
}));

export const item = sqliteTable("item", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  amount: integer("amount"),
  event: text("event_id"),
});

export const itemsRelations = relations(item, ({ one }) => ({
  event: one(event, {
    fields: [item.event],
    references: [event.id],
  }),
}));

export const participant = sqliteTable("participant", {
  id: text("id").primaryKey(),
  event: text("event_id"),
  items: text("participant_item_id"),
});

export const participantRelations = relations(participant, ({ one, many }) => ({
  event: one(event, {
    fields: [participant.event],
    references: [event.id],
  }),
  items: many(participantItem),
}));

export const participantItem = sqliteTable("participant_item", {
  amount: integer("amount"),
  participant: text("participant_id"),
  item: text("item_id"),
});

export const participantItemRelations = relations(
  participantItem,
  ({ one }) => ({
    participant: one(event, {
      fields: [participantItem.participant],
      references: [participant.id],
    }),
    item: one(event, {
      fields: [participantItem.item],
      references: [item.id],
    }),
  }),
);

export type Event = InferModel<typeof event> & {
  items: Item[];
};
export type Item = InferModel<typeof item>;
export type Participant = InferModel<typeof participant>;
export type ParticipantItem = InferModel<typeof participantItem>;
