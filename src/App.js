import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Comment name={"Salah"} />
//       <Comment name={"Mark"} />
//     </div>
//   );
// }

// function Comment(props) {
//   return (
//     <div className="App">
//       <p>{props.name} commented at {new Date().toUTCString()}</p>
//       <h3>This is the comment</h3>
//     </div>
//   );
// }

// export default App;








// function App() {
//   return (
//     <div className="App">
//       <Comment name={"Salah"} />
//       <Comment name={"Mark"} />
//       <Comment  />
//     </div>
//   );
// }

// function Comment({name = "user"}) {
//   return (
//     <div className="App">
//       <p>{name} commented at {new Date().toUTCString()}</p>
//       <h3>This is the comment</h3>
//     </div>
//   );
// }

// export default App;








function App() {
  return (
    <div className="App">
      <Comment name={"Salah"} > 
        <h6>This is the comment</h6>
      </Comment>
      <Comment name={"Mark"} > 
        <h6>This is another comment</h6>
      </Comment>
      
    </div>
  );
}

function Comment({name, children}) {
  return (
    <div className="App">
      <p>{name} commented at {new Date().toUTCString()}</p>
      {children}
    </div>
  );
}

export default App;