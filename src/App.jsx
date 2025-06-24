// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   const increment = ()=>{
//     setCount(count + 1);
//   }

//   const asyncIncrement = ()=>{
//     setTimeout(() =>{
//       setCount((prevCount) => prevCount + 1)
//     }, 3000)
//   }
//   return (
//     <>
//       <div>
//         <p>Count: {count}</p>
//         <button onClick={increment}>Increment</button>
//         <button onClick={asyncIncrement}> Async Increment</button>
//       </div>

//     </>
//   )
// }

// export default App


import './App.css'
import { useReducer, useState } from 'react';

function App() {
// const [userInfo,setUserInfo] = useState({
//     name: "",
//     email: "",
//     phone: "",
// })
// const userInfoUpdate = (e) =>{
//     setUserInfo({...userInfo, [e.target.name]: e.target.value})
// }
 
const initialState = {
  name: "",
  email: "",
  phone: "",
};

//*{
 //* type: "FIELD_UPDATE";
//* payload: {
 //*  field: "name";
 //* value: "Programming Hero"
//*}

const reducer = (state, action)=>{
  switch (action.type){
    case "FIELD_UPDATE":
      return{
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case "CLEAR":
      return{
        ...state,
        [action.payload.field]: "",
      };
      case "RESET":
        return initialState;
    default:
      state;
  }
};

const [userInfo, dispatch] = useReducer(reducer, initialState);

console.log(userInfo)

const handleOnChange = (e)=>{
  dispatch({
    type: "FIELD_UPDATE",
    payload: {
      field: e.target.name,
      value: e.target.value,
    },
  });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  }

  const handleClear =(field)=>{
     dispatch({
    type: "CLEAR",
    payload: {
      field: field,
    },
  });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name='name'
            id='name'
            value={userInfo.name}
            onChange={handleOnChange}
          />
          <button onClick={() =>handleClear("name")}>Clear</button>
        </div>
        
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name='email'
                id='email'
                value={ userInfo.email}
                onChange={handleOnChange}
              />
                <button onClick={() =>handleClear("email")}>Clear</button>
            </div>
           
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name='phone'
                    id='phone'
                    value={userInfo.phone}
                    onChange={handleOnChange}
                  />
                    <button onClick={() =>handleClear("phone")}>Clear</button>
                </div>
                <button onClick={() =>dispatch({type: "RESET"})}>Reset</button>
                <button>Submit</button>
              </form>

            </div>

            )
}

 export default App