import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar6 from "@/components/headers/Topbar6";
import Faqs from "@/components/otherPages/Faqs";
import React from "react";
import { Link } from "@/i18n/navigation";
import { setRequestLocale } from "next-intl/server";
export const metadata = {
  title: "Faqs || PolyEgy - Multipurpose React Nextjs eCommerce Template",
  description: "PolyEgy - Multipurpose React Nextjs eCommerce Template",
};

export default async function FAQSPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
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
                {locale === "ar" ? "الأسئلة الشائعة" : "FAQs"}
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
                <li>{locale === "ar" ? "الأسئلة الشائعة" : "FAQs"}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Faqs />
      <Footer1 />
    </>
  );
}
