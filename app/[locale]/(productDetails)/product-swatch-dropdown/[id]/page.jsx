import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar6 from "@/components/headers/Topbar6";
import Breadcumb from "@/components/productDetails/Breadcumb";
import Descriptions1 from "@/components/productDetails/descriptions/Descriptions1";
import DetailsColorRoundedImage from "@/components/productDetails/details/DetailsColorRoundedImage";

import DetailsRoundedColor from "@/components/productDetails/details/DetailsRoundedColor";
import DetailsSwatchDropdown from "@/components/productDetails/details/DetailsSwatchDropdown";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import { allProducts } from "@/data/products";
import React from "react";

export const metadata = {
  title:
    "Product Detail || PolyEgy - Multipurpose React Nextjs eCommerce Template",
  description: "PolyEgy - Multipurpose React Nextjs eCommerce Template",
};

export default async function ProductSwatchDropdownPage({ params }) {
  const { id } = await params;

  const product = allProducts.filter((p) => p.id == id)[0] || allProducts[0];
  return (
    <>
      <Topbar6 bgColor="bg-main" />
      <Header1 />
      <Breadcumb product={product} />
      <DetailsSwatchDropdown product={product} />
      <Descriptions1 />
      <RelatedProducts />
      <Footer1 hasPaddingBottom />
    </>
  );
}
