import React, { useState } from "react";
import "../../styles/image_modal.scss";
import image from "../../assets/coding.png";

const ImageModalCustom = (imageUrl:string) => {
  const [open, setOpen] = useState(true);

  return open ? (
    <div className="modal-backdrop" onClick={() => setOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} />
      </div>
    </div>
  ) : null;
};
export default ImageModalCustom;
