import { FaComments } from "react-icons/fa";

export default {
  name: "comments",
  title: "Comments",
  icon: FaComments,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "isApproved",
      title: "Approve",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "post",
      title: "Post",
      type: "reference",
      to: [{ type: "blog" }, { type: "photoBlog" }, { type: "travelPosts" }],
    },
    {
      name: "email",
      type: "string",
      title: "Email",
    },

    {
      name: "comment",
      type: "text",
      title: "Comment",
    },
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "post.title",
      media: "post.mainImage",
    },
  },
};
