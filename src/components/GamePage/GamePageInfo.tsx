import React, {FC} from 'react';
import {motion} from "framer-motion";
import {HomePageTSelectionAnim} from "../HomePage/Animations/HomePageAnimations";
import {GameTypes} from "./GamePageTypes";

export interface GamePageInfoProps {
    info: GameTypes
}

const GamePageInfo: FC<GamePageInfoProps> = ({info}) => {
    return (
        <>
            <motion.div
                className='gameinfo'
                initial={HomePageTSelectionAnim.initial}
                whileInView={HomePageTSelectionAnim.visible}
                transition={HomePageTSelectionAnim.transition}
            >
                <div className='gameinfo-left'>
                    {info.name && <span className='gameinfo__text'>Name: <span>{info.name}</span></span>}
                    {info.description_raw ? <span className='gameinfo__text'>Description: <p>{info.description_raw}</p></span> : null}
                    {info.creators_count ? <span className='gameinfo__text'>Creators count: <span>{info.creators_count}</span></span> : null}
                    {info.genres.length > 0 && <span className='gameinfo__text'>Genres:
                        <span> {info.genres.map((genre, index) =>
                            <React.Fragment
                                key={genre.id}
                            >
                                {index !== info.genres.length-1 ? <>{genre.name}, </> : <>{genre.name}</>}
                            </React.Fragment>)}
                        </span>
                    </span>}
                    {info.rating ? <span className='gameinfo__text'>Rating: <span>{info.rating}</span></span> : null}
                </div>
                <div className='gameinfo-right'>
                    {info.developers.length > 0 && <div className='gameinfo-right__item'>
                        <span className='gameinfo__text'>Developers:</span>
                        <div className='gameinfo__list'>
                            {info.developers.map((develop) =>
                                <div className='gameinfo__list-item' key={develop.id}>
                                    <img src={develop.image_background} alt=''/>
                                    <span>{develop.name}</span>
                                </div>
                            )}
                        </div>
                    </div>}
                    {info.platforms.length > 0 && <div className='gameinfo-right__item'>
                        <span className='gameinfo__text'>Platforms:</span>
                        <div className='gameinfo__list'>
                            {info.platforms.map((platform) =>
                                <div className='gameinfo__list-item' key={platform.platform.id}>
                                    <img src={platform.platform.image_background} alt=''/>
                                    <span>{platform.platform.name}</span>
                                </div>
                            )}
                        </div>
                    </div>}
                    {info.stores.length > 0 && <div className='gameinfo-right__item'>
                        <span className='gameinfo__text'>Publishers:</span>
                        <div className='gameinfo__list'>
                            {info.stores.map((store) =>
                                <div className='gameinfo__list-item' key={store.store.id}>
                                    <img src={store.store.image_background} alt=''/>
                                    <span>{store.store.name}</span>
                                </div>
                            )}
                        </div>
                    </div>}
                </div>
            </motion.div>
            <motion.div
                className='gamerequirements'
                initial={HomePageTSelectionAnim.initial}
                whileInView={HomePageTSelectionAnim.visible}
                transition={HomePageTSelectionAnim.transition}
            >

            </motion.div>
        </>
    );
};

export default GamePageInfo;
