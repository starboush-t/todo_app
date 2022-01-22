import './App.css';
import Sidebar from './components/Sidebar';
import Tasks from './components/Tasks';

function App() {
	return (
		<div className="App">
			<div className="container">
				<nav>
					<Sidebar />
				</nav>
				<main>
					<Tasks />
				</main>
			</div>
		</div>
	);
}

export default App;
