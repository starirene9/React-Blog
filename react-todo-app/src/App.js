import './App.css';
import TodoTemplate from "./component/todo/TodoTemplate";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import {Login} from "@mui/icons-material";
import Join from "./component/user/Join";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<TodoTemplate/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/join' element={<Join/>}/>
            </Routes>
            <Footer/>
        </>
    );

}

export default App;
