import prisma from 'lib/prisma';
import Container from 'components/Container';
import Guestbook from 'components/Guestbook';

export default function GuestbookPage({ fallbackData }) {
  return (
    <Container
      title="Guestbook - Omkar Kulkarni"
      description="Appreciate your visit! Sign my digital guestbook and share your wisdom with all!"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Guestbook
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Drop a comment below. Share your thoughts, insights, wisdom, or even a
          joke. I love surprises!
        </p>
        <Guestbook fallbackData={fallbackData} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: 'desc'
    }
  });

  const fallbackData = entries.map((entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    created_by: entry.created_by.toString(),
    updated_at: entry.updated_at.toString()
  }));

  return {
    props: {
      fallbackData
    },
    revalidate: 60
  };
}
