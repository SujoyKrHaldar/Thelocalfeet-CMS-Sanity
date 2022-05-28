import moment from "moment";
import { RiAdvertisementFill } from "react-icons/ri";

export default {
  name: "ads",
  title: "Affiliate ads",
  icon: RiAdvertisementFill,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "dataWRID",
      title: "Data-WRID",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "dataWidgetType",
      title: "Data-widgetType",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "dataClass",
      title: "Data-class",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "scriptSrc",
      title: "Script-src",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "name",
      date: "_createdAt",
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
