import { ReactNode, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { axiosClient } from '../../config/axiosClient';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { FaPlayCircle } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';


type Props = {
    url: string;

}

export default function SlideFilm({ url }: Props) {
    let [data, setData] = useState([])
    const getData = async () => {
        let response = await axiosClient.get(url, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8'
            }
        })
        setData(response.data.results)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <Swiper modules={[Navigation, Pagination, Scrollbar]}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true, bulletActiveClass: 'hidden' }}
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 25
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 25
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
            }}>
            {data.map((item: any, index: any) => {
                const thumb = `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`
                return (
                    <SwiperSlide>
                        <Link to={`/movie/${item.id}`}>
                            <div className={`${styles.swiper}`}>
                                <div className={styles.img} >

                                </div>
                                <img src={thumb} />
                                <h3 className={`${styles.title}`}>
                                    {
                                        item.title
                                    }
                                </h3>
                                <span className={styles.type}>action</span>
                                <a href="" className={styles.btn}>
                                    <FaPlayCircle className={styles.icon} />
                                </a>
                            </div>
                        </Link>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}