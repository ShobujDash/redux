import { useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { decrement, increment, incrementByAmount } from "../actions";

function Account() {
  const [value,setValue]=useState(0)

  const amonut = useSelector((state) => state.account.amount);
  const bonus = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount:${amonut}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={()=>dispatch(decrement())}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value)}></input>
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment By {value} +
        </button>
      </div>
    </div>
  );
}

export default Account;
