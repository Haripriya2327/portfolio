export default function Info() {
	return (<>
		<div className='flex flex-col font-mono h-full w-full fixed justify-between px-20 py-20 lg:justify-evenly  overflow-y-scroll lg:overflow-hidden lg:flex-row pt-4 md:pt-24 md:py-24 bg-black text-white'>
			<div className=" flex flex-col items-center lg:w-[30%] mx-4 mt-4 lg:h-[70%] border-gray-200  rounded-lg border-2 border-gray-200 ">
				<h3 className="mb-1 text-2xl font-mono w-full text-center py-4 bg-white text-black dark:text-white">Education</h3>
				<div className="flex flex-col  mx-8 ">
					<div className="flex flex-col mt-4 ">
						<span className="text-sm  text-center font-bold">Masters in Applied Electronics</span>
						<span className="text-sm ">Government College of Technology, Coimbatore, India</span>
						<span className="text-sm  text-center">2015 - 2017</span>
						<span className="text-sm  text-center">CGPA - 8.82 </span></div>
					<div className="flex flex-col mt-4">
						<span className="text-sm  text-center font-bold">Bachelors in Electrical And Electronics Engineering</span>
						<span className="text-sm ">Dr N G P Institute of Technology, Coimbatore, India</span>
						<span className="text-sm  text-center">2010 - 2014 </span>
						<span className="text-sm  text-center">CGPA - 8.89 </span></div>
					<div className="flex flex-col mt-4">
						<span className="text-sm  text-center font-bold">Web Development Bootcamp</span>
						<span className="text-sm  text-center">Ironhack - 2024</span></div>
				</div>
			</div>
			<div className="flex flex-col items-center mx-4 lg:w-[30%] mt-4  lg:h-[70%] border-gray-200  rounded-lg border-2 border-gray-200">
				<h3 className="mb-1 text-2xl font-mono w-full text-center py-4 bg-white text-black dark:text-white">Experience</h3>
				<div className="flex flex-col  mx-8 mt-4 justify-center items-center">
					<span className="text-lg ">Tata Consultancy Services Limited, India</span>
					<span className="text-md ">Software Developer</span>
					<span className="text-md text-center ">Full stack Development, Manual Testing, Training in dotNet and c#</span>
					<span className="text-sm py-4">
						[Contributed to the development of various insurance products of Tata Bancs.
						Continuously participated in peer code reviews and idea sessions
						Worked in an agile environment ]
					</span>
				</div>
			</div>
			<div className="flex flex-col items-center mx-4 lg:w-[30%]  lg:h-[70%] border-gray-200 mt-4 rounded-lg border-2 border-gray-200">
				<h3 className="mb-1 text-2xl font-mono w-full text-center py-4 bg-white text-black dark:text-white">Skillset</h3>
				<ul className="list-disc list-inside text-lg leading-relaxed px-4 my-4">
					<li>Framework - Angular, NodeJS, ExpressJS</li>
					<li>Libraries - React, Redux, RxJS</li>
					<li>Javascript and typescript</li>
					<li>HTML/CSS</li>
					<li>C# , dotNet</li>
					<li>MongoD, Basics of SQL, GraphQL</li>
					<li>Jasmine</li>
					<li>Git</li>
				</ul>
			</div>
		</div>
	</>);
}