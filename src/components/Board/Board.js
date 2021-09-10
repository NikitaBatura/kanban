import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Board =  props => {

    const getDimensionHeader = () =>{
    const style = props.typeHeader.toLowerCase()==='full'?"board__header--full" : "board__header--short";
    return style;
    }

    return (
        <div 
        className={`${'board'} ${props.className}`}
        onDragOver={e=>props.dragOverHandler(e)}
        onDrop={e=>props.dropCardHandler(e,props.board)}
        >
          <div 
          className={`${"board__header"} ${getDimensionHeader()} ${props.classNameHeader}`}
          style={{color: props.titleColor, backgroundColor: `rgb(${props.headerBackgroundColor})`}}
          >
          {props.title}
          </div>
          <div className="board__content">
              {props.children}
          </div>
        </div>
    )
}

Board.propTypes = {
title: PropTypes.string,
className: PropTypes.string,
classNameHeader: PropTypes.string,
typeHeader: PropTypes.oneOf(['full', 'short']),
titleColor: PropTypes.oneOf(['black','white']),
headerBackgroundColor: PropTypes.string,
board: PropTypes.object,
dropCardHandler: PropTypes.func,
dragOverHandler: PropTypes.func,
}

Board.defaultProps = {
title: "",
className: "",
classNameHeader: '',
typeHeader: 'full',
titleColor: 'white',
headerBackgroundColor: '100, 100, 100',
board: {},
dropCardHandler: ()=>{},
dragOverHandler: ()=>{},
}


export default React.memo(Board);