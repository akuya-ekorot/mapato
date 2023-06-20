// sanity.io schema for page
// A page has a title, slug, and a list of sections
export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "hero",
      title: "Hero",
      type: "reference",
      to: [{ type: "hero" }],
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "section" }],
        },
      ],
    },
  ],
};
