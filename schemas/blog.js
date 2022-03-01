import { GrArticle } from "react-icons/gr";

export default {
  name: "blog",
  title: "Blog",
  icon: GrArticle,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      validation: (Rule) => Rule.required(),
      description:
        "Title will appear in main blog page as well as in blog list.",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      description:
        "The slug (x-y-z) will look like this, 'https://thelocalfeet.com/blogs/x-y-z'",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "keywords",
      title: "Keywords",
      description: "Use keywords for SEO optimization.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      description:
        "Subtitle will appear in main blog page as well as in blog list.",
      type: "text",
      title: "Subtitle",
    },

    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      description:
        "This will appear in main blog page as cover photo and thumbnail in blog list. Use '.webp' format for better image optimization.",
      options: {
        hotspot: true,
      },
    },

    {
      name: "country",
      title: "Country",
      type: "reference",
      to: { type: "country" },
    },

    {
      name: "publishedAt",
      title: "Published at",
      description: "It will help to sort all blogs.",
      type: "date",
      options: {
        dateFormat: "DD-MM-YYYY",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "body",
      description: "Write your blog here.",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "country.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `${author}`,
      });
    },
  },
};
