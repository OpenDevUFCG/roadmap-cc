import React from 'react';

 const Modal = props => {
    
    return (
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="modal__header">
                    <h4 className="modal__title">Modal title</h4>
                </div>
                <div className="modal__body">
                    This is modal content
                </div>
                <div className="modal__footer">
                    <button onClick={props.onClose} className="modal__btn">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;