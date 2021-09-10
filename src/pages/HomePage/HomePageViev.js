import React from 'react';
import PropTypes from 'prop-types';

import {Card, Board, Modal} from '../../components/index.js';
import './index.css';

const HomePageViev = ({boards,
                       dragOverHandler,
                       dragLeaveHandler,
                       dragStartHandler,
                       dragEndHandler,
                       dropHandler,
                       dropCardHandler,
                       colorsBoardsHeaders,
                       closeModal,
                       openModal,
                       modalActive,
                       modalInformation}) =>{
    return (
      <>
      <Modal modalActive={modalActive} closeModal={closeModal}>
        {
          modalInformation &&
          <>
          <h2 className="modal__">Full description:</h2>
          <p>{modalInformation?.title}</p>
          </>
        }
      </Modal>  
    <main>
      {boards && 
      <div className='boards'>
        <Board 
        dropCardHandler={dropCardHandler} 
        dragOverHandler={dragOverHandler} 
        title={boards[0].title}
        board = {boards[0]}
        titleColor={colorsBoardsHeaders[0].colorWords}
        headerBackgroundColor={colorsBoardsHeaders[0].rgb}
        >
          {
            boards[0].items.map(item => {
              return (
              <Card 
              key={item.id} 
              task={item.title} 
              statusTask={item.status} 
              board={boards[0]}
              item={item}
              dragOverHandler = {dragOverHandler}
              dragLeaveHandler = {dragLeaveHandler}
              dragStartHandler = {dragStartHandler}
              dragEndHandler = {dragEndHandler}
              dropHandler = {dropHandler}
              openModal={openModal}
              />
              )
            })
          }
        </Board>
         { boards.length>2 &&
          <div className="boards-middle">
            <div className="boards-middle__header"> In progress</div>
            <div className="boards-middle__content">  
               {
                 boards.map((board,i)=>{
                   if(i>0 && i<boards.length-1){
                   return (
                    <Board 
                    className={"board__chenged"}
                    typeHeader="short" 
                    key={board.id}
                    board={board}
                    title={board.title}
                    dropCardHandler={dropCardHandler} 
                    dragOverHandler={dragOverHandler}
                    titleColor={colorsBoardsHeaders[i].colorWords}
                    headerBackgroundColor={colorsBoardsHeaders[i].rgb}
                    >
                      {
                        board.items.map(item=>{
                          return (
                            <Card 
                            key={item.id}
                            task={item.title}
                            statusTask={item.status}
                            board={board}
                            item={item}
                            dragOverHandler = {dragOverHandler}
                            dragLeaveHandler = {dragLeaveHandler}
                            dragStartHandler = {dragStartHandler}
                            dragEndHandler = {dragEndHandler}
                            dropHandler = {dropHandler}
                            openModal={openModal}
                            />
                          )
                        })
                      }
                    </Board>
                   )
                   }
                 })
               }
            </div>
          </div>
           }

        <Board 
        className={'board__chenged--last'}
        dropCardHandler={dropCardHandler} 
        dragOverHandler={dragOverHandler} 
        title={boards[boards.length-1].title}
        board = {boards[boards.length-1]}
        titleColor={colorsBoardsHeaders[boards.length-1].colorWords}
        headerBackgroundColor={colorsBoardsHeaders[boards.length-1].rgb}
        >
          {
            boards[boards.length-1].items.map(item => {
              return (
              <Card 
              key={item.id} 
              task={item.title} 
              statusTask={item.status} 
              board={boards[boards.length-1]}
              item={item}
              dragOverHandler = {dragOverHandler}
              dragLeaveHandler = {dragLeaveHandler}
              dragStartHandler = {dragStartHandler}
              dragEndHandler = {dragEndHandler}
              dropHandler = {dropHandler}
              openModal={openModal}
              />
              )
            })
          }
        </Board>

      </div>
      }
    </main>
    </>
    )
}

HomePageViev.propTypes = {
boards: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
dragOverHandler: PropTypes.func,
dragLeaveHandler: PropTypes.func,
dragStartHandler: PropTypes.func,
dragEndHandler: PropTypes.func,
dropHandler: PropTypes.func,
dropCardHandler: PropTypes.func,
colorsBoardsHeaders: PropTypes.array,
closeModal: PropTypes.func,
openModal: PropTypes.func,
modalActive: PropTypes.bool,
modalInformation: PropTypes.object,
}

HomePageViev.defaultProps = {
boards: null,
dragOverHandler: ()=>{},
dragLeaveHandler: ()=>{},
dragStartHandler: ()=>{},
dragEndHandler: ()=>{},
dropHandler: ()=>{},
dropCardHandler: ()=>{},
colorsBoardsHeaders:[],
closeModal: ()=>{},
openModal: ()=>{},
modalActive: false,
modalInformation: null,
}

export default React.memo(HomePageViev);