import React, { useState } from "react";
import List from "./components/List";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
	const [todos, setToDos] = useState([]);

	function addTodo(item) {
		const newTodos = [...todos, item];
		setToDos(newTodos);
	}

	return (
		<div className="App">
			<AddTodo addTodo={addTodo} />
			<List list={todos} />
		</div>
	);
}

export default App;
