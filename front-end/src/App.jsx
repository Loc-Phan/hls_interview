import Header from "@/components/Header";
import Joke from "./Joke";
import Footer from "@/components/Footer";
import "./App.css";

const App = () => (
	<div className="flex flex-col h-screen">
		<Header />
		<Joke />
		<Footer />
	</div>
);

export default App;
