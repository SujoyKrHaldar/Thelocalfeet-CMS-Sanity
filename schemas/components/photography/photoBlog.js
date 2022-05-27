import { BiPhotoAlbum } from "react-icons/bi";
import moment from "moment";

export default {
  name: "photoBlog",
  title: "Photo Blog",
  icon: BiPhotoAlbum,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the Blog.",
      type: "string",
    },

    {
      name: "metaTitle",
      title: "Meta title",
      description: "Title for the Blog's seo.",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      description:
        "The slug (x-y-z) will look like this thelocalfeet.com/photography/x-y-z",
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
      description: "Use keywords for SEO optimization and search filter",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "subtitle",
      description: "Short description for blog as well meta:description.",
      type: "text",
      title: "Description",
      validation: (Rule) => Rule.required(),
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
      date: "publishedAt",
      media: "mainImage",
    },
    prepare(selection) {
      const { date } = selection;
      const dateFormate = moment(date).format("MMMM Do YYYY, h:mm a");
      return Object.assign({}, selection, {
        subtitle: dateFormate && `${dateFormate}`,
      });
    },
  },
};
