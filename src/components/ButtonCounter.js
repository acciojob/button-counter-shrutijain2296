import React, {useState} from "react";

const ButtonCounter = () =>{
    let [count, setCount] = useState(0);


    function increaseCount(){
        setCount(count+1);
    }

    return(
        <div>
             <h1>Button clicked {count} times</h1>
             <button onClick = {increaseCount}>Click me</button>
        </div>
    )
       
       
}
export default ButtonCounter;