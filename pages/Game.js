import React from "react";
import { useState } from "react";
import cloneDeep from "clone-deep";
import fillArr from './functions/fillArr'

function Game(){
  const [igra, setIgra] = useState(true);
  let [arr, setArr] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
  const [classZaDive, setClassZaDive] = useState(fillArr("bg-slate-700 rounded-lg hover:bg-cyan-900 p-[20px] text-[30px] text-center h-[100px] max-h-[100px] w-[130px] max-w-[130px]", 9));
  let [flag, setFlag] = useState(false);
  const funkcija = async (stP) => {
    if(igra){
      const tempArr = cloneDeep(arr);
      if(arr[stP]!="O" && arr[stP]!="X"){
        tempArr[stP] = (flag==false)?"X":"O";
        await setArr(tempArr);
        await setFlag(!flag);
      }
      const tempData = cloneDeep(classZaDive);
      for(let i = 1; i <= 9; i+=3){
        if(tempArr[i+2] == tempArr[i] && tempArr[i+1] == tempArr[i] && tempArr[i] != " "){
          tempData[i+2] = "bg-red-800 rounded-lg hover:bg-red-700 p-[20px] text-[30px] text-center h-[100px] max-h-[100px] w-[130px] max-w-[130px]";
          tempData[i+1] = "bg-red-800 rounded-lg hover:bg-red-700 p-[20px] text-[30px] text-center h-[100px] max-h-[100px] w-[130px] max-w-[130px]";
          tempData[i] = "bg-red-800 rounded-lg hover:bg-red-700 p-[20px] text-[30px] text-center h-[100px] max-h-[100px] w-[130px] max-w-[130px]";
          setIgra(false);
        }
      }
      for(let i = 1; i <= 3; i++){
        if(tempArr[i+6] == tempArr[i] && tempArr[i+3] == tempArr[i] && tempArr[i] != " "){
          tempData[i+6] = "bg-red-800 rounded-lg hover:bg-red-700 p-[20px] text-[30px] text-center h-[100px] max-h-[100px] w-[130px] max-w-[130px]";
          tempData[i+3] = "bg-red-800 rounded-lg hover:bg-red-700 p-[20px] text-[30px] text-center h-[100px] max-h-[100px] w-[130px] max-w-[130px]";
          tempData[i] = "bg-red-800 rounded-lg hover:bg-red-700 p-[20px] text-[30px] text-center h-[100px] max-h-[100px] w-[130px] max-w-[130px]";
          setIgra(false);
        }
      }
      if(tempArr[9] == tempArr[1] && tempArr[5] == tempArr[1] && tempArr[1] != " "){
        tempData[9] = "bg-red-800 rounded-lg hover:bg-red-700 p-[20px] text-[30px] text-center h-[100px] max-h-[100px] w-[130px] max-w-[130px]";
        tempData[5] = "bg-red-800 rounded-lg hover:bg-red-700 p-[20px] text-[30px] text-center h-[100px] max-h-[100px] w-[130px] max-w-[130px]";
        tempData[1] = "bg-red-800 rounded-lg hover:bg-red-700 p-[20px] text-[30px] text-center h-[100px] max-h-[100px] w-[130px] max-w-[130px]";
        setIgra(false);
      }
      if(tempArr[7] == tempArr[3] && tempArr[5] == tempArr[3] && tempArr[3] != " "){
        tempData[7] = "bg-red-800 rounded-lg hover:bg-red-700 p-[20px] text-[30px] text-center h-[100px] max-h-[100px] w-[130px] max-w-[130px]";
        tempData[5] = "bg-red-800 rounded-lg hover:bg-red-700 p-[20px] text-[30px] text-center h-[100px] max-h-[100px] w-[130px] max-w-[130px]";
        tempData[3] = "bg-red-800 rounded-lg hover:bg-red-700 p-[20px] text-[30px] text-center h-[100px] max-h-[100px] w-[130px] max-w-[130px]";
        setIgra(false);
      }
      await setClassZaDive(tempData);
    }
  }
   return (
      <div className="rounded-lg grid grid-rows-3 grid-flow-col my-10 mx-[auto] w-[500px] bg-slate-900 p-10 gap-4 max-w-full">
        <div className={classZaDive[1]} onClick={async () => funkcija(1)}>{arr[1]}</div>
        <div className={classZaDive[2]} onClick={async () => funkcija(2)}>{arr[2]}</div>
        <div className={classZaDive[3]} onClick={async () => funkcija(3)}>{arr[3]}</div>
        <div className={classZaDive[4]} onClick={async () => funkcija(4)}>{arr[4]}</div>
        <div className={classZaDive[5]} onClick={async () => funkcija(5)}>{arr[5]}</div>
        <div className={classZaDive[6]} onClick={async () => funkcija(6)}>{arr[6]}</div>
        <div className={classZaDive[7]} onClick={async () => funkcija(7)}>{arr[7]}</div>
        <div className={classZaDive[8]} onClick={async () => funkcija(8)}>{arr[8]}</div>
        <div className={classZaDive[9]} onClick={async () => funkcija(9)}>{arr[9]}</div>
      </div>
   )
}

export default Game