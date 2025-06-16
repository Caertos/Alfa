import { useState, useRef, useEffect } from "react";
import carouselImages  from "../../assets/carouselImages/carouselImages";
import "./sliderStyle.css";

export default function Slider() {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

        if(imgNode) {
                imgNode.scrollIntoView({
                        behavior: "smooth",
                })
        }
    },[currentIndex])

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
                const isFirstImage = currentIndex === 0;
                setCurrentIndex(curr => {
                        return isFirstImage ? carouselImages.length - 1 : curr - 1
                })
        } else if (direction === 'next') {
                const isLastImage = currentIndex === carouselImages.length - 1;
                setCurrentIndex(curr => {
                        return isLastImage ? 0 : curr + 1
                })
        }
    }

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current !== null && touchEndX.current !== null) {
            const distance = touchStartX.current - touchEndX.current;
            if (distance > 50) {
                scrollToImage('next');
            } else if (distance < -50) {
                scrollToImage('prev');
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <div className="slider-container">
                <a onClick={() => scrollToImage('prev')}><img className="leftArrow" src="/l-arrow.svg" alt="prev" /></a>
                <a onClick={() => scrollToImage('next')}><img className="rightArrow" src="/r-arrow.svg" alt="next" /></a>
            <div
                className="images-container"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <ul ref={listRef}>
                    {carouselImages.map((item) => {
                        return (
                            <li key={item.id}>
                                <img className="slider-image" src={item.imgUrl} alt={item.alt} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
