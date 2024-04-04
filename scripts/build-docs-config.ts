import fs from "fs";
import path from "path";
import { rimraf } from "rimraf";
import type { DocsConfig } from "@/types/docs";
import { getDocs } from "@/server/docs";

const getCategoryItems = (category: string) => {
  return getDocs(category).map((category) => ({
    title: category.title,
    href: category.href,
    label: category.label,
  }));
};

const docsConfig: DocsConfig = {
  nav: [
    {
      title: "Getting Started",
      slug: "docs",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
        {
          title: "Installation",
          href: "/docs/installation",
        },
        {
          title: "Theming",
          href: "/docs/theming",
        },
        {
          title: "Changelog",
          href: "/docs/changelog",
        },
      ],
    },
    {
      title: "Components",
      slug: "components",
      items: [
        {
          title: "Overview",
          href: "/components",
        },
        {
          title: "Inputs",
          items: getCategoryItems("components/inputs"),
        },
        {
          title: "Feedback",
          items: getCategoryItems("components/feedback"),
        },
        {
          title: "Layout",
          items: getCategoryItems("components/layout"),
        },
        {
          title: "Data display",
          items: getCategoryItems("components/data-display"),
        },
        {
          title: "Navigation",
          items: getCategoryItems("components/navigation"),
        },
        {
          title: "Overlay",
          items: getCategoryItems("components/overlay"),
        },
        {
          title: "Utils",
          items: getCategoryItems("components/utils"),
        },
        {
          title: "Animations",
          items: getCategoryItems("components/animations"),
        },
      ],
    },
    {
      title: "Blocks",
      slug: "blocks",
      items: [
        {
          title: "All blocks",
          href: "/blocks",
        },
        {
          title: "Marketing",
          items: getCategoryItems("blocks/marketing"),
        },
        {
          title: "Application UI",
          items: getCategoryItems("blocks/application-ui"),
        },
        {
          title: "E-commerce",
          items: getCategoryItems("blocks/e-commerce"),
        },
      ],
    },
    {
      title: "Hooks",
      slug: "hooks",
      items: [
        {
          title: "All hooks",
          href: "/hooks",
        },
        {
          title: "Browser",
          items: getCategoryItems("hooks/browser"),
        },
        {
          title: "Elements",
          items: getCategoryItems("hooks/elements"),
        },
        {
          title: "Sensors",
          items: getCategoryItems("hooks/sensors"),
        },
        {
          title: "State",
          items: getCategoryItems("hooks/state"),
        },
        {
          title: "Utilities",
          items: getCategoryItems("hooks/utils"),
        },
      ],
    },
    {
      title: "Icons",
      slug: "icons",
      items: [
        {
          title: "All icons",
          href: "/icons",
        },
        ...getCategoryItems("icons"),
      ],
    },
    {
      title: "Templates",
      slug: "templates",
      items: [
        {
          title: "All templates",
          href: "/templates",
        },
      ],
    },
  ],
};

const index = `
// This file is autogenerated by scripts/build-preview-imports.ts
// Do not edit this file directly.
import type { DocsConfig } from "@/types/docs";

export const docsConfig: DocsConfig = ${JSON.stringify(docsConfig)};
`;

rimraf.sync(path.join(process.cwd(), "src", "config", "docs-config.ts"));
fs.writeFileSync(path.join(process.cwd(), "src", "config", "docs-config.ts"), index);
