import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <button onClick={()=>{
//         console.log("button clicked")
//       }}>Click me</button>
//     </div>
//   );
// }

// export default App;







// function App() {
//   const handleClick = () =>{
//     console.log("button clicked")
//   }
//   return (
//     <div className="App">
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// export default App;













// function App() {
//   handleClick(); // ❌ ReferenceError: Cannot access 'handleClick' before initialization
//   const handleClick = () => {
//     console.log("clicked");
//   };
//   return <div className="App">App</div>;
// }

// export default App;











// 🔑 Key Idea:
// Functions can access variables/functions defined in the same module (file), even if they're not exported.


// The module loads without executing App() yet.
// By the time React renders <App /> and calls App(), handleClick is already initialized.

// function App() {
//   handleClick(); 
//   return <div className="App">App</div>;
// }
// const handleClick = () => {
//   console.log("clicked");
// };

// export default App;









// const handleClick = (e) => {
//   console.log(e.nativeEvent);
// };

// function App() {
//   return  <div className="App">
//             <button onClick={handleClick}>click me </button>
//           </div>;
// }


// export default App;





// adding event to custome components : way 1 
// const handleClick = (e) => {
//   console.log(e.nativeEvent);
// };
// function App() {
//   return  <div className="App">
//             <MyButton uponClick={handleClick}>click me</MyButton>
//           </div>;
// }

// function MyButton(props){
//   return <button onClick={props.uponClick}>{props.children}</button>
// }

// export default App;

// adding event to custome components : way 2 
// const handleClick = (e) => {
//   console.log(e.nativeEvent);
// };
// function App() {
//   return  <div className="App">
//             <MyButton onClick={handleClick}>click me</MyButton>
//           </div>;
// }

// function MyButton(props){
//   return <button {...props}>{props.children}</button>
// }

// export default App;