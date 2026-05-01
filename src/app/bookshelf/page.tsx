import type { Metadata } from 'next';
import BookshelfClient from '@/components/BookshelfClient';
import type { Book } from '../../../lib/schema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Bookshelf \u2014 Tomisin Leshi',
};

async function getBooks(): Promise<Book[]> {
  try {
    const { db } = await import('../../../lib/db');
    const { books } = await import('../../../lib/schema');
    const { asc } = await import('drizzle-orm');
    return await db.select().from(books).orderBy(asc(books.title));
  } catch (error) {
    console.error('Failed to fetch books:', error);
    return [];
  }
}

export default async function BookshelfPage() {
  const books = await getBooks();

  return (
    <div>
      {/* Header */}
      <h1 className="text-[1.5rem] font-normal text-[#343D4D] dark:text-[#F5F0E8] mb-1">
        Bookshelf
      </h1>
      <p className="text-[15px] text-[#9CA3AF] mb-1">
        108 finished. 77 queued. Reading is how I build the model.
      </p>
      <p className="text-[15px] text-[#9CA3AF] mb-8">
        Books I&apos;ve read, and books I intend to.
      </p>

      <BookshelfClient books={books} />
    </div>
  );
}
