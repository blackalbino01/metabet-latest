import React, { useState } from "react";

const Modals = () => {
  const [parentModalOpen, setParentModalOpen] = useState(false);
  const [childModalOpen, setChildModalOpen] = useState(false);

  const handleOpenParentModal = () => {
    setParentModalOpen(true);
  };

  const handleCloseParentModal = () => {
    setParentModalOpen(false);
    setChildModalOpen(false);
  };

  const handleOpenChildModal = () => {
    setChildModalOpen(true);
  };

  const handleCloseChildModal = () => {
    setChildModalOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenParentModal}>Open Parent Modal</button>
      {parentModalOpen && (
        <button onClose={handleCloseParentModal}>
          <p>This is the content of the parent modal</p>
          <button onClick={handleOpenChildModal}>Open Child Modal</button>
          {childModalOpen && (
            <button onClose={handleCloseChildModal}>
              <p>This is the content of the nested modal</p>
            </button>
          )}
        </button>
      )}
    </>
  );
};

export default Modals;
