export default function Projects() {
	return (<>
	<div className='flex flex-col fixed font-mono h-full w-full justify-evenly overflow-y-scroll lg:overflow-hidden bg-black px-20 py-20'>
		<div className='flex flex-col lg:h-[50%] justify-evenly  bg-black lg:flex-row pt-4 md:pt-4 md:py-4'>
			<div className="flex flex-col items-center border-gray-200 pb-10 px-20 ">
				{/* <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={alinaPic} alt="Alina image" /> */}
				<h3 className="mb-1 text-xl font-mono  text-white">Click and Rent</h3>
				<span className="text-sm text-white">The Housing Rental App is a comprehensive platform designed to simplify the process of renting properties. Built using the <b> MERN stack (MongoDB, Express.js, React, and Node.js)</b>, the app provides a seamless experience for both property owners and renters. With a focus on usability and scalability, this app addresses the common challenges associated with property rental, ensuring a smooth, efficient, and user-friendly process.</span>
				<div className="flex mt-4 space-x-3 lg:mt-6">
					<a
						className="inline-flex items-center py-2 px-4 text-sm 
                    font-mono text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 
                    focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
                    dark:focus:ring-blue-800"
						href='https://clickenrent.netlify.app'>Demo</a>
				</div>
				<a className="link link-accent  no-underline text-gray-200" href="https://github.com/Alina-Hari/RentalClient">Git</a>

			</div>
			<div className="flex flex-col items-center border-gray-200 pb-10 px-20">
				{/* <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={hariPic} alt="Hari image" /> */}
				<h3 className="mb-1 text-xl font-mono text-white">Weather Wise</h3>
				<span className="text-sm text-white">The Weather App is a modern and intuitive web application designed to provide users with real-time weather information. Built using <b>React</b>, this app delivers a seamless and engaging user experience, allowing users to quickly access current weather conditions, forecasts, and other essential meteorological data for any location worldwide.</span>
				<div className="flex mt-4 space-x-3 lg:mt-6">
					<a
						className="inline-flex items-center py-2 px-4 text-sm 
                    font-mono text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 
                    focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
                    dark:focus:ring-blue-800"
						href="https://stormwatch.netlify.app">Demo</a>
				</div>
				<a className="link link-accent  no-underline text-gray-200" href="https://github.com/Tesa-Hari/weather-app">Git</a>
			</div>
		</div>
		<div className='flex flex-col  lg:h-[50%] justify-evenly bg-black  lg:flex-row pt-4 md:pt-4 md:py-4'>
			<div className="flex flex-col items-center border-gray-200 pb-10 px-20">
				{/* <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={hariPic} alt="Hari image" /> */}
				<h3 className="mb-1 text-xl font-mono text-white">Uriyadi</h3>
				<span className="text-sm text-white">Uriyadi is an exciting and engaging arcade-style game where players control a cow that jumps to hit pots to collect sugarcanes while avoiding dangerous fireballs. Built using<b> HTML, CSS, and JavaScript with a focus on DOM manipulation</b>, this game delivers an immersive and interactive experience right in the browser. The goal is to collect as many sugarcanes as possible while dodging fireballs to achieve high scores.</span>
				<div className="flex mt-4 space-x-3 lg:mt-6">
					<a
						className="inline-flex items-center py-2 px-4 text-sm 
                    font-mono text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 
                    focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
                    dark:focus:ring-blue-800"
						href="https://haripriya2327.github.io/uriyadi-projectOne">Demo</a>
				</div>
				<a className="link link-accent  no-underline text-gray-200" href="https://github.com/Haripriya2327/uriyadi-projectOne">Git</a>
			</div>
			<div className="flex flex-col items-center border-gray-200 pb-10 px-20">
				{/* <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={hariPic} alt="Hari image" /> */}
				<h3 className="mb-1 text-xl font-mono text-white">Rock Paper Scissors</h3>
				<span className="text-sm text-white">The Rock Paper Scissors Game is a classic and simple game implemented using <b>vanilla JavaScript, HTML, and CSS</b>. This project aims to create an interactive and engaging version of the game that can be played directly in the browser. Players compete against the computer in a battle of wits to see who can predict the opponent's moves and make the winning choice.</span>
				<div className="flex mt-4 space-x-3 lg:mt-6">
					<a
						className="inline-flex items-center py-2 px-4 text-sm 
                    font-mono text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 
                    focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
                    dark:focus:ring-blue-800"
						href="https://haripriyamohanasundaram.github.io/rps-play">Demo</a>
				</div>
				<a className="link link-accent no-underline text-gray-200" href="https://github.com/HaripriyaMohanaSundaram/rps-play">Git</a>
			</div>
		</div>
		</div>
	</>);
}