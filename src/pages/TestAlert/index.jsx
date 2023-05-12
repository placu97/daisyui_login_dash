import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function TestAlert() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modal = (
	<Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
        <h2>Titolo del Modale</h2>
        <p>Descrizione del Modale</p>
      </Modal>
  )

  return (
    <div className=" font-kd text-black bg-white h-screen">
      <button onClick={() => setModalIsOpen(true)}>Apri Modale</button>
      {modalIsOpen && modal}
    </div>
  );
}

export default TestAlert;
