import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const books = pgTable('books', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  author: text('author'),
  category: text('category').notNull(), // 'mindset' | 'fiction'
  status: text('status').notNull(),     // 'read' | 'reading' | 'to_read'
  createdAt: timestamp('created_at').defaultNow(),
});

export type Book = typeof books.$inferSelect;
