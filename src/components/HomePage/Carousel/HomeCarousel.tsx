import React, {useEffect, useState} from 'react';
import {API_KEY} from "../../../utils/consts";
import { motion, AnimatePresence } from "framer-motion";
import {wrap} from "popmotion";
import './HomeCarouselStyle.scss'
import {useAppDispatch, useAppSelector} from "../../../hooks/useReduxHooks";
import {setHomepageCarouselItems} from "../../../store/slices/userSlice";
import {CarouselTypes} from "./CarouselTypes";

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};


const HomeCarousel = () => {
    const homepageCarousel = useAppSelector(state => state.user.homepageCarouselItems)

    const images = homepageCarousel
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, images.length, page);
    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };


    const dispatch = useAppDispatch()
    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=10&ordering=-updated`)
            .then(response => response.json())
            .then(data => {
                const gamesList = data.results.map((gameItem: CarouselTypes) => {
                    return {
                        name: gameItem.name,
                        background_image: gameItem.background_image,
                        id: gameItem.id
                    }
                })
                dispatch(setHomepageCarouselItems(gamesList))
            })
            .catch(error => {
                console.error(error);
            });
    }, [])


    return (
        <div className='slider__container'>
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    className='carousel__img'
                    key={page}
                    src={images[imageIndex].background_image}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0, top: 0}}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                />
            </AnimatePresence>
            <div className="next" onClick={() => paginate(1)}>
                {"‣"}
            </div>
            <div className="prev" onClick={() => paginate(-1)}>
                {"‣"}
            </div>
            <span className='carousel__name'>{images[imageIndex].name}</span>
        </div>
    );
};

export default HomeCarousel;
