import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import blockContent from "./blockContent";
import blog from "./blog";
import country from "./country";
import photography from "./photography";
import photoBlog from "./photoBlog";
import productCategory from "./productCategory";
import shop from "./shop";
import offer from "./offer";
import newsletter from "./newsletter";
import comments from "./comments";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    country,
    blog,
    photoBlog,
    photography,
    productCategory,
    shop,
    offer,
    newsletter,
    comments,
    blockContent,
  ]),
});
