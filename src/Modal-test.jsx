import React from 'react';
import { useState } from 'react';
import './App.css';
import Modal from './Modal';

function Modaltest() {
  const [showModal, setShowModal] = useState(false);

  function handleModalPop() {
    setShowModal(!showModal);
  }
  function onClose() {
    setShowModal(false);
  }

  return (
    <div>
      <button onClick={handleModalPop}>Open Modal popUp</button>
      {showModal && (
        <Modal
          id={'custom-id'}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
}

export default Modaltest;
