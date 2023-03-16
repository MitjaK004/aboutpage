import cloneDeep from "clone-deep";

export default function updateArr(val, index){
    let temp = cloneDeep(val);
    temp[index] = val[1];
    return temp;
}