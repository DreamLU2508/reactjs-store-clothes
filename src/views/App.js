import logo from './logo.svg';
import './App.scss';
import MyComponents from './Example/MyComponent';
import ListTodo from './TodoApps/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Example/Home';
import Nav from './Nav/Nav';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/todo-list" element={<ListTodo />} />
            <Route path="/about" element={<MyComponents />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </header>



        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </div >
    </Router>

  );
}

export default App;
