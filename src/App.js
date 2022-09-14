import React from "react";
import User from "./Components/redux/user";
// import HomeContainer from "./Components/containers/HomeContainer";
import Todo from "./Components/Todo";
function App() {
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row py-5">
          <div className="col-md-4">
            <Todo />
          </div>
          <div className="col-md-4">
            <User data={{name:'Mukesh Kumar',age:'23'}}/>
          </div>
          <div className="col-md-4">
            {/* <HomeContainer/> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
