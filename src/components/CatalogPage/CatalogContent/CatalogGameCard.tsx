import React, {FC} from 'react';
import {GameCardTypes} from "./GameCardTypes";
import {motion} from "framer-motion";
import {HomePageTSelectionAnim} from "../../HomePage/Animations/HomePageAnimations";
import {useNavigate} from "react-router-dom";
import {GAME_ROUTE} from "../../../utils/consts";

interface CatalogGameCardProps {
    gameCardInfo: GameCardTypes
}

const CatalogGameCard: FC<CatalogGameCardProps> = ({gameCardInfo}) => {
    const navigate = useNavigate()
    return (
        <motion.div
            className='gamecard'
            initial={HomePageTSelectionAnim.initial}
            whileInView={HomePageTSelectionAnim.visible}
            transition={HomePageTSelectionAnim.transition}
            onClick={() => navigate(GAME_ROUTE + '/' + gameCardInfo.id)}
        >
            <img src={gameCardInfo.background_image} alt=''/>
            <h1>{gameCardInfo.name}</h1>
            {gameCardInfo.released && <span>Released: {gameCardInfo.released.split('-').reverse().join('.')}</span>}
            {gameCardInfo.rating && <span>Rating: {gameCardInfo.rating}</span>}
            {gameCardInfo.genres &&
              <span>Genres: {gameCardInfo.genres.map((genre, index) =>
                  <React.Fragment
                      key={genre.id}
                  >
                      {index !== gameCardInfo.genres.length-1 ? <>{genre.name}, </> : <>{genre.name}</>}
                  </React.Fragment>
              )}
              </span>
            }
            {gameCardInfo.platforms &&
              <span>Platforms: {gameCardInfo.platforms.map((platform, index) =>
                  <React.Fragment
                      key={platform.platform.id}
                  >
                      {index !== gameCardInfo.platforms.length-1 ? <>{platform.platform.name}, </> : <>{platform.platform.name}</>}
                  </React.Fragment>
              )}
              </span>
            }
        </motion.div>
    );
};

export default CatalogGameCard;
