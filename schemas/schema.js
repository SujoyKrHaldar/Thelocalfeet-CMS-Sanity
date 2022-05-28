import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import seo from "./components/others/seo";
import ads from "./components/affiliate-ads/ads";
import shop from "./components/shop/shop";
import blog from "./components/blogs/blog";
import offer from "./components/shop/offer";
import country from "./components/blogs/country";
import comments from "./components/others/comments";
import photoBlog from "./components/photography/photoBlog";
import newsletter from "./components/others/newsletter";
import photography from "./components/photography/photography";
import blockContent from "./components/others/blockContent";
import productCategory from "./components/shop/productCategory";
import travelCategory from "./components/travel-tips/travelCategory";
import travelPosts from "./components/travel-tips/travelPosts";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    seo,
    country,
    blog,
    photoBlog,
    photography,
    travelCategory,
    travelPosts,
    comments,
    ads,
    productCategory,
    offer,
    shop,
    newsletter,
    blockContent,
  ]),
});
