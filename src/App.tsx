import "./scss/App.scss";
import { useState, useEffect } from 'react';

//-06:00 for CST
const startDate = new Date("2025-02-04T00:00:00-06:00");

function getUpdatedDate() {
	const now = new Date();
	const differenceInDates = now.getTime() - startDate.getTime();
	const newDate = new Date(startDate.getTime() - differenceInDates);

	return newDate;
}

function App() {
	const [displayedDate, setDisplayedDate] = useState<Date>(getUpdatedDate());

	useEffect(() => {
		let interval = setInterval(() => {
			setDisplayedDate(getUpdatedDate());
		}, 250);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<header>
				<h1 className="site-name">
					Rewinder
				</h1>
				<p className="site-info">
					Rewinder shows time going in reverse from <span className="date-time">{ startDate.toLocaleDateString(undefined, { dateStyle: "long" }) }, { startDate.toLocaleTimeString(undefined, { timeStyle: "short" }) }</span>
				</p>
			</header>

			<main>
				<p className="displayed-date">
					<span className="date-time">{ displayedDate.toLocaleDateString() }, </span>
					<span className="date-time">{ displayedDate.toLocaleTimeString() }</span>
				</p>
			</main>
		</>
	);
}

export default App;