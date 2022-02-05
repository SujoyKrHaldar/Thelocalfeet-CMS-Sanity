import { RiFileList2Line } from "react-icons/ri";

export default {
  name: "category",
  title: "Product category",
  icon: RiFileList2Line,
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
      media: "thumbnail",
    },
  },
};
