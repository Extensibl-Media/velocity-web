import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "master",
        },
        logo_url: "https://codestitch.app/frontend/images/logo.png",
        media_folder: "public/assets/images",
        public_folder: "/assets/images/",
        collections: [
          {
            name: "blog",
            label: "Blog Posts",
            folder: "src/content/blog",
            create: true,
            fields: [
              { label: "Title", name: "title", widget: "string" },
              { label: "Description", name: "description", widget: "string" },
              { label: "Author", name: "author", widget: "string" },
              { label: "Date", name: "date", widget: "datetime" },
              {
                label: "Tags",
                name: "tags",
                widget: "list",
                default: ["post"],
              },
              { label: "Featured Image", name: "image", widget: "image" },
              { label: "Image Caption", name: "imageAlt", widget: "string" },
              { label: "Body", name: "body", widget: "markdown" },
            ],
          },
          {
            name: "addons",
            label: "Add-Ons",
            folder: "src/content/addons",
            create: true,
            fields: [
              { label: "Title", name: "title", widget: "string" },
              { label: "Description", name: "description", widget: "string" },
              { label: "Featured Image", name: "image", widget: "image" },
              {
                label: "FAQs",
                name: "faqs",
                widget: "list",
                fields: [
                  { label: "Question", widget: "string", name: "question" },
                  { label: "Answer", widget: "string", name: "answer" },
                ],
              },
              { label: "Body", name: "body", widget: "markdown" },
            ],
          },
          {
            name: "portfolio",
            label: "Portfolio Project",
            folder: "src/content/portfolio",
            create: true,
            fields: [
              { name: "title", label: "Title", widget: "string" },
              { name: "description", label: "Description", widget: "string" },
              {
                name: "featuredImage",
                label: "Featured Image",
                widget: "image",
              },
              {
                name: "featuredImageAlt",
                label: "Featured Image Alt Text",
                widget: "string",
              },
              { name: "screenshot", label: "Screenshot", widget: "image" },
              {
                name: "screenshotAlt",
                label: "Screenshot Alt Text",
                widget: "string",
              },
              {
                name: "body",
                label: "Body",
                widget: "markdown",
              },
            ],
          },
        ],
      },
    }),
  ],
});
