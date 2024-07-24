import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from 'contentlayer/generated';

async function generate() {
  const feed = new RSS({
    title: 'Omkar Kulkarni',
    site_url: 'https://omkarkulkarni.tech',
    feed_url: 'https://omkarkulkarni.tech/feed.xml'
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://omkarkulkarni.tech/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
