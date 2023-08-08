import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, reset  } from "../redux/actions/counterAction";

const Hello = () => {

    const count = useSelector((x) => x.count)
    const dispatch = useDispatch()


    return (
        <div> 
            <h1>count: {count}</h1>
            <button onClick={() => dispatch(increase(1))}>increase</button>
            <button onClick={() => dispatch(decrease())}>decrease</button>
            <button onClick={() => dispatch(reset())}>reset</button>
        </div>
    )
}

export default Hello;