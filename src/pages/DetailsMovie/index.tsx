import { useEffect, useState } from 'react'
import ContainerAfterHeader from '../../components/Banner'
import { axiosClient } from '../../config/axiosClient'
import styles from './styles.module.scss'
import { useParams } from 'react-router-dom'

type Props = {

}

interface Genres {
    id: number,
    name: string,
}

interface dataType {
    id: number;
    backdrop_path: string;
    original_title: string;
    genres: Genres[];
    release_date: string;
    original_language: string;
    runtime: number;
    vote_average: number;
    overview: string;
    poster_path: string;
}

export default function DetailsMovie({ }: Props) {
    const [data, setData] = useState<dataType>();
    const { id } = useParams();

    const getData = async (id: any) => {
        let response = await axiosClient.get(id, {
            headers: { Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8' }
        });
        setData(response.data);
    };

    useEffect(() => {
        getData(id)
    }, []);

    let background = 'https://www.themoviedb.org/t/p/w220_and_h330_face' + data?.backdrop_path;
    let thumb = 'https://www.themoviedb.org/t/p/w220_and_h330_face' + data?.poster_path;
    console.log('>>>>>', data)

    return (
        <div>
            {data &&
                <div>
                    <ContainerAfterHeader background={background} title1={data.original_title} release_date={data.release_date} action='Watch the trailer'
                    // g1={data.genres[0].name} g2={data.genres[1].name} g3={data.genres[2].name} 
                    />
                    <div className={styles.container}>
                        <div className={styles.img}>
                            <img src={thumb} alt="" />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.title}>
                                {data.original_title} ({data.release_date.slice(0, 4)})
                            </div>
                            <div>
                                Release Date: {data.release_date}
                            </div>
                            <div>
                                Genres: {data.genres.map((item, index) => {
                                    return (
                                        <span key={index} style={{ marginRight: '16px' }}>
                                            {item.name}
                                        </span>
                                    )
                                })}
                            </div>
                            <div>
                                Run Time: {Math.floor(data.runtime / 60)}h {data.runtime % 60}phút
                            </div>
                            <h5>
                                Over View:
                            </h5>
                            <div className={styles.overview}>
                                {data.overview}
                            </div>
                            <div>
                                Movie Cast
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}