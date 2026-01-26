import { getRssFeed } from "@/lib/rss";

export default async function RssFeed() {
  const feedItems = await getRssFeed();

  return (
    <div className="space-y-4">
      {feedItems.slice(0, 10).map((item, index) => (
        <div key={index} className="pb-4 border-b border-slate-700">
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="group">
            <h4 className="font-semibold group-hover:text-carolina-blue transition-colors">{item.title}</h4>
            <p className="text-xs text-gray-500 mt-1">{item.source} - {item.pubDate}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
