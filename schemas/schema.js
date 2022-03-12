import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import seo from "./seo";
import shop from "./shop";
import blog from "./blog";
import offer from "./offer";
import country from "./country";
import comments from "./comments";
import photoBlog from "./photoBlog";
import newsletter from "./newsletter";
import photography from "./photography";
import blockContent from "./blockContent";
import productCategory from "./productCategory";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    seo,
    country,
    photography,
    blog,
    photoBlog,
    comments,
    productCategory,
    offer,
    shop,
    newsletter,
    blockContent,
  ]),
});
