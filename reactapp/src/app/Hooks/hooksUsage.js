import React, { useState, useCallback, useMemo } from "react";
import Count from "./count";
import Button from "./button";
import Title from "./title";


function Hooks(props) {

    //let age = 18, text1 = "Age";
    let text1 = "AGE";
    let [age,setAge] = useState(18);
    let [salary, setSalary] = useState(20000);

    //useCallback will return a memoized version of the callback that only changes if one of the inputs has changed.
    let incrementAge = useCallback(()=>{
        console.log("Increment Age Gets Called")
        setAge(age+1)
    },[age]);

    let incrementSalary = useCallback(()=>{
        console.log("salary")
        setSalary(salary + 100)
    },[salary]);


    let isEven = useMemo(()=>{
        console.log("IsEven")
        let i = 1
        while(i < 200000000) i++;

        return age % 2 === 0;
    },[age])


    return(
        <>
            <Title />

            <Count text={text1} count={age}/>
            <Button handleClick={incrementAge} >
                Increment Age
            </Button>
            {/* <span>{isEven() ? ' Even' : ' Odd'}</span> */}
            <span>{isEven ? ' Even' : ' Odd'}</span>
            

            <Count text={"Salary"} count={salary}/>
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </>
    );
}



export default Hooks;