import "./App.css";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import Resume from "./resume/Resume";
import Skills from "./skills/Skills";
import Works from "./works/Works";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<Skills />
			<Works />
			<Resume />
			<Contact />
		</div>
	);
}

export default App;
