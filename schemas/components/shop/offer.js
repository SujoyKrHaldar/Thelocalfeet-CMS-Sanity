import { AiOutlinePercentage } from "react-icons/ai";

export default {
  name: "offer",
  title: "Offer",
  icon: AiOutlinePercentage,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Offer Name",
      type: "string",
    },
    {
      name: "status",
      title: "Activate offer",
      description: "Offer validation",
      type: "boolean",
      initialValue: false,
    },

    {
      name: "specialMsg",
      title: "Special note",
      validation: (Rule) => Rule.required(),
      type: "string",
    },
    {
      name: "discount",
      validation: (Rule) => Rule.required(),
      title: "Discount",
      type: "string",
    },
    {
      name: "startingDate",
      title: "Starting",
      type: "date",
    },
    {
      name: "endingDate",
      title: "Ending",
      type: "date",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "offer",
    },
  },
};
