import parrot from '../../assets/parrot.jpg'
import lion from '../../assets/lion.jpg'
import ziraf from '../../assets/zirraf.jpg'
import zebra from '../../assets/zebra.jpg'
import crocodile from '../../assets/crocodile.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';




const WhatsNew = () => {
    return (
        <>
            <div className='text-center mt-36 bg'>
                <h3 className='text-green-700 text-4xl mb-3'>What's New</h3>
                <p className='text-slate-500 mb-3'>Here are some latest toys. You can explore the sub categories and buy the one you like ...</p>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper drop-shadow-lg mt-20"
            >
                <SwiperSlide><img className='h-72  pl-10' src={parrot} alt="" /><h1 className='text-2xl p-5 pl-10'>Parrot <br /> $50</h1></SwiperSlide>
                <SwiperSlide><img className='h-72 pl-10' src={crocodile} alt="" /><h1 className='text-2xl p-5 pl-10'>Crocodile <br /> $36</h1></SwiperSlide>
                <SwiperSlide><img className='h-72 pl-10' src={ziraf} alt="" /><h1 className='text-2xl p-5 pl-10'>Giraffe  <br /> $40</h1></SwiperSlide>
                <SwiperSlide><img className='h-72 pl-10'src={zebra} alt="" /><h1 className='text-2xl p-5 pl-10'>Zebra  <br /> $22</h1></SwiperSlide>
                <SwiperSlide><img className='h-72 pl-10' src={lion} alt="" /><h1 className='text-2xl p-5 pl-10'>Lion <br /> $84</h1></SwiperSlide>
                
                
            </Swiper>
        </>
    );
};

export default WhatsNew;