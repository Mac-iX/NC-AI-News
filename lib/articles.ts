import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export function getSortedArticlesData() {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as { [key: string]: any }),
    };
  });

  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getArticleData(slug: string) {
    // Correctly locate the file within its category subdirectory
    const directories = fs.readdirSync(articlesDirectory, { withFileTypes: true });
    let fullPath = '';
    for (const dir of directories) {
        if (dir.isDirectory()) {
            const filePath = path.join(articlesDirectory, dir.name, `${slug}.md`);
            if (fs.existsSync(filePath)) {
                fullPath = filePath;
                break;
            }
        }
    }

    if (!fullPath) {
        throw new Error(`Article with slug ${slug} not found`);
    }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as { [key: string]: any }),
  };
}

export function getFeaturedArticles() {
    const allArticles = getSortedArticlesData();
    return allArticles.filter(article => article.featured);
}
