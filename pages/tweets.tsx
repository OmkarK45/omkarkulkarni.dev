import Container from 'components/Container';
import Tweet from 'components/Tweet';
import { getTweets } from 'lib/twitter';

export default function Tweets({ tweets }) {
  return (
    <Container
      title="Tweets – Omkar Kulkarni"
      description="A collection of tweets that inspire me, make me laugh, and make me think."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Tweets
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This is a collection of tweets I've enjoyed. I use Twitter quite a
          bit, so I wanted a place to publicly share what inspires me, makes me
          laugh, and makes me think.
        </p>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const tweets = await getTweets(['935644892721762305']);

  return { props: { tweets } };
}

// https://twitter.com/FlatEarthOrg/status/935644892721762305?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E935644892721762305%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Finterestingengineering.com%2F16-great-tweets-from-elon-musk-that-definitely-made-us-laugh
