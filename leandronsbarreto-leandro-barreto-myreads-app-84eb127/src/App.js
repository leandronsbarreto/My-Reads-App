import BooksCatalogue from "./appcomponents/BooksCatalogue";
import Finder from "./appcomponents/Finder";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* MyReadsApp function is the root of the app. React Router
* holds two Routes. One of them renders Books' catalogue
* (BooksCatalogue.js). The other one renders the search
* functionality (Finder.js). Each of them has its own
* path (/). */

function MyReadsApp() {
return (
<BrowserRouter>
	<div className="app">
		<Routes>
			<Route path="/" element={<BooksCatalogue />}></Route>
			<Route path="/search" element={<Finder />}></Route>
		</Routes>
	</div>
</BrowserRouter>
);
}

export default MyReadsApp;
