import { GetServerSideProps } from 'next';

export const getLocationFromEdge: GetServerSideProps = async ({ query }) => {
  console.log('>> SERVER GSSP LOG', JSON.stringify(query));
  const city = decodeURIComponent(query.city as string);
  const country = decodeURIComponent(query.country as string);
  return {
    props: {
      location: { city, country }
    }
  };
};
