import fs from "fs";
import path from "path";
import { parse } from "yaml";

// Read at build time only — same reasoning as src/lib/case-studies.ts.
const PAGES_DIR = path.join(process.cwd(), "content", "pages");

export type HomeContent = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
};

export type AboutContent = {
  intro: string;
  principles: string[];
};

function readYaml<T>(file: string): T {
  return parse(fs.readFileSync(path.join(PAGES_DIR, file), "utf8")) as T;
}

export function getHomeContent(): HomeContent {
  return readYaml<HomeContent>("home.yaml");
}

export function getAboutContent(): AboutContent {
  return readYaml<AboutContent>("about.yaml");
}
