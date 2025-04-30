import logo from './logo.svg';
import './App.css';



// function App() {

//   const main_title = <h1>this is the main title</h1>

//   return (
//     <div className="App">
//       {main_title}
//     </div>
//   );
// }

// export default App;

// function App() {

//   let error = true

//   return (
//     <div className="App">
//       {error && <h1>There is a problem</h1> }
//       {!error && <h1>Welcome </h1> }
//     </div>
//   );
// }

// export default App;


// function App() {

//   let error = false

//   return (
//     <div className="App">
//       <h1>{error? "problem" : "welcome".toLocaleUpperCase()}</h1>
//     </div>
//   );
// }

// export default App;


// function App() {


//   let style = {
//     color : "red",
//     fontSize : "50px"
//   }

//   return (
//     <div className="App">
//       <h1 style={style}>{error? "problem" : "welcome".toLocaleUpperCase()}</h1>
//     </div>
//   );
// }

// export default App;



function App() {

  const the_props = {
    type: 'text' ,
    id: 'f_name',
     maxLength: "8"
  }

  return (
    <div className="App">
      <label htmlFor='f_name'>first name</label>
      <input {...the_props} />
    </div>
  );
}

export default App;
