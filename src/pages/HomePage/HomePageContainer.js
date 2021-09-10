import React, { useState } from 'react';

import HomePageViev from './HomePageViev';
import data from '../../data/index.js';


    const HomePage = () => {

    const [boards, setBoards] = useState(data);

    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);
    const [modalActive,setModalActive] = useState(false);
    const [modalInformation, setModalInformation] = useState(null);

    const openModal = item =>{
      setModalInformation(item);
      setModalActive(true);
    }

    const closeModal = () =>{
      setModalActive(false);
    }

    const dragOverHandler= e =>{
      e.preventDefault();
      console.log(e.target.className);
      if (e.target.className.indexOf("card") !== -1) {
         e.target.style.boxShadow = '0 8px 10px black';
      }

    }

    const dragLeaveHandler = e => {
         e.target.style.boxShadow = 'none';
       
    }

    const dragStartHandler = (e, board, item) => {
      setCurrentBoard(board);
      setCurrentItem(item);
    }

    const dragEndHandler = e => {
         e.target.style.boxShadow = 'none';
    }

    const dropHandler = (e, board, item) => {
      e.preventDefault();
      const currentIndex = currentBoard.items.indexOf(currentItem);
      currentBoard.items.splice(currentIndex, 1);
      const dropIndex = board.items.indexOf(item);
      board.items.splice(dropIndex+1, 0, currentItem);
      setBoards(boards.map(b => {
        if(b.id === board.id) {
           return board;
        }
        if (b.id === currentBoard.id) {
           return currentBoard;
        }
        return b;
      }));
     e.target.style.boxShadow = 'none';
    }
    
    const dropCardHandler = (e, board) => {
      e.preventDefault();
      const currentId = board.items.map( item => item.id);
      if (!currentId.includes(currentItem.id)) {
      board.items.push(currentItem);
       const currentIndex = currentBoard.items.indexOf(currentItem);
      currentBoard.items.splice(currentIndex, 1);
          setBoards(boards.map(b => {
        if(b.id === board.id) {
           return board;
        }
        if (b.id === currentBoard.id) {
           return currentBoard;
        }
        return b;
      }));
    }
      e.target.style.boxShadow = 'none';
    }

    const generateColors = () =>{
      let red = 120;
      let green = 120;
      let blue = 120;
      let colorWords = 'white';
      let rgb = "";
      const colors = [];
      boards.forEach(( el,i)=>{
        if (red>140) {
          colorWords="black"
        }
        rgb = String(red)+", "+String(green)+", "+String(blue);
        colors.push({
          rgb,
          colorWords
        })
        red +=20;
        green +=20;
        blue +=20;
      })
      return colors
    }
   const colorsBoardsHeaders = generateColors();

    return <HomePageViev 
            boards={boards} 
            dragOverHandler={dragOverHandler}
            dragLeaveHandler={dragLeaveHandler}
            dragStartHandler={dragStartHandler}
            dragEndHandler={dragEndHandler}
            dropHandler={dropHandler}
            dropCardHandler={dropCardHandler}
            colorsBoardsHeaders={colorsBoardsHeaders}
            openModal = {openModal}
            closeModal = {closeModal}
            modalActive={modalActive}
            modalInformation={modalInformation}
            />
}

export default HomePage;