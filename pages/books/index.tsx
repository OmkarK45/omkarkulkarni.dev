import { allBooks, allSnippets } from 'contentlayer/generated';
import Container from 'components/Container';
import { pick } from 'lib/utils';
import type { InferGetStaticPropsType } from 'next';
import BookCard from 'components/BookCard';

export default function Books({
  books
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Books I am reading - Omkar Kulkarni"
      description="A collection of books that I enjoyed reading!"
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          My Bookshelf
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          These are the books I've enjoyed reading in the past. Each book is
          filled with valuable insights to inspire personal growth and positive
          changes in life.
        </p>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
          {books.map((book, idx) => (
            <BookCard book={book} key={idx} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const books = allBooks.map((snippet) =>
    pick(snippet, ['slug', 'title', 'cover', 'description', 'author'])
  );

  return { props: { books } };
}
