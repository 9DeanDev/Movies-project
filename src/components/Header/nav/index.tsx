import React from 'react'
import styles from './styles.module.scss'
import NavChild from './navChild'
import { ImHome3 } from "react-icons/im";
import { FaFireAlt } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa6";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";

type Props = {}

export default function Nav({ }: Props) {
    return (
        <div className={styles.nav} >
            <NavChild url='/' icon={<ImHome3 size='20px' />} title='Home' />
            <NavChild url='/popular' icon={<FaFireAlt size='20px' />} title='Trending' />
            <NavChild url='/explore' icon={<FaRegCompass size='20px' />} title='Explore' />
            <NavChild url='/top_rated' icon={<PiTelevisionSimpleBold size='20px' />} title='Top Rated' />
            <NavChild url='/movie' icon={<FaRegHeart size='20px' />} title='Movies' />
        </div>
    )
}