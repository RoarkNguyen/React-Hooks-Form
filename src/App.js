import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
  const handleTodoFormSubmit = (values) => {
    console.log("Form submit ne:", values);
  };
  return (
    <div className="App">
      <h1>React hooks form</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
    </div>
  );
}

export default App;
