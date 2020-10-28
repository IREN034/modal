import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';

import { api } from './helpers/api';

function App() {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function handleModalClose() {
    setIsOpen(false);
  }
  function onSubmit(e) {
    console.log('onSubmit')
  }
  return (
    <div className="App">

      {api.map(list => (
        <div key={list.classification}>{list.classification}</div>
      ))}
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          closeModal={handleModalClose}>
          <button onClick={onSubmit}>onSubmit</button>

          <div>I am a modal</div>
        </Modal>
      </div>
    </div>
  );
}

export default App;
