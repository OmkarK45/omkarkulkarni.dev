import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import { Book, allBooks } from 'contentlayer/generated';
import BookLayout from 'layouts/book';

export default function SnippetPage(book: Book) {
  const Component = useMDXComponent(book.body.code);

  return (
    <BookLayout book={book}>
      <Component components={components as any} />
    </BookLayout>
  );
}

export function getStaticPaths() {
  return {
    paths: allBooks.map((s) => ({ params: { slug: s.slug } })),
    fallback: false
  };
}

export function getStaticProps({ params }) {
  const book = allBooks.find((snippet) => snippet.slug === params.slug);

  return { props: book };
}
