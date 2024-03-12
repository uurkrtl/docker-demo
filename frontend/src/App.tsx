import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Routes} from "react-router-dom";
import TodoList from "./pages/TodoList.tsx";

function App() {

  return (
      <Routes>
          <Route path="/" element={<TodoList />} />
      </Routes>
  )
}

export default App
