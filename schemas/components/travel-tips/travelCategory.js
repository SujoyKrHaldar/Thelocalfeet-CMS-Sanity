import { SiYourtraveldottv } from "react-icons/si";

export default {
  name: "travelCategory",
  title: "Travel category",
  icon: SiYourtraveldottv,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
