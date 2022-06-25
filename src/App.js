import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import RightSideBar from "./RightSideBar";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user},dispatch]=useStateValue();

  console.log(user);
  return (
    <>
    
             <div className="App">
            <Header />

            <div className="app_body">
              <Sidebar />
              <Feed />
            <RightSideBar />
            </div>
          </div>
      
    
    </>
  );
}

export default App;



// {
//   !user ? <Login/> : <div className="App">
//   <Header />

//   <div className="app_body">
//     <Sidebar />
//     <Feed />
//    <RightSideBar />
//   </div>
// </div>
// }