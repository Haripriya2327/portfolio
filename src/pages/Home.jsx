import hariPic from '../assets/Hari.jpg'
import clickPic from '../assets/click.jpg'
import uriyadiPic from '../assets/uriyadi.jpg'
import weatherPic from '../assets/weather.jpg'
import rpsPic from '../assets/rps.jpg'

export default function Home() {
  return (
    <div className="fixed w-full h-full bg-black font-mono text-white flex flex-col  px-12 py-12 overflow-y-scroll lg:overflow-hidden ">
      <div className=" sm:my-4 md:h-[30%] sm:mx-4 sm:py-4 w-full sm:px-20 flex flex-col ">
        <div className=''>
          <h2 className="text-left text-2xl text-center md:text-5xl mt-4 mb-4">Hi, I'm Haripriya</h2>
        </div>
        <div className="flex flex-col  items-center justify-center ">
          <p className="text-lg sm:text-md text-center sm:text-left mt-4 mb-4 "> "I am an Electrical Engineer Turned Software Developer. I have two years of experience in Tata Consultancy Services.
            I enjoy programming and solving modern day challenges with it."</p>
        </div>
      </div>

      <div className="sm:my-4 sm:mx-4 md:h-[70%] sm:rounded-tl px-20">
      <div className='py-4'>
          <h2 className="text-left text-2xl text-center md:text-5xl mt-4 mb-4">My Projects</h2>
        </div>
        <div className="sm:my-4 sm:rounded-tl text-xl ">
          <ul className=" flex lg:flex-row flex-col justify-center items-center lg:justify-evenly">
            <li className='sm:mx-4 flex flex-col lg:w-1/4'>
              <a className="flex link flex-col justify-center items-center no-underline" href="https://clickenrent.netlify.app">
                <img className="mb-3 w-[75%] h-40  object-cover hover:w-[100%]  shadow-lg" src={clickPic} alt="Hari image" />
                Click&Rent</a></li>
            <li className='sm:mx-4  flex flex-col lg:w-1/4'>
              <a className="link flex flex-col justify-center items-center no-underline" href="https://stormwatch.netlify.app/">
                <img className="mb-3 w-[75%] h-40  object-cover   hover:w-[100%]  shadow-lg" src={weatherPic} alt="Hari image" />
                Weather Wise</a></li>
            <li className='sm:mx-4  flex flex-col lg:w-1/4'>
              <a className="link flex flex-col justify-center items-center no-underline " href="https://haripriya2327.github.io/uriyadi-projectOne/">
                <img className="mb-3 w-[75%] h-40 hover:w-[100%] object-cover shadow-lg" src={uriyadiPic} alt="Hari image" />
                Uriyadi</a></li>
            <li className='sm:mx-4  flex flex-col lg:w-1/4'>
              <a className="link flex flex-col justify-center items-center no-underline" href="https://haripriyamohanasundaram.github.io/rps-play/">
                <img className="mb-3 w-[75%] h-40 hover:w-[100%] object-cover shadow-lg" src={rpsPic} alt="Hari image" />
                RPS</a></li>
            {/* <li className='sm:mx-4  flex flex-col'>
              <img className="mb-3 w-24 h-24 sm:w-24 sm:h-24 rounded-full  shadow-lg" src={hariPic} alt="Hari image" />
              <a className="link flex justify-center items-center" href="https://haripriyamohanasundaram.github.io/rps-play/">Rock Paper Scissors</a></li> */}
          </ul>
        </div>
      </div>
    </div>);
}