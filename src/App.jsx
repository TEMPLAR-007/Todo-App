import Layout from './components/Layout/Layout';
import { Routes, Route } from "react-router-dom";
import CompletedTask from './components/CompletedTask/CompletedTask';
import TodoList from './components/TodoList/TodoList';
import Calendar from './components/Calendar/Calendar';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completeTask" element={<CompletedTask />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
