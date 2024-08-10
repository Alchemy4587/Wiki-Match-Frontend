import React from "react";
import Modal from "./modal";

function Congratulations() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button
        onClick={openModal}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Show Congratulations
      </button>
      <p>Congratulations! Your changes have been saved successfully.</p>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Congratulations!">
        <>
          <p>Congratulations! Your changes have been saved successfully.</p>
        </>
      </Modal>
    </>
  );
}

export default Congratulations;
