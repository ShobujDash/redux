import React, { useState } from "react";
import {useSelector} from 'react-redux'
import "./App.css";
import  Account from "./components/Account";
import Bonus from "./components/Bonus";

function App() {

  const amonut = useSelector(state=>state.account.amount)
  const bonus = useSelector(state=>state.bonus.points)

  return (
    <div>
      <h4>App</h4>
      <h3>Current Amount : {amonut}</h3>
      <h3>Total Bonus : {bonus}</h3>

      <Account/>
      <Bonus />
    </div>
  );
}

export default App;
