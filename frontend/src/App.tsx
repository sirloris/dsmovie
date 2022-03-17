import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Listing } from "pages/Listing";
import { Form } from "pages/Form";
import { Navbar } from "components/NavbarComponent";

export function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Listing />} />
				<Route path="/" />
				<Route path=":movieId" element={<Form />} />
			</Routes>
		</BrowserRouter>
	);
}
