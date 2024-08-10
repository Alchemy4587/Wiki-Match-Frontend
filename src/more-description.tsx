import React, { useState } from 'react'
import Modal from './modal'

function MoreDescription() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
};
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
   <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Show Image</button>

      <Modal isOpen={isModalOpen}  onClose={closeModal} title="Description" >
        
        <>
          <img src="https://via.placeholder.com/150" alt="Placeholder" className="mb-4" />
          <p>This is a description of the image.</p>
        </>
      </Modal>

    </div>
  )
}

export default MoreDescription
