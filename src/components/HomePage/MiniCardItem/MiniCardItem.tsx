import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {GAME_ROUTE} from "../../../utils/consts";

interface MiniCardItemProps {
    game: {
        name: string,
        background_image: string,
        id: number,
        short_screenshots: Array<{id: number, image: string}>
    }

}

const MiniCardItem: FC<MiniCardItemProps> = ({game}) => {
    const navigate = useNavigate()

    const navigateToGame = () => {
        navigate(GAME_ROUTE + '/' + game.id)
    }
    return (
        <div onClick={() => navigateToGame()} className='minicard__item'>
            <img src={game.background_image} alt=''/>
            <div className='minicard__item-bar'>
                <span>{game.name}</span>
            </div>
        </div>
    );
};

export default MiniCardItem;
