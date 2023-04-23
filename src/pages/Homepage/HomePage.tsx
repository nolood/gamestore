import React from 'react';
import HomeCarousel from "../../components/HomePage/Carousel/HomeCarousel";
import './HomePageStyle.scss'
import ThemathicSelection from "../../components/HomePage/ThemathicSelection/ThemathicSelection";
import {motion} from "framer-motion";
import {HomePageTSelectionAnim} from "../../components/HomePage/Animations/HomePageAnimations";

const HomePage = () => {
    return (
        <section className='section main'>
            <div className='container home__wrapper'>
                <h1 className='carousel__title'>Top 10 random games</h1>
                <HomeCarousel/>
            </div>
            <motion.div
                className='container home__wrapper'
                initial={HomePageTSelectionAnim.initial}
                whileInView={HomePageTSelectionAnim.visible}
                transition={HomePageTSelectionAnim.transition}
            >
                <h1 className='themathicselection__title'>Top rated games</h1>
                <ThemathicSelection ordering={'rated'}/>
            </motion.div>
            <motion.div
                className='container home__wrapper'
                initial={HomePageTSelectionAnim.initial}
                whileInView={HomePageTSelectionAnim.visible}
                transition={HomePageTSelectionAnim.transition}
            >
                <h1 className='themathicselection__title'>Top latest games</h1>
                <ThemathicSelection ordering={'released'}/>
            </motion.div>
            <motion.div
                className='container home__wrapper'
                initial={HomePageTSelectionAnim.initial}
                whileInView={HomePageTSelectionAnim.visible}
                transition={HomePageTSelectionAnim.transition}
            >
                <h1 className='themathicselection__title'>Top recent updates games</h1>
                <ThemathicSelection ordering={'updated'}/>
            </motion.div>
        </section>
    );
};

export default HomePage;
