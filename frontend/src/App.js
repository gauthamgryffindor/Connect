import {Route,Routes,BrowserRouter} from 'react-router-dom'
import SignIn from "./components/pages/SignIn"
import SignUp from "./components/pages/SignUp"
function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path={"/signin"} element={<SignIn/>}/>
    <Route path={"/signup"} element={<SignUp/>}/>
    <Route path={"*"} element={<SignIn/>}/>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
