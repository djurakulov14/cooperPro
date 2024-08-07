import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../index.scss';
import { Pagination } from 'swiper/modules';
import ProductCard from './ProductCard';



function Sales({arr, sectionName}) {




  return (
    <section>
        <h1 className=' text-5xl uppercase text-center mb-8'>{sectionName}</h1>
        <Swiper
        slidesPerView={3}
        spaceBetween={2}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            arr.map(item => <SwiperSlide><ProductCard item={item} key={item.id}/></SwiperSlide>)
        }
      </Swiper>
    </section>
  )
}

export default Sales