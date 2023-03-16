export default function fillArr(val, amount){
    let ret = [];
    for(let i = 1; i <= amount; i++){
        ret[i] = val;
    }
    return ret;
}