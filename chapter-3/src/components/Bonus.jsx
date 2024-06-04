import { useState } from "react";
import { increment } from "../slices/bonusSlice";
import {useSelector,useDispatch} from 'react-redux'

function Bonus() {
   const amonut = useSelector((state) => state.account.amount);
   const bonus = useSelector((state) => state.bonus.points);
   const dispatch = useDispatch()

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : ${bonus}</h3>
        <h3>Total amount : ${amonut}</h3>
        <button onClick={()=>dispatch(increment())}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;
