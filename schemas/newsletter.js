import { BsNewspaper } from "react-icons/bs";

export default {
  name: "newsletter",
  title: "Newsletter",
  icon: BsNewspaper,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "email",
      type: "string",
      title: "Email",
    },
  ],

  preview: {
    select: {
      title: "email",
      subtitle: "_createdAt",
      media: "icon",
    },
  },
};
