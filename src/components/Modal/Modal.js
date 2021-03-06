import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Modal =  props => {

    return (
       <div 
       className={props.modalActive ? 'modal active' : 'modal'}
       onClick={props.closeModal}
       >
        <div 
        className={props.modalActive ? 'modal__content active':'modal__content'} 
        onClick={e=>e.stopPropagation()}
        >
            {props.children}
        </div>
      </div>
    )
}

Modal.propTypes = {
modalActive: PropTypes.bool,
closeModal: PropTypes.func,
}

Modal.defaultProps = {
modalActive: false,
closeModal: ()=>{},
}


export default React.memo(Modal);