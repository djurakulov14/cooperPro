import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../index.scss';
import { Navigation, Pagination } from 'swiper/modules';



function SectionFirst() {


  return (
    <section className='mainImg pt-24 h-[80vh] text-white'>
        <Swiper pagination={true} modules={[Pagination, Navigation]} className="mySwiper container m-auto">
        <SwiperSlide className='swiperrr flex flex-col justify-start'>
            <span  className=' text-8xl mb-12'>Хит продаж</span>
            <div className="line h-[2px] bg-gradient-to-r from-white to-transparent w-[600px]"></div>
            <div className="info mt-12  w-[600px] flex flex-col items-start">
                <h1 className=' font-bold text-5xl text-left mb-[40px]'>Дистиллятор для эфирных масел </h1>
                <div className="price flex gap-24 mb-[40px]">
                    <span className='font-thin text-3xl'>Цена</span>
                    <span className='font-bold text-3xl'>4 906 грн</span>
                </div>
                <button className=' py-4 px-32 bg-gradient-to-r from-[#5E3928] to-[#E4A16F] font-bold text-lg'>Купить</button>
            </div>
        </SwiperSlide>
        <SwiperSlide className='swiperrr flex flex-col justify-start'>
            <span  className=' text-8xl mb-12'>Хит продаж</span>
            <div className="line h-[2px] bg-gradient-to-r from-white to-transparent w-[600px]"></div>
            <div className="info mt-12  w-[600px] flex flex-col items-start">
                <h1 className=' font-bold text-5xl text-left mb-[40px]'>Дистиллятор для эфирных масел </h1>
                <div className="price flex gap-24 mb-[40px]">
                    <span className='font-thin text-3xl'>Цена</span>
                    <span className='font-bold text-3xl'>4 906 грн</span>
                </div>
                <button className=' py-4 px-32 bg-gradient-to-r from-[#5E3928] to-[#E4A16F] font-bold text-lg'>Купить</button>
            </div>
        </SwiperSlide>
        <SwiperSlide className='swiperrr flex flex-col justify-start'>
            <span  className=' text-8xl mb-12'>Хит продаж</span>
            <div className="line h-[2px] bg-gradient-to-r from-white to-transparent w-[600px]"></div>
            <div className="info mt-12  w-[600px] flex flex-col items-start">
                <h1 className=' font-bold text-5xl text-left mb-[40px]'>Дистиллятор для эфирных масел </h1>
                <div className="price flex gap-24 mb-[40px]">
                    <span className='font-thin text-3xl'>Цена</span>
                    <span className='font-bold text-3xl'>4 906 грн</span>
                </div>
                <button className=' py-4 px-32 bg-gradient-to-r from-[#5E3928] to-[#E4A16F] font-bold text-lg'>Купить</button>
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default SectionFirst