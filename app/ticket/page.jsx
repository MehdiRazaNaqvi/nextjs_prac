
"use client";
import styles from "./style.css"
// import "./responsive.css"
import Navbar from "../component/navbar"






import Image from "next/image"

import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { AiFillStar } from "react-icons/ai"

import Comment from "../../components/comment"
import Review from "../../components/review/review"
import Corosoul from "../../components/Corousel/corosoul"

const Post = () => {









    return (


        <div className="main_screen_base">

            {/* <Navbar /> */}

            <Corosoul />
            <Review />

            <Comment />


            <Image className="page_bottom_cover" src="/cover.png" width={1000} height={200}></Image>



        </div >

    )

}

export default Post