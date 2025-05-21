'use client';

import { Header } from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { highlights, awards, features } from '@/constants';
import { useState } from 'react';

export default function Highlights() {
  const ITEMS_PER_PAGE = 3;

  // Pagination state for each section
  const [highlightsPage, setHighlightsPage] = useState(1);
  const [awardsPage, setAwardsPage] = useState(1);
  const [featuresPage, setFeaturesPage] = useState(1);

  // Calculate pagination for each section
  const highlightsPagination = {
    totalPages: Math.ceil(highlights.length / ITEMS_PER_PAGE),
    currentItems: highlights.slice(
      (highlightsPage - 1) * ITEMS_PER_PAGE,
      highlightsPage * ITEMS_PER_PAGE
    ),
  };

  const awardsPagination = {
    totalPages: Math.ceil(awards.length / ITEMS_PER_PAGE),
    currentItems: awards.slice(
      (awardsPage - 1) * ITEMS_PER_PAGE,
      awardsPage * ITEMS_PER_PAGE
    ),
  };

  const featuresPagination = {
    totalPages: Math.ceil(features.length / ITEMS_PER_PAGE),
    currentItems: features.slice(
      (featuresPage - 1) * ITEMS_PER_PAGE,
      featuresPage * ITEMS_PER_PAGE
    ),
  };

  // Pagination controls component
  const PaginationControls = ({
    currentPage,
    totalPages,
    onPageChange
  }: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }) => {
    if (totalPages <= 1) return null;

    return (
      <div className="hidden md:flex justify-end items-center space-x-2 mt-6">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
          aria-label="Previous page"
        >
          &larr;
        </button>

        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
          aria-label="Next page"
        >
          &rarr;
        </button>
      </div>
    );
  };

  return (
    <>
      <Header />
      <main className="container py-16">
        <h1 className="text-4xl font-bold tracking-tight mb-12">Highlights</h1>

        <div className="space-y-16">
          {/* Conferences Section */}
          <section className="space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight">Conferences</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {highlightsPagination.currentItems.map((item) => (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.id}
                  className="group rounded-lg border bg-card text-card-foreground hover:bg-accent/50 transition-colors overflow-hidden"
                >
                  <div className="aspect-video relative bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      <span className="text-xs font-medium bg-primary/10 px-2 py-1 rounded">{item.date}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-2 group-hover:text-accent-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <PaginationControls
              currentPage={highlightsPage}
              totalPages={highlightsPagination.totalPages}
              onPageChange={setHighlightsPage}
            />
          </section>

          {/* Awards Section */}
          <section className="space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight">Awards & Recognition</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {awardsPagination.currentItems.map((item) => (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.id}
                  className="group rounded-lg border bg-card text-card-foreground hover:bg-accent/50 transition-colors overflow-hidden"
                >
                  <div className="aspect-video relative bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      <span className="text-xs font-medium bg-primary/10 px-2 py-1 rounded">{item.date}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-2 group-hover:text-accent-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <PaginationControls
              currentPage={awardsPage}
              totalPages={awardsPagination.totalPages}
              onPageChange={setAwardsPage}
            />
          </section>

          {/* Features Section */}
          <section className="space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight">Features & Mentions</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuresPagination.currentItems.map((item) => (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.id}
                  className="group rounded-lg border bg-card text-card-foreground hover:bg-accent/50 transition-colors overflow-hidden"
                >
                  <div className="aspect-video relative bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      <span className="text-xs font-medium bg-primary/10 px-2 py-1 rounded">{item.publication}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-2 group-hover:text-accent-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {item.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <PaginationControls
              currentPage={featuresPage}
              totalPages={featuresPagination.totalPages}
              onPageChange={setFeaturesPage}
            />
          </section>
        </div>
      </main>
    </>
  );
}
