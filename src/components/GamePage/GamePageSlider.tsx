import React, {FC, useEffect, useState} from 'react';
import GamePageSliderPreview from "./GamePageSliderPreview";

interface GamePageSliderProps {
    images: Array<{id: number, image: string}>,
    image: string
}

const GamePageSlider: FC<GamePageSliderProps> = ({images, image}) => {


    const [currentImage, setCurrentImage] = useState(1);

    const nextImage = () => {
        if (currentImage === images.length - 1) {
            setCurrentImage(1)
        } else {
            setCurrentImage((prev) => prev + 1)
        }
    }

    const prevImage = () => {
        if (currentImage === 1) {
            setCurrentImage(images.length - 1)
        } else {
            setCurrentImage((prev) => prev - 1)
        }
    }

    return (
        <div className='slider__wrapper'>
            <img className='slider__img' src={images[currentImage]?.image ? images[currentImage]?.image : image} alt=''/>
            <div className="next" onClick={() => nextImage()}>
                {"‣"}
            </div>
            <div className="prev" onClick={() => prevImage()}>
                {"‣"}
            </div>
            {images.length > 0 && <div className='slider__preview-list'>
                {images.map((imagePreview, index) =>
                    <React.Fragment key={imagePreview.id}>{index > 0 &&
                      <GamePageSliderPreview image={imagePreview.image} index={index}
                                             currentImage={currentImage}/>}</React.Fragment>
                )}
            </div>}
        </div>
    );
};

export default GamePageSlider;
