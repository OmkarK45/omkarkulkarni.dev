import { Book } from 'contentlayer/generated';
import Link from 'next/link';

export default function BookCard({
  book
}: {
  book: { title: string; cover: string; author: string; slug: string };
}) {
  return (
    <Link href={`/books/${book.slug}`}>
      <a className="flex">
        <div className="mr-4 flex-shrink-0">
          <span className="flex w-[80px]  relative mb-4 rounded-md shadow-xl overflow-hidden">
            <img
              alt={book.title}
              src={`/logos/book-covers/${book.cover}`}
              className="w-full"
            />
          </span>
        </div>
        <div>
          <h4 className="text-lg font-bold">{book.title}</h4>
          <p className="mt-1">{book.author}</p>
        </div>
      </a>
    </Link>
  );
}
