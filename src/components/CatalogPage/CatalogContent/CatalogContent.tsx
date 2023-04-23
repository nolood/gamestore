import React, {FC} from 'react';
import CatalogGameCard from "./CatalogGameCard";

interface CatalogContentProps {
    gamesList: Array<{
        name: string,
        background_image: string,
        id: number,
        released: string,
        rating: number,
        platforms: Array<{platform: {name: string, id: number}}>
        genres: Array<{id: number, name: string}>
    }>
}

const CatalogContent: FC<CatalogContentProps> = ({gamesList}) => {
    return (
        <div className='catalog__games-list'>
            {gamesList.map((gameItem) =>
                <CatalogGameCard key={gameItem.id} gameCardInfo={gameItem}/>
            )}
        </div>
    );
};

export default CatalogContent;
