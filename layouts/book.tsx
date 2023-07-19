/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

import Container from 'components/Container';
import type { PropsWithChildren } from 'react';
import type { Book } from 'contentlayer/generated';
import { BlurImage } from 'components/BlurImage';

export default function BookLayout({
  children,
  book
}: PropsWithChildren<{ book: Book }>) {
  return (
    <Container
      title={`${book.title}`}
      description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="flex justify-between w-full mb-8">
          <div>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              {book.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              {book.description}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Authored by <span className="font-medium">{book.author}</span>
            </p>

            <div className="flex relative items-center justify-center mt-10">
              <span className="flex w-[200px]  relative mb-4 rounded-md shadow-xl overflow-hidden">
                <img
                  alt={book.title}
                  src={`/logos/book-covers/${book.cover}`}
                  className="w-full"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
