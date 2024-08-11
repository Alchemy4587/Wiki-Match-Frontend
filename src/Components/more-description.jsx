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
      <button onClick={openModal} className="text-white px-4 py-2 rounded mr-2">Show Image</button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="More Details" >
      <div className="flex justify-center items-center">
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-auto">
      <img src="https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D" alt="Card Image" className="w-full h-50 object-cover rounded-lg" />
      <div className="p-6 flex flex-col">
        <h3 className=" mb-2 font-bold text-2xl">Card Title</h3>
        <p className="text-gray-600 text-sm">This is a description of the card content.</p>
      </div>
    </div>
  </div>
      </Modal>

    </div>
  )
}

export default MoreDescription