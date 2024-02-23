
import { useEffect } from 'react';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('category.json')
      .then(res => res.json())
      .then(data => setJobs(data))
  }, [])

  console.log(jobs);

  return (
    <div>
      {/* banner */}

      <div className="w-full h-[400px] bg-banner-bg bg-center" data-theme="light">
        <div className="w-full bg-black opacity-80 text-white">
          <div className="h-[400px] max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-5xl uppercase font-bold">
              <Typewriter
                options={{
                  strings: ['Welcome To Amazon!!'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="text-base md:text-lg w-3/4 text-center font-semibold mt-6 italic">

              Cash in on higher pay.
              Wages just increased on most jobs.
            </p>
            <button className=" mt-10 rounded relative -top-1 -left-1 bg-blue-900 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">Find jobs near you</button>
          </div>
        </div>
      </div>

      {/* category */}
      <h1 className='text-3xl font-bold text-center my-10 text-blue-900'>
        Hourly opportunities at Amazon
      </h1>
      {/* map  */}

      <div className='grid grid-cols-2 md:grid-cols-5 md:mx-40 justify-center items-center gap-5'>
        {
          jobs.map(job => <div key={job.id} className='mx-auto card p-4 border-2 '>
            <img className='rounded' src={job.logo} alt="" />
            <h2 className='text-center font-semibold text-sm mt-2'>{job.name}</h2>
            <a href='' className='bg-blue-700 p-1 rounded text-white mx-auto mt-2'>Apply Now</a>

          </div>)
        }
      </div>

      <hr className='my-10' />

      {/* past */}

      <div className='md:flex justify-center items-center mx-20 gap-10'>
        <div className='lg:w-1/2'>
          <img className='' src="https://m.media-amazon.com/images/G/01/wfs/Hero/FC_BFI9_Dupont_2963._CB1693431953_.jpg" alt="" />
        </div>
        <div className=''>
          <h2 className='text-xl font-bold'>Worked for Amazon in the past?</h2>
          <p className='text-sm mt-5'>Connect with other Amazon Alumni and check <br /> out the reasons to come back.</p>
          <button className='mt-5 text-blue-900 font-bold'>Learn more ➜</button>
        </div>
      </div>



      <hr className='my-10' />



      <div className='mx-auto'>
        <h1 className='text-3xl font-bold text-center mt-10 text-blue-900'>
          Ready to get started?
        </h1>
        <p className='text-center text-sm mt-3'>Explore our Hiring Process, Application Guide, Accommodations, and FAQ</p>
        {/* <button className='mt-5 text-white px-7 py-2 font-bold text-center bg-blue-900  rounded-full'>View all jobs in your area</button> */}

      </div>

      <hr className='my-10' />

      <div className=' md:flex justify-evenly items-center mx-20'>
        <div className='w-60 mt-5'>
          <img className='w-32 mx-auto' src="https://m.media-amazon.com/images/G/01/wfs/Icons/Benefits.png" alt="" />
          <h2 className='text-xl text-center font-bold'>Benefits</h2>
          <p className='text-sm text-center'>Healthcare, parental leave, ways to save for the future, employee discounts, and more.</p>
          <p className='mt-2 text-blue-900 font-bold text-center mx-auto'>Explore Benefits →</p>
        </div>
        <div className='w-60 mt-5'>
          <img className='w-32 mx-auto' src="https://m.media-amazon.com/images/G/01/wfs/Icons/Career_Advancement.png" alt="" />
          <h2 className='text-xl text-center font-bold'>Career Advancement</h2>
          <p className='text-sm text-center'>Tuition reimbursement and free job training for expanded careers in nursing, tech, and more.</p>
          <p className='mt-2 text-blue-900 font-bold text-center mx-auto'>About Career Advancement →</p>
        </div>
        <div className='w-60 mt-5'>
          <img className='w-32 mx-auto' src="https://m.media-amazon.com/images/G/01/wfs/Icons/ShiftsSchedules_100x100-01._CB1665432512_.svg" alt="" />
          <h2 className='text-xl text-center font-bold'>Benefits</h2>
          <p className='text-sm text-center'>We offer plenty of schedules and shifts to choose from that work to fit your lifestyle.</p>
          <p className='mt-2 text-blue-900 font-bold text-center mx-auto'>Shift & Schedule Details →</p>
        </div>
        <div className='w-60 mt-5'>
          <img className='w-32 mx-auto' src="https://m.media-amazon.com/images/G/01/wfs/Icons/Our_Culture_.png" alt="" />
          <h2 className='text-xl text-center font-bold'>Our Culture</h2>
          <p className='text-sm text-center'>A safe and inclusive work environment with team and management support.</p>
          <p className='mt-2 text-blue-900 font-bold text-center mx-auto'>Discover Our Culture →</p>
        </div>
      </div>


      <hr className='my-10' />
      {/* updates */}

      <div className=' md:flex justify-evenly mx-20 gap-10'>
        <div className=' mt-5'>
          <img className='mx-auto' src="https://m.media-amazon.com/images/G/01/wfs/BHM_Desktop_Mobile_LatestUpdates_1120x700._CB1706286631_.jpg" alt="" />
          <h2 className='text-xl text-center font-bold mt-2'>Amazon celebrates Black History Month</h2>
          <p className='text-sm text-center'>Every day, we recognize the Black community’s influences on society and are constantly inspired to improve as a company.</p>
          <p className='mt-2 text-blue-900 font-bold text-center mx-auto'>Connect with us →</p>
        </div>
        <div className=' mt-5'>
          <img className='mx-auto' src="https://m.media-amazon.com/images/G/01/wfs/CommBene_1120x700._CB1706891187_.jpg" alt="" />
          <h2 className='text-xl text-center font-bold mt-2'>Save money getting to work</h2>
          <p className='text-sm text-center'>You can cut your commute costs with commuter benefits – now available at select Amazon Warehouses.</p>
          <p className='mt-2 text-blue-900 font-bold text-center mx-auto'>See commuter benefits →</p>
        </div>
        <div className=' mt-5'>
          <img className='mx-auto' src="https://m.media-amazon.com/images/G/01/wfs/LinkedinAward23_Web_1120x700._CB591298415_.jpg" alt="" />
          <h2 className='text-xl text-center font-bold mt-2'>The most desirable workplace in the U.S.</h2>
          <p className='text-sm text-center'>We’ve been recognized by LinkedIn for the third year in a row.</p>
          <p className='mt-2 text-blue-900 font-bold text-center mx-auto'>Join our team →</p>
        </div>

      </div>


      {/* Opportunities */}

      <div className='md:flex justify-center items-center gap-10 mx-20 my-20'>
        <div className='lg:w-1/2'>
          <img className='' src="https://m.media-amazon.com/images/G/01/wfs/Hero/21_Military_800x600._CB653509282_.jpg" alt="" />
        </div>
        <div className=''>
          <h2 className='text-3xl font-bold'>Unique Opportunities</h2>
          <p className='text-sm mt-5'>Amazon prides itself on providing career opportunities for <br /> unique individuals or circumstances, including:</p>
          <button className='mt-5 text-blue-900 font-bold'>Military →</button><br />
          <button className='mt-5 text-blue-900 font-bold'>Students →</button>
        </div>
      </div>

      <hr className='my-10' />

      <div className='mx-auto'>
        <h2 className='text-xl text-center font-bold text-gray-500'>Sign up for job alerts</h2>
        <h1 className='text-3xl font-bold text-center text-gray-700'>
          Text NEWJOB to 31432*
        </h1>
        <p className='text-center text-sm mt-3 text-gray-500'>*By participating, you agree to the terms and privacy policy for recurring autodialed marketing messages from Amazon, to the <br /> phone number you provide. No consent required to buy. Message and data rates may apply.</p>
        <p className='text-center text-lg mt-2 text-gray-500 font-bold'>Text "STOP" to opt-out.</p>
        {/* <button className='mt-5 text-white px-7 py-2 font-bold text-center bg-blue-900  rounded-full'>View all jobs in your area</button> */}

      </div>

      <hr className='my-10' />

      {/* footer */}


      <footer className="footer p-10 bg-blue-950 text-white">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </nav>
      </footer>
    </ div>
  )
}

export default App
