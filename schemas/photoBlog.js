import { BiPhotoAlbum } from "react-icons/bi";

export default {
  name: "photoBlog",
  title: "Photo Blog",
  icon: BiPhotoAlbum,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
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
      name: "subtitle",
      description: "seo meta-description",
      type: "string",
      title: "Description",
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
      name: "keywords",
      title: "Keywords",
      description: "Use keywords for SEO optimization.",
      type: "string",
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
