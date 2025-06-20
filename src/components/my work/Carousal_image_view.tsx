import { useState, useRef, useEffect } from "react";
import "../../styles/carousal.scss";
import ImageModalCustom from "./image_modal";
type CarousalViewProps = {
  images: string[];
  animate?: boolean;
  className?: string;
  initialIndex?: number;
  disableModal?: boolean; // Optional prop to disable modal
};
const AUTO_SCROLL_INTERVAL = 3000; // 3 seconds

const CarousalView = ({
  images,
  animate,
  className,
  initialIndex = 0,
  disableModal = false,
}: CarousalViewProps) => {
  const [index, setIndex] = useState(initialIndex);
  const [slideClass, setSlideClass] = useState("");
  const [modalImageIndx, setModalImageIndex] = useState<number>(initialIndex);
  const touchStartX = useRef<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const prevIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;
  useEffect(() => {
    if (!animate) return;
    slideTo(nextIndex, "right");
  }, [animate]);
  useEffect(() => {
    if (!animate) return;
    // If animation is not enabled, skip the auto-scroll
    const timer = setInterval(() => {
      slideTo(nextIndex, "right");
    }, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(timer);
  }, [images.length, nextIndex, animate]);

  const slideTo = (newIndex: number, direction: string) => {
    setSlideClass(direction === "left" ? "slide-out-left" : "slide-in-right");
    setTimeout(() => {
      setIndex(newIndex);
      setSlideClass(direction === "left" ? "slide-in-right" : "slide-out-left");
      setTimeout(() => setSlideClass("slide-in"), 20);
    }, 500);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };
  if (images.length === 0) {
    return null;
  } else if (images.length === 1) {
    return (
      <div className="carousel-preview-wrapper">
        <img src={images[0]} alt="Single Image" className="carousel-main" />
      </div>
    );
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        slideTo(nextIndex, "left");
      } else {
        slideTo(prevIndex, "right");
      }
    }
    touchStartX.current = null;
  };

  return (
    <>
      <div
        className={className ? className : "carousel-preview-wrapper"}
        tabIndex={0}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[prevIndex]}
          alt="Previous"
          className="carousel-preview prev"
          onClick={() => slideTo(prevIndex, "left")}
        />
        <img
          src={images[index]}
          alt="Current"
          className={`carousel-main  ${slideClass}`}
          onClick={() => {
            setModalOpen(true);
            //rearrange the images so that image of index to be the first image without changing the order

            setModalImageIndex(index); // Set the image to be displayed in the modal
          }}
          style={{ cursor: "pointer" }}
        />
        <img
          src={images[nextIndex]}
          alt="Next"
          className="carousel-preview next"
          onClick={() => slideTo(nextIndex, "right")}
        />
        {disableModal ? null : (
          <ImageModalCustom
            imageUrl={[...images]}
            open={modalOpen}
            initialIndex={modalImageIndx}
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>
    </>
  );
};
export default CarousalView;
