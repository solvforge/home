import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// Reads content/case-studies/*.md at build time only (this repo's pages that
// call these functions are statically generated), so there's no runtime fs
// access inside a Vercel serverless function to worry about.
const CASE_STUDIES_DIR = path.join(process.cwd(), "content", "case-studies");

export type CaseStudyMeta = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  tags: string[];
  date: string;
};

export type CaseStudy = CaseStudyMeta & { html: string };

export function getAllCaseStudies(): CaseStudyMeta[] {
  const files = fs.readdirSync(CASE_STUDIES_DIR).filter((f) => f.endsWith(".md"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(CASE_STUDIES_DIR, file), "utf8");
      const { data } = matter(raw);
      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title as string,
        client: data.client as string,
        summary: data.summary as string,
        tags: (data.tags as string[]) ?? [],
        date: data.date as string,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getCaseStudy(slug: string): CaseStudy | null {
  const filePath = path.join(CASE_STUDIES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    client: data.client as string,
    summary: data.summary as string,
    tags: (data.tags as string[]) ?? [],
    date: data.date as string,
    html: marked.parse(content, { async: false }),
  };
}
