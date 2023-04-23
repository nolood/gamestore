import React, {FC} from 'react';

interface GamePageSliderPreviewProps {
    image: string,
    currentImage: number,
    index: number
}

const GamePageSliderPreview: FC<GamePageSliderPreviewProps> = ({image, currentImage, index}) => {
    return (
        <div className={currentImage === index ? 'slider__preview-item border' : 'slider__preview-item'}>
            <img src={image} alt=''/>
        </div>
    );
};

export default GamePageSliderPreview;
