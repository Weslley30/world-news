"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { CardInfo } from "@/components/cardInfo";
import { CardComponentProp } from "@/types/CardComponentType";

type NewsCarouselProp = {
  items: CardComponentProp[];
};

export function NewsCarousel({ items }: NewsCarouselProp) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={-220}
      slidesPerView={3}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <CardInfo {...item} size="min" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
