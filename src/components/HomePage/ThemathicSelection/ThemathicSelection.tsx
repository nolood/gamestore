import React, {FC, useEffect, useState} from 'react';
import MiniCardItem from "../MiniCardItem/MiniCardItem";
import {CarouselTypes} from "../Carousel/CarouselTypes";
import {useAppDispatch} from "../../../hooks/useReduxHooks";
import {API_KEY} from "../../../utils/consts";
import {setLatestGamesItems, setRecentUpdatedGamesItems, setTopRatedGamesItems} from "../../../store/slices/userSlice";
import Loader from "../../UI/Loader";

interface ThemathicSelectionProps {
    ordering: string
}

const ThemathicSelection: FC<ThemathicSelectionProps> = ({ordering}) => {

    const [games, setGames] = useState([]);

    const dispatch = useAppDispatch()
    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=5&ordering=${ordering}`)
            .then(response => response.json())
            .then(data => {
                const gamesList = data.results.map((gameItem: CarouselTypes) => {
                    return {
                        name: gameItem.name,
                        background_image: gameItem.background_image,
                        id: gameItem.id,
                        short_screenshots: gameItem.short_screenshots
                    }
                })
                setGames(gamesList)
                if (ordering === 'rated') {
                    dispatch(setTopRatedGamesItems(gamesList))
                } else if (ordering === 'released') {
                    dispatch(setLatestGamesItems(gamesList))
                } else if (ordering === 'updated') {
                    dispatch(setRecentUpdatedGamesItems(gamesList))
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, [])

    if (games.length === 0) return <Loader/>

    return (
        <div className='themathicselection__list'>
            {games.map((item: CarouselTypes) =>
                <MiniCardItem key={item.id} game={item}/>
            )}
            <div className='minicard__item empty'>
                <span>More games →</span>
            </div>
        </div>
    );
};

export default ThemathicSelection;
