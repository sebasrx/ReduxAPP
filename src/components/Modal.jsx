import React from 'react';
import { createPortal } from "react-dom";
import '../assets/styles/components/Modal.scss';
import SVGStar  from '../assets/static/icons/x.svg';

const Modal = (props) => (
    props.isOpen ?
    createPortal(
        <div className='modal'>
            <figure onClick={props.onClose}>
                <SVGStar className='modal__close-icon'/>
            </figure>
            <div>{props.children}</div>
        </div>,
        document.getElementById('modal'),
    ) :
    ""
);  

export default Modal;