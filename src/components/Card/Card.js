import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Card =  props => {

    const getStyleCard = () =>{
        switch (props.statusTask) {
            case 'urgent':
                return 'card--urgent';

            case 'bugFix':
                return 'card--bugFix';

            case 'features':
            return 'card--features';

            default:
                return 'card--urgent';
        }
    }

    return (
        <div 
        draggable={props.draggable} 
        onDragOver={e=>props.dragOverHandler(e)}
        onDragLeave={e=>props.dragLeaveHandler(e)}
        onDragStart={e=>props.dragStartHandler(e,props.board,props.item)}
        onDragEnd={e=>props.dragEndHandler(e)}
        onDrop={e=>props.dropHandler(e,props.board,props.item)}
        onClick={()=>props.openModal(props.item)}
        className={`${'card'} ${getStyleCard()}`}>
          <p>{props.task}</p>
        </div>
    )
}

Card.propTypes = {
task: PropTypes.string,
statusTask: PropTypes.oneOf(['urgent','bugFix','features']),
draggable: PropTypes.bool,
board: PropTypes.object,
item: PropTypes.object,
dragOverHandler: PropTypes.func,
dragLeaveHandler: PropTypes.func,
dragStartHandler: PropTypes.func,
dragEndHandler: PropTypes.func,
dropHandler: PropTypes.func,
openModal: PropTypes.func
}

Card.defaultProps = {
task: '',
statusTask: 'urgent',
draggable: true,
board: {},
item: {},
dragOverHandler: ()=>{},
dragLeaveHandler: ()=>{},
dragStartHandler: ()=>{},
dragEndHandler: ()=>{},
dropHandler: ()=>{},
openModal: ()=>{},
}


export default React.memo(Card);