import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    background: "#0009"
  },
  content: {
    background: '#282c34',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    maxWidth: '90%',
    borderRadius: '10px'
  }
};

export default function PostModal(props) {
    /** Uses react modal to create a quick and easy modal. */
    const {title, body, name, catchPhrase} = props
    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <div className="title" onClick={() => openModal()}>
                <h3>{title}</h3>
            </div>

        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Post Modal"
        >
            <h1>{title}</h1>
            <p>{body}</p>
            <p>Author: {name}</p>
            <p>Catch Phrase: {catchPhrase}</p>
            <button className="" onClick={() => closeModal()}>Exit</button>
            <div ref={_subtitle => (subtitle = _subtitle)}></div>
        </Modal>
        </div>
    );
}