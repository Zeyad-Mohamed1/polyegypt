import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar6 from "@/components/headers/Topbar6";
import Products1 from "@/components/products/Products1";
import ShopCategories from "@/components/products/ShopCategories";
import Link from "next/link";
import React from "react";
import { useLocale } from "next-intl";
export default function ShopCategoriesTopPage1() {
  const locale = useLocale();
  return (
    <>
      <Topbar6 bgColor="bg-main" />
      <Header1 />
      <div
        className="page-title"
        style={{ backgroundImage: "url(/images/section/page-title.jpg)" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">
                {locale === "ar" ? "المتجر" : "Shop"}
              </h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" href={`/`}>
                    {locale === "ar" ? "الرئيسية" : "Home"}
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>{locale === "ar" ? "المتجر" : "Shop"}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ShopCategories />
      <Products1 parentClass="flat-spacing pt-0" />
      <Footer1 />
    </>
  );
}
