import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

function Modal(props) {

    const { isOpen, closeModal, children } = props;
    console.log(isOpen)

    const Title = Styled.h2`
  color: #00f;
`;

    // 您必須使用`Modal.setAppElement（el）`設置元素，以使其可訪問
    useEffect(() => {
        ReactModal.setAppElement('#root');
    }, []);

    // const [modalIsOpen, setIsOpen] = React.useState(false);
    // function openModal() {
    //     setIsOpen(true);
    // }

    let subtitle;
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    // function closeModal(e) {
    //     e.stopPropagation();
    //     setIsOpen(false);
    //     console.log('closeModal')
    // }
    // function onSubmit(e) {
    //     console.log('onSubmit')
    // }
    return (
        <ReactModal
            isOpen={isOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
        >
            <Title ref={_subtitle => (subtitle = _subtitle)}>Hello</Title>

            {children}

        </ReactModal>
    )
}

Modal.propTypes = {
    children: PropTypes.node
    // open: PropTypes.bool,
    // onClose: PropTypes.func,
    // productId: PropTypes.string,
};

Modal.defaultProps = {
    // open: false,
    // onClose: () => {},
    // productId: null,
};

export default Modal;