import React, {useEffect, useState} from 'react';
import './GamePageStyle.scss'
import GamePageSlider from "../../components/GamePage/GamePageSlider";
import {GameTypes} from "../../components/GamePage/GamePageTypes";
import GamePageInfo from "../../components/GamePage/GamePageInfo";
import {API_KEY} from "../../utils/consts";
import {useParams} from "react-router-dom";
import BackBtn from "../../components/UI/BackBtn";

const GamePage = () => {

    const {id} = useParams()
    const [gameInfo, setGameInfo] = useState<GameTypes>()
    const [images, setImages] = useState<{results: Array<{id: number, image: string}>}>()

    useEffect(() => {
        const fetchInfo = async () => {
            const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
            const data = await response.json()
            setGameInfo(data)
        }
        const fetchImages = async () => {
            const response = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${API_KEY}`);
            const data = await response.json()
            setImages(data)
        }
        if (!gameInfo || !images) {
            fetchInfo()
            fetchImages()
        }
    }, [])


    if (!gameInfo || !images) {
        return <div>Loading</div>
    }
    return (
        <section className='section main'>
            <div className='container gamepage__wrapper'>
                <BackBtn/>
                <h1 className='gamepage__title'>{gameInfo.name}</h1>
                <GamePageSlider images={images.results} image={gameInfo.background_image}/>
            </div>
            <div className='container gamepage__wrapper'>
                <h1 className='gameinfo__title'>Informations</h1>
                <GamePageInfo info={gameInfo}/>
            </div>
        </section>
    );
};

export default GamePage;
