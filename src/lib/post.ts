import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm'; // <- ADD THIS

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export function getPostSlugs(): string[] {
  const filenames = fs.readdirSync(postsDirectory).filter((file) => 
    file.endsWith('.md') && !file.startsWith('.env')
  );
  
  // Extract slugs from frontmatter instead of using filenames
  const slugs: string[] = [];
  
  for (const filename of filenames) {
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const parsed = matter(fileContents);
    
    // Check if this is a bilingual post with slug in frontmatter
    if (parsed.data.slug) {
      slugs.push(parsed.data.slug);
    } else {
      // Fallback for legacy posts - use filename without extension
      slugs.push(filename.replace(/\.md$/, ''));
    }
  }
  
  return slugs;
}

function getPostFilenameBySlug(slug: string): string | null {
  const filenames = fs.readdirSync(postsDirectory).filter((file) => 
    file.endsWith('.md') && !file.startsWith('.env')
  );
  
  for (const filename of filenames) {
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const parsed = matter(fileContents);
    
    // Check if this file contains the slug we're looking for
    if (parsed.data.slug === slug) {
      return filename;
    }
    
    // Fallback for legacy posts - check if filename matches slug
    if (filename.replace(/\.md$/, '') === slug) {
      return filename;
    }
  }
  
  return null;
}

type Post = {
  slug: string;
  title: string;
  excerpt?: string;
  content: string;
  image?: string;
  date?: string;
  readingTime?: number;
  category?: string;
  quote?: string;
  client?: {
    name: string;
    age: number;
    job: string;
    image: string;
  };
  expert?: {
    name: string;
    title: string;
    image: string;
  };
};

type BilingualFrontmatter = {
  slug: string;
  title_en: string;
  title_vi: string;
  excerpt_en?: string;
  excerpt_vi?: string;
  quote_en?: string;
  quote_vi?: string;
  category_en?: string;
  category_vi?: string;
  date?: string;
  readingTime?: number;
  image?: string;
  client?: {
    name: string;
    age: number;
    job: string;
    image: string;
  };
  expert?: {
    name: string;
    title: string;
    image: string;
  };
  // For Option B (fully bilingual content)
  content_en?: string;
  content_vi?: string;
};

type Frontmatter = Omit<Post, 'slug' | 'content'>;

export async function getPostBySlug(slug: string, locale: string = 'en'): Promise<Post> {
  // Find the actual filename for this slug
  const filename = getPostFilenameBySlug(slug);
  if (!filename) {
    throw new Error(`Post with slug "${slug}" not found`);
  }
  
  const fullPath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const parsed = matter(fileContents);
  const { data, content } = parsed;

  // Check if this is a bilingual post (has title_en/title_vi keys)
  const isBilingual = data.title_en && data.title_vi;
  
  let title: string;
  let excerpt: string | undefined;
  let quote: string | undefined;
  let category: string | undefined;
  let contentToProcess: string;

  if (isBilingual) {
    // Handle bilingual post
    const bilingualData = data as BilingualFrontmatter;
    
    // Select language-specific fields
    title = locale === 'vi' ? bilingualData.title_vi : bilingualData.title_en;
    excerpt = locale === 'vi' ? bilingualData.excerpt_vi : bilingualData.excerpt_en;
    quote = locale === 'vi' ? bilingualData.quote_vi : bilingualData.quote_en;
    category = locale === 'vi' ? bilingualData.category_vi : bilingualData.category_en;
    
    // Handle content (Option B - fully bilingual in frontmatter)
    if (bilingualData.content_en && bilingualData.content_vi) {
      contentToProcess = locale === 'vi' ? bilingualData.content_vi : bilingualData.content_en;
    } else {
      // Option A - single content body (fallback to English)
      contentToProcess = content;
    }
  } else {
    // Handle legacy single-language post
    if (typeof data.title !== 'string') {
      throw new Error(`Post "${slug}" is missing a valid "title" in its frontmatter.`);
    }
    
    title = data.title;
    excerpt = data.excerpt;
    quote = data.quote;
    category = data.category;
    contentToProcess = content;
  }

  // Convert markdown to HTML, WITH GFM support (tables, strikethrough, task lists, etc.)
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html)
    .process(contentToProcess);

  const contentHtml = processedContent.toString();

  return {
    slug: data.slug || slug, // Use frontmatter slug or fallback to provided slug
    content: contentHtml,
    title,
    excerpt,
    image: data.image,
    date: data.date,
    readingTime: data.readingTime,
    category,
    quote,
    client: data.client,
    expert: data.expert,
  };
}
