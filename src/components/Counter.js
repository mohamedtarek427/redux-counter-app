import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";
import { logIn,logOut } from "../store/authSlice";

export function Counter() {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  
  const isLoggedIn = () => {
    return globalState.auth.isLoggedIn
  }

  const loginHandler = (status) => {
    if (status) {
      dispatch(logOut());
    }
    else {
      dispatch(logIn());
    }
  }

  return (
    <>
      {isLoggedIn() && (
        <div>
          <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment(5))}
            >
              Increment
            </button>
            <span>{globalState.counter.value}</span>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement(5))}
            >
              Decrement
            </button>
          </div>
          </div>
          )}
          <div>
            <button onClick={()=>{
              loginHandler(isLoggedIn())
            }}>
            {isLoggedIn() ? "logout" : "login"}
            </button>
          </div>
    </>
  );
}
