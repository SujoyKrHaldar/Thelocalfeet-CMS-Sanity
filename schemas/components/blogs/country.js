import { MdLandscape} from 'react-icons/md'

export default {
  name: "country",
  title: "Country",
  icon: MdLandscape,
  type: "document",
  fields: [
    {
      name: "name",
      description: "Visible on thumnail and main landing page.",
      title: "Name",
      type: "string",
    },

    {
      name: "coverImage",
      title: "Cover image",
      description:
        "Visible on thumnail and main landing page. Use '.webp' format for better image optimization.",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "coverImage",
    },
  },
};
