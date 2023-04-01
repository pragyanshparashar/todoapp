import "./App.css";
import TodoList from "./TodoList";
import image from "./images/todo2.png";

function App() {
  return (
    <div className="app">
      <img className="img" src={image} height={200} width={200} />
      <TodoList />;
    </div>
  );
}

export default App;
