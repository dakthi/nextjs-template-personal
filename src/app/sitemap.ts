import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

// Directory where your markdown posts are stored
const POSTS_DIR = path.join(process.cwd(), 'src/content/posts')

/**
 * Get all post slugs (without file extension)
 */
async function getPostSlugs(): Promise<string[]> {
  const files = await fs.promises.readdir(POSTS_DIR)
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
}

/**
 * Get last modified date for a given post file
 */
async function getLastModified(slug: string): Promise<Date> {
  const filePath = path.join(POSTS_DIR, `${slug}.md`)
  const stats = await fs.promises.stat(filePath)
  return stats.mtime
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://thielts.com'

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/learn`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/testimonials`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/legal`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Blog posts
  const slugs = await getPostSlugs()
  const blogRoutes = await Promise.all(
    slugs.map(async (slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: await getLastModified(slug),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  return [...staticRoutes, ...blogRoutes]
}
