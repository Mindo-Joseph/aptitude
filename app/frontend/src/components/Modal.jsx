import { useState } from "react";

export const Modal = ({ children, buttonText, className }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className={`bg-indigo-600 text-white text-base py-2 px-4 rounded ${className}`}
      >
        {buttonText}
      </button>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 align-middle sm:max-w-lg sm:w-full">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;