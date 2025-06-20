import ReactDOM from "react-dom";
import "../../styles/image_modal.scss";
import CarousalView from "./Carousal_image_view";
import "../../styles/carousal.scss";
type ImageModalProps = {
  imageUrl: string[];
  open: boolean;
  initialIndex: number; // Optional prop to control initial index
  // Optional prop to control animation
  onClose?: () => void;
};
const ImageModalCustom = ({
  imageUrl,
  open,
  onClose,
  initialIndex,
}: ImageModalProps) => {
  return open
    ? ReactDOM.createPortal(
        <div className="modal-backdrop" onClick={() => onClose}>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <CarousalView
              disableModal={true} // Disable modal functionality
              initialIndex={initialIndex}
              images={[...imageUrl]}
              className="carousel-preview-wrapper-large"
            />
          </div>
        </div>,
        document.body //
      )
    : null;
};
export default ImageModalCustom;
