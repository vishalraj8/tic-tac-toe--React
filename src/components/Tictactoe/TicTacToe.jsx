import React, { useRef, useState } from 'react'
import'./TicTacToe.css'
import circle_icon from'../Assits/circle.png'
import crose_icon from'../Assits/crose.png'

let data = ["","","","","","","","",""];

export const TicTacToe = () => {

    let [count,setCount]= useState(0);
    let[lock,setLock] = useState(false);
    let titleRef = useRef(null);

    const toggle = (e,num) =>{
        if (lock) {
            return 0;
        }
        if (count%2===0) {
            e.target.innerHTML = `<img src="${crose_icon}">`;
            data[num]="x";
            setCount(++count);
        }
        else{
            e.target.innerHTML = `<img src="${circle_icon}">`;
            data[num]="o";
            setCount(++count);
        }
        checkwin();
    }

    const checkwin = () =>{
        if (data[0]===data[1] && data[1]===data[2]&& data[2]!=="") {
            Won(data[2]);
        }
        else if (data[3]===data[4] && data[4]===data[5]&& data[5]!=="")
        {
            Won(data[5]);
        }
        else if (data[6]===data[7] && data[7]===data[8]&& data[8]!=="")
        {
            Won(data[8]);
        }
        else if (data[0]===data[3] && data[3]===data[6]&& data[6]!=="")
        {
            Won(data[6]);
        }
        else if (data[1]===data[4] && data[4]===data[7]&& data[7]!=="")
        {
            Won(data[7]);
        }
        else if (data[2]===data[5] && data[5]===data[8]&& data[8]!=="")
        {
            Won(data[8]);
        }
        else if (data[0]===data[4] && data[4]===data[8]&& data[8]!=="")
        {
            Won(data[8]);
        }
        else if (data[0]===data[1] && data[1]===data[2]&& data[2]!=="")
        {
            Won(data[2]);
        }
        else if (data[2]===data[4] && data[4]===data[6]&& data[6]!=="")
        {
            Won(data[6]);
        }
    }

    const Won = (Winner) =>{
        setLock(true);
        if (Winner==="x") {
            titleRef.current.innerHTML = `Winner is: <img src=${crose_icon}>`;
        }
        else{
            titleRef.current.innerHTML = `Winner is: <img src=${circle_icon}>`;
        }
    }
    const reset = () => {
        setLock(false);
        data = ["","","","","","","","",""];
        titleRef.current.innerHTML = 'Tic Tac Toe In <span>React</span>'
    }

  return (
    <div className="container">
        <h1 className="title" ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
        <div className="board">
            <div className="row1">
                <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className="row2">
                <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className="row3">
                <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
        <button className="reset" onClick={()=>{reset()}}>Reset</button>
    </div>
  )
}
