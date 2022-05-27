import { BiPhotoAlbum } from "react-icons/bi";

export default {
  name: "shop",
  title: "Products",
  icon: BiPhotoAlbum,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      description:
        "The slug (x-y-z) is placed in url, 'domain_name.com/blogs/x-y-z'",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "category",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: { type: "category" },
    },
    {
      name: "status",
      title: "Status",
      validation: (Rule) => Rule.required(),
      description: "Item available or not.",
      type: "boolean",
      initialValue: true,
    },

    {
      name: "preBooking",
      title: "Pre Booking",
      description: "Pre booking available or not.",
      type: "boolean",
      initialValue: true,
    },

    {
      name: "offer",
      title: "Add offer",
      description: "Activate offer to the product",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "offerName",
      title: "Offer name",
      hidden: ({ document }) => !document?.offer,
      type: "reference",
      to: { type: "offer" },
    },

    {
      name: "discountPrice",
      type: "string",
      title: "Discount price",
      hidden: ({ document }) => !document?.offer,
    },

    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },

    {
      name: "price",
      title: "Price",
      validation: (Rule) => Rule.required(),
      type: "number",
    },

    {
      name: "photo",
      title: "Main photo",
      validation: (Rule) => Rule.required(),
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "coverPhoto",
      title: "Cover photo",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "preview",
      title: "Preview",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },

    {
      name: "size",
      title: "Size",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "_createdAt",
      media: "photo",
    },
  },
};
