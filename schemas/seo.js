import { SiWebmoney } from "react-icons/si";

export default {
  name: "seo",
  title: "Seo",
  icon: SiWebmoney,
  type: "document",
  fields: [
    {
      name: "page",
      title: "Page name",
      description:
        "Page name will be same as sites navigation name. Eg. thelocalfeet.com will be Home, thelocalfeet.com/about will be About.",
      validation: (Rule) => Rule.required(),
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      description: "Og:url",
      validation: (Rule) => Rule.required(),
      type: "url",
    },

    {
      name: "title",
      title: "Title",
      description: "Title and og:title.",
      validation: (Rule) => Rule.required(),
      type: "string",
    },

    {
      name: "keywords",
      title: "Keywords",
      description: "Meta keywords.",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      description: "Meta description and og:description.",
      type: "text",
      title: "Description",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "ogImage",
      title: "Image",
      type: "image",
      description: "Og:image.",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "ogAlt",
          title: "Alternative text",
          description: "Og:alt tag for image.",
          type: "string",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "page",
      subtitle: "keywords",
      media: "ogImage",
    },
  },
};
