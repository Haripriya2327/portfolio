import hariPic from '../assets/Hari.jpg'
import clickPic from '../assets/click.jpg'
import uriyadiPic from '../assets/uriyadi.jpg'
import weatherPic from '../assets/weather.jpg'
import rpsPic from '../assets/rps.jpg'

export default function Home() {
  return (
    <div className="sm:fixed w-full h-full bg-black text-white flex flex-col px-12 py-12 ">
      <div className=" sm:my-4 sm:h-[50%] sm:mx-4 sm:py-4 w-full sm:px-20 flex flex-col justify-center">
        <div className=''>
        <h2 className="text-left text-l text-center md:text-5xl mt-4 mb-4">Hi, I'm Haripriya</h2>
        </div>
        <div className="flex flex-col  items-center justify-center ">
          <p className="text-lg sm:text-md text-center sm:text-left mt-4 mb-4 "> "I am an Electrical Engineer Turned Front-End Developer. I have two years of experience in Tata Consultancy Services.
            I enjoy programming and solving modern day challenges with it."</p>
        </div>
      </div>

      <div className="sm:my-4 sm:mx-4 sm:h-[50%] sm:rounded-tl px-20">
        <div className="sm:my-4 sm:rounded-tl text-xl ">
          <ul className=" flex sm:flex-row flex-col justify-center items-center sm:justify-evenly">
            <li className='sm:mx-4 flex flex-col w-1/4'>
              <a className="flex link flex-col justify-center items-center no-underline" href="https://clickandrent.netlify.app">
              <img className="mb-3 w-[75%] h-40  object-cover hover:w-[100%]  shadow-lg" src={clickPic} alt="Hari image" />
              Click&Rent</a></li>
            <li className='sm:mx-4  flex flex-col w-1/4'>
              <a className="link flex flex-col justify-center items-center no-underline" href="https://stormwatch.netlify.app/">
              <img className="mb-3 w-[75%] h-40  object-cover   hover:w-[100%]  shadow-lg" src={weatherPic} alt="Hari image" />
              Weather Wise</a></li>
            <li className='sm:mx-4  flex flex-col w-1/4'>
              <a className="link flex flex-col justify-center items-center no-underline " href="https://haripriya2327.github.io/uriyadi-projectOne/">
                <img className="mb-3 w-[75%] h-40 hover:w-[100%] object-cover shadow-lg" src={uriyadiPic} alt="Hari image" />
                Uriyadi</a></li>
            <li className='sm:mx-4  flex flex-col w-1/4'>              
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