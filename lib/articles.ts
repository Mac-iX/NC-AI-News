import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { format } from 'date-fns';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

function formatArticleDate(date: any): string {
  try {
    if (typeof date === 'string') {
      return format(new Date(date), 'MMMM d, yyyy');
    } else if (date instanceof Date) {
      return format(date, 'MMMM d, yyyy');
    }
    return String(date);
  } catch {
    return String(date);
  }
}

export function getSortedArticlesData() {
  const allArticlesData: any[] = [];
  
  // Read all category directories
  const categories = fs.readdirSync(articlesDirectory, { withFileTypes: true });
  
  categories.forEach((category) => {
    if (category.isDirectory()) {
      const categoryPath = path.join(articlesDirectory, category.name);
      const files = fs.readdirSync(categoryPath);
      
      files.forEach((fileName) => {
        if (fileName.endsWith('.md')) {
          const slug = fileName.replace(/\.md$/, '');
          const fullPath = path.join(categoryPath, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const matterResult = matter(fileContents);

          allArticlesData.push({
            slug,
            ...matterResult.data,
            date: formatArticleDate(matterResult.data.date),
            dateRaw: matterResult.data.date, // Keep raw date for sorting
          });
        }
      });
    }
  });

  return allArticlesData.sort((a, b) => {
    const dateA = new Date(a.dateRaw);
    const dateB = new Date(b.dateRaw);
    return dateB.getTime() - dateA.getTime();
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
    ...matterResult.data,
    date: formatArticleDate(matterResult.data.date),
  };
}

export function getFeaturedArticles() {
  const allArticles = getSortedArticlesData();
  return allArticles.filter(article => article.featured);
}
