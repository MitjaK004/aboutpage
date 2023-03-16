import React from "react";
import { useState } from "react";
import cloneDeep from "clone-deep";

function Game(){
  /*state = {
    //classZaDive1: "inline m-[5%] border-2 px-[37%] py-[18%] hover:bg-gray-900 items-center justify-center resize-none",
    //classZaDive: "border-2 hover:bg-gray-900 text-center h-[100px] w-[80%] m-[auto] rounded-lg m-12",
    classZaDive: "bg-slate-700 rounded-lg hover:bg-cyan-900 p-[20px] text-[30px] text-center h-[100px] max-h-[100px] w-[130px] max-w-[130px]",
    //className="grid grid-rows-3 grid-flow-col gap-[5%] bg-slate-700 py-[8%] m-10 rounded-lg text-center text-5xl"
    //grid: "flex grid grid-rows-3 grid-flow-col w-[50%] h-[50%] bg-slate-800 place-self-center",
    arr: [" ", " ", " ", " ", " ", " ", " ", " ", " "]
  }*/
  const [arr, setArr] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
  const classZaDive = "bg-slate-700 rounded-lg hover:bg-cyan-900 p-[20px] text-[30px] text-center h-[100px] max-h-[100px] w-[130px] max-w-[130px]";
  let [flag, setFlag] = useState(false);
  const funkcija = (stP) => {
    if(arr[stP]!="O" && arr[stP]!="X"){
      const tempData = cloneDeep(arr);
      tempData[stP] = (flag==false)?"X":"O";
      setArr(tempData);
      console.log(flag);  
      setFlag(!flag);
    }
    for(let i = 1; i < 10; i+=3){
      let prev = " ";
      let fg = false;
      for(let c = 0; c < 3; c++){
        if(prev!=" "){
          if(prev==arr[i+c]){
            fg = true;
            prev = arr[i+c];
          }else{
            fg = false;
            prev = arr[i+c];
            //break;
          }
        }else{
          prev = arr[i+c];
        }
        console.log(i+c);
        console.log(arr[c+i]);
        console.log("----------");
      }
      if(fg==true){
        //console.log(fg);
      }
    }
    console.log("----++++++");
    for(let i = 1; i < 4; i++){
      let prev = " ";
      let fg = false;
      for(let c = 0; c < 9; c+=3){
        if(prev!=" "){
          if(prev==arr[i+c]){
            fg = true;
            prev = arr[i+c];
          }else{
            fg = false;
            prev = arr[i+c];
            //break;
          }
        }else{
          prev = arr[i+c];
        }
        console.log(i+c);
        console.log(arr[c+i]);
        console.log("----++++++");
      }
      if(fg==true){
        //console.log(fg);
      }
    }
  }
   return (
      <div className="rounded-lg grid grid-rows-3 grid-flow-col my-10 mx-[auto] w-[500px] bg-slate-900 p-10 gap-4 max-w-full">
        <div className={classZaDive} onClick={() => funkcija(1)}>{arr[1]}</div>
        <div className={classZaDive} onClick={() => funkcija(2)}>{arr[2]}</div>
        <div className={classZaDive} onClick={() => funkcija(3)}>{arr[3]}</div>
        <div className={classZaDive} onClick={() => funkcija(4)}>{arr[4]}</div>
        <div className={classZaDive} onClick={() => funkcija(5)}>{arr[5]}</div>
        <div className={classZaDive} onClick={() => funkcija(6)}>{arr[6]}</div>
        <div className={classZaDive} onClick={() => funkcija(7)}>{arr[7]}</div>
        <div className={classZaDive} onClick={() => funkcija(8)}>{arr[8]}</div>
        <div className={classZaDive} onClick={() => funkcija(9)}>{arr[9]}</div>
      </div>
   )
}

export default Game