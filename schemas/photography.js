
import { HiPhotograph } from 'react-icons/hi'

export default {
  name: "photography",
  title: "Photography",
  icon: HiPhotograph,
  type: "document",
  fields: [
      {
      name: "photo",
      title: "Photograph",
      description:
        "Photo for your Photography page",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "caption",
      description: "Caption for the photo.",
      title: "Caption",
      type: "string",
    },
    {
      name: "FbLink",
      title: "Facebook link",
      type: "url",
    },

    {
      name: "IsLink",
      title: "Instagram link",
      type: "url",
    },
    
  ],
  preview: {
    select: {
        title: "caption",
        media: "photo",
    },
  },
};