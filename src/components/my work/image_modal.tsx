import ReactDOM from "react-dom";
import "../../styles/image_modal.scss";
type ImageModalProps = {
  imageUrl: string;
    open: boolean;
    onClose?: () => void;
};
const ImageModalCustom = ({imageUrl, open, onClose}:ImageModalProps) => {
  

  return open ? ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={() => onClose}>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} />
      </div>
    </div>
    ,
     document.body //
  ) : null;
};
export default ImageModalCustom;
