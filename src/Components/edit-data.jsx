import React from "react";
import Modal from "./modal";
import { useState } from "react";


function ConfirmEditData({isOpen,closeModal}) {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
// };
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={closeModal} title="Description">
        <>
          {/* <button
            onClick={openModal}
            className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
          >
            Confirm Edit
          </button> */}
          <>
            <p>Are you sure you want to edit this item?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="mr-2 bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={closeModal}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Confirm
              </button>
            </div>
          </>
        </>
      </Modal>
    </div>
  );
}

export default ConfirmEditData;