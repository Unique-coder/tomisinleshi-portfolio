'use client';

import { useState, useMemo } from 'react';
import type { Book } from '../../lib/schema';

type Category = 'all' | 'mindset' | 'fiction';
type StatusFilter = 'all' | 'read' | 'reading' | 'to_read';
type SortBy = 'title' | 'author';
type ActiveFilter = null | 'finished' | 'reading' | 'to_read';

interface BookshelfClientProps {
  books: Book[];
}

const CURATED_FINISHED = [
  'Sapiens',
  '21 Lessons of the 21st Century',
  'Blink',
  'The Almanack of Naval Ravikant',
  'Zero to One',
  'Thinking Fast and Slow',
  '48 Laws of Power',
  'Ego is the Enemy',
  'Origin',
  'Master of the Game',
  'Memory Man',
  'Those in Peril',
];

const CURATED_TO_READ = [
  'The Count of Monte Cristo',
  'Principles',
  'The Hard Thing About Hard Things',
  'Shoe Dog',
  'The Fountainhead',
  'Good to Great',
];

const ITEMS_PER_PAGE = 20;

function getLastName(author: string | null): string {
  if (!author) return '';
  const parts = author.trim().split(' ');
  return parts[parts.length - 1];
}

function StatusDot({ status }: { status: string }) {
  if (status === 'read') {
    return <span className="text-[8px] text-[#343D4D] dark:text-[#F5F0E8] mr-3 leading-none flex-shrink-0 mt-[3px]">●</span>;
  }
  if (status === 'reading') {
    return <span className="text-[8px] text-[#9CA3AF] mr-3 leading-none flex-shrink-0 mt-[3px]">◑</span>;
  }
  return <span className="text-[8px] text-[#9CA3AF] mr-3 leading-none flex-shrink-0 mt-[3px]">○</span>;
}

function BookRow({ book }: { book: Book }) {
  return (
    <div className="flex items-baseline py-[6px] border-b border-[var(--border)] last:border-0">
      <StatusDot status={book.status} />
      <span className="text-[15px] text-[#343D4D] dark:text-[#F5F0E8]">{book.title}</span>
      {book.author && (
        <>
          <span className="text-[15px] text-[#9CA3AF] mx-1">·</span>
          <span className="text-[14px] text-[#9CA3AF]">{book.author}</span>
        </>
      )}
    </div>
  );
}

function FilterBtn({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-[11px] tracking-widest uppercase transition-colors ${
        active
          ? 'text-[#343D4D] dark:text-[#F5F0E8] font-semibold'
          : 'text-[#9CA3AF] hover:text-[#343D4D] dark:hover:text-[#F5F0E8]'
      }`}
    >
      {label}
    </button>
  );
}

const Dot = () => <span className="text-[#9CA3AF] text-[11px]">·</span>;

export default function BookshelfClient({ books }: BookshelfClientProps) {
  const [category, setCategory] = useState<Category>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [sortBy, setSortBy] = useState<SortBy>('title');
  const [page, setPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>(null);

  const isDefaultView =
    category === 'all' && statusFilter === 'all' && sortBy === 'title' && activeFilter === null;

  const filteredBooks = useMemo(() => {
    let result = [...books];

    if (category !== 'all') {
      result = result.filter((b) => b.category === category);
    }

    if (activeFilter === 'finished' || statusFilter === 'read') {
      result = result.filter((b) => b.status === 'read');
    } else if (activeFilter === 'reading' || statusFilter === 'reading') {
      result = result.filter((b) => b.status === 'reading');
    } else if (activeFilter === 'to_read' || statusFilter === 'to_read') {
      result = result.filter((b) => b.status === 'to_read');
    }

    if (sortBy === 'author') {
      result.sort((a, b) => {
        const la = getLastName(a.author);
        const lb = getLastName(b.author);
        if (!la && !lb) return a.title.localeCompare(b.title);
        if (!la) return 1;
        if (!lb) return -1;
        return la.localeCompare(lb);
      });
    } else {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [books, category, statusFilter, sortBy, activeFilter]);

  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);
  const paginatedBooks = filteredBooks.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handleViewAllFinished = () => {
    setCategory('all');
    setStatusFilter('read');
    setActiveFilter('finished');
    setPage(1);
  };

  const handleViewAllToRead = () => {
    setCategory('all');
    setStatusFilter('to_read');
    setActiveFilter('to_read');
    setPage(1);
  };

  const ongoingBooks = useMemo(() => books.filter((b) => b.status === 'reading'), [books]);
  const finishedCount = useMemo(() => books.filter((b) => b.status === 'read').length, [books]);
  const toReadCount = useMemo(() => books.filter((b) => b.status === 'to_read').length, [books]);

  const labelClass = 'text-[11px] tracking-[0.1em] font-medium uppercase text-[#9CA3AF]';

  return (
    <div>
      {/* ── Filter bars: 2 rows ── */}
      <div className="space-y-1 mb-7">

        {/* Row 1: Category */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className={`${labelClass} w-20 flex-shrink-0`}>Category:</span>
          <FilterBtn
            label="ALL"
            active={category === 'all'}
            onClick={() => { setCategory('all'); setPage(1); }}
          />
          <Dot />
          <FilterBtn
            label="MINDSET"
            active={category === 'mindset'}
            onClick={() => { setCategory('mindset'); setActiveFilter('finished'); setPage(1); }}
          />
          <Dot />
          <FilterBtn
            label="FICTION"
            active={category === 'fiction'}
            onClick={() => { setCategory('fiction'); setActiveFilter('finished'); setPage(1); }}
          />
        </div>

        {/* Row 2: Status + Sort By (same line, sort pushed right) */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className={`${labelClass} w-20 flex-shrink-0`}>Status:</span>
          <FilterBtn
            label="ALL"
            active={statusFilter === 'all' && activeFilter === null}
            onClick={() => { setStatusFilter('all'); setActiveFilter(null); setPage(1); }}
          />
          <Dot />
          <FilterBtn
            label="FINISHED"
            active={statusFilter === 'read' || activeFilter === 'finished'}
            onClick={() => { setStatusFilter('read'); setActiveFilter('finished'); setPage(1); }}
          />
          <Dot />
          <FilterBtn
            label="ONGOING"
            active={statusFilter === 'reading' || activeFilter === 'reading'}
            onClick={() => { setStatusFilter('reading'); setActiveFilter('reading'); setPage(1); }}
          />
          <Dot />
          <FilterBtn
            label="TO READ"
            active={statusFilter === 'to_read' || activeFilter === 'to_read'}
            onClick={() => { setStatusFilter('to_read'); setActiveFilter('to_read'); setPage(1); }}
          />

          {/* Sort By — pushed right on same row */}
          <div className="flex items-center gap-3 ml-auto">
            <span className={labelClass}>Sort By:</span>
            <FilterBtn
              label="TITLE"
              active={sortBy === 'title'}
              onClick={() => { setSortBy('title'); setPage(1); }}
            />
            <Dot />
            <FilterBtn
              label="AUTHOR"
              active={sortBy === 'author'}
              onClick={() => {
                setSortBy('author');
                if (isDefaultView) setActiveFilter('finished');
                setPage(1);
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Default curated view ── */}
      {isDefaultView && (
        <div>
          {/* ONGOING */}
          {ongoingBooks.length > 0 && (
            <div className="mb-8">
              <p className={`${labelClass} mb-3`}>ONGOING ({ongoingBooks.length})</p>
              {ongoingBooks.map((b) => (
                <BookRow key={b.id} book={b} />
              ))}
            </div>
          )}

          {/* FINISHED */}
          <div className="mb-8">
            <p className={`${labelClass} mb-3`}>FINISHED ({finishedCount})</p>
            {CURATED_FINISHED.map((title) => {
              const book = books.find((b) => b.title === title);
              return (
                <div key={title} className="flex items-baseline py-[6px] border-b border-[var(--border)] last:border-0">
                  <span className="text-[8px] text-[#343D4D] dark:text-[#F5F0E8] mr-3 leading-none flex-shrink-0">●</span>
                  <span className="text-[15px] text-[#343D4D] dark:text-[#F5F0E8]">{title}</span>
                  {book?.author && (
                    <>
                      <span className="text-[15px] text-[#9CA3AF] mx-1">·</span>
                      <span className="text-[14px] text-[#9CA3AF]">{book.author}</span>
                    </>
                  )}
                </div>
              );
            })}
            <button
              onClick={handleViewAllFinished}
              className="mt-3 text-[12px] text-[#9CA3AF] hover:text-[#343D4D] dark:hover:text-[#F5F0E8] transition-colors"
            >
              View all finished ({finishedCount})
            </button>
          </div>

          {/* TO READ */}
          <div className="mb-8">
            <p className={`${labelClass} mb-3`}>TO READ ({toReadCount})</p>
            {CURATED_TO_READ.map((title) => {
              const book = books.find((b) => b.title === title);
              return (
                <div key={title} className="flex items-baseline py-[6px] border-b border-[var(--border)] last:border-0">
                  <span className="text-[8px] text-[#9CA3AF] mr-3 leading-none flex-shrink-0">○</span>
                  <span className="text-[15px] text-[#343D4D] dark:text-[#F5F0E8]">{title}</span>
                  {book?.author && (
                    <>
                      <span className="text-[15px] text-[#9CA3AF] mx-1">·</span>
                      <span className="text-[14px] text-[#9CA3AF]">{book.author}</span>
                    </>
                  )}
                </div>
              );
            })}
            <button
              onClick={handleViewAllToRead}
              className="mt-3 text-[12px] text-[#9CA3AF] hover:text-[#343D4D] dark:hover:text-[#F5F0E8] transition-colors"
            >
              View all to read ({toReadCount})
            </button>
          </div>
        </div>
      )}

      {/* ── Filtered / paginated view ── */}
      {!isDefaultView && (
        <div>
          <p className="text-[12px] text-[#9CA3AF] mb-4">
            {filteredBooks.length === 0
              ? 'No books found'
              : `Showing ${(page - 1) * ITEMS_PER_PAGE + 1} to ${Math.min(
                  page * ITEMS_PER_PAGE,
                  filteredBooks.length
                )} of ${filteredBooks.length} books`}
          </p>

          <div className="mb-6">
            {paginatedBooks.map((book) => (
              <BookRow key={book.id} book={book} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center gap-4 text-[12px]">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className={`transition-colors ${
                  page === 1
                    ? 'text-[#9CA3AF] opacity-40 cursor-not-allowed'
                    : 'text-[#9CA3AF] hover:text-[#343D4D] dark:hover:text-[#F5F0E8]'
                }`}
              >
                &larr; Previous
              </button>
              <span className="text-[#9CA3AF]">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className={`transition-colors ${
                  page === totalPages
                    ? 'text-[#9CA3AF] opacity-40 cursor-not-allowed'
                    : 'text-[#9CA3AF] hover:text-[#343D4D] dark:hover:text-[#F5F0E8]'
                }`}
              >
                Next &rarr;
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
