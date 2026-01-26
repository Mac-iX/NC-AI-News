import Parser from 'rss-parser';

const parser = new Parser();

const RSS_FEEDS = [
  { name: 'NC Tech Association', url: 'https://www.nctech.org/feed/' },
  { name: 'Triangle Business Journal', url: 'https://www.bizjournals.com/triangle/industry-news/technology/rss.xml' },
  { name: 'Charlotte Business Journal', url: 'https://www.bizjournals.com/charlotte/industry-news/technology/rss.xml' },
  { name: 'WilmingtonBiz', url: 'https://www.wilmingtonbiz.com/technology/feed' },
  { name: 'NC Commerce', url: 'https://www.commerce.nc.gov/news-center/rss.xml' },
];

interface FeedItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
}

export async function getRssFeed(): Promise<FeedItem[]> {
  const allItems: FeedItem[] = [];

  for (const feedInfo of RSS_FEEDS) {
    try {
      const feed = await parser.parseURL(feedInfo.url);
      feed.items.forEach(item => {
        allItems.push({
          title: item.title || '',
          link: item.link || '',
          pubDate: item.pubDate ? new Date(item.pubDate).toLocaleDateString() : '',
          source: feedInfo.name,
        });
      });
    } catch (error) {
      console.error(`Failed to fetch RSS feed from ${feedInfo.name}:`, error);
    }
  }

  return allItems.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
}
