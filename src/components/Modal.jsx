import React from "react";

const Modal = ({ imageUrl, setOpen }) => {
  const handleClose = (e) => {
    if (e.target.className.includes("modal-overlay")) {
      setOpen(false);
    }
  };
  return (
    <div
      onClick={handleClose}
      className="modal-overlay w-full h-full z-30 fixed top-0 left-0 bg-[#00000096] flex items-center justify-center"
    >
      <div
        className="bg-white pt-16 px-8 pb-8 rounded-lg max-w-[500px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-xl cursor-pointer"
        >
          X
        </span>
        <img className="w-full" src={imageUrl} alt="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
