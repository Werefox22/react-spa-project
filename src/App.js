import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import Navbar from './components/Navbar';
import Table from './components/Table';

function App() {
	let [view, setView] = useState(false)

	return (
		<div className="App">
			<div>
				Title <button onClick={() => setView(true)}>View as List</button> <button onClick={() => setView(false)}>View as Table</button>
			</div>
			<hr />
			<Form />
			{view ? <List /> : <Table />}
		</div>
	);
}

export default App;
