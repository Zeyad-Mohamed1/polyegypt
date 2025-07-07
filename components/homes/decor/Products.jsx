"use client";

import { getBestItems } from "@/actions/products";
import ProductCard1 from "@/components/productCards/ProductCard1";
import { products12 } from "@/data/products";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getBestItems,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  console.log(products);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Top Trending</h3>
          <p className="subheading text-secondary">
            Browse our Top Trending: the hottest picks loved by all.
          </p>
        </div>

        <Swiper
          spaceBetween={15}
          dir="ltr"
          className="swiper tf-sw-latest"
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 15 },

            768: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {products12.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard1 product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
