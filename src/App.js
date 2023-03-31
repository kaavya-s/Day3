import './App.css';
import Head1 from './Head1';
import Nav from './Nav';
import Sec1 from './Sec1';
import { Cart } from './Cart';

function App() {
  return (
    <div>
   <Head1/>
   <Nav/>
   <Sec1/>
   <Cart/>
    </div>
  );
}

export default App;
// function Calculate() {
//   const [count, setCount] = useState(7);
//   const[color, setColor] = useState("red");
//    return (
//       <div>
//       <p>You clicked {count} times</p>
//       <p> My favorite color is {color}</p> 
//       <button onClick={() => setCount(count + 1)}>
//           Click me
//      </button>
//       </div>
//  );
// }

// two buttons
// function Calculate() {
//      const [count, setCount] = useState(0);
//      const[color, setColor] = useState("red");
//      const incrCount=()=>{
//           setCount(count + 1)
//      }
//      const decrCount=()=>{
//           setCount(count - 1)
//      }
//       return (
//          <div>
//          <p>You clicked {count} times</p>
//          <p> My favorite color is {color}</p> 
//          <button onClick={incrCount}>
//              Click me
//         </button>
//         <button onClick={decrCount}>
// Reduce me
//         </button>
//          </div>
//     );
// }
// export default Calculate;
// useEffect
// import React, { useState , useEffect} from 'react';

// function Example() {
//  const [count, setCount] = useState(0);
//  useEffect(() => {
// document.title = `You clicked ${count} times`;
//  });
//   return (
//      <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setCount(count + 1)}>
//          Click me
//          </button>
//      </div>
// Bhuvana Gowtham10:16 AM
// const App = () => {
//   const [message, setMessage] = useState('Hi there, how are you?');
//   useEffect(() => {
//     console.log('trigger use effect hook');
//     setTimeout(() => {
//       setMessage("I'm fine, thanks for asking.");
//     }, 10000)
//   })
//   return <h1>{message}</h1>
// };