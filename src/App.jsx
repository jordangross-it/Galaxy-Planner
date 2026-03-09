import TodoList from "./ToDoList";
import "./App.css";
import Footer from "./footer";

function App() {
  return (
    <div className="app">
      <div className="content">
        <h1>Plan Your Galaxy</h1>
        <TodoList />
      </div>

      <Footer />
    </div>
  );
}

export default App;
