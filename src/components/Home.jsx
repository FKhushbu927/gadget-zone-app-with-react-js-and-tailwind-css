import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.jpg';

const Home = () => {
    return (
       
       
        // bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600
        //bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500
        //bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-600
<section>
        <div className='bg-gray-200'>
             <div className='my-container flex flex-col items-center pb-24 text-center lg:pb-56 '>
                <h1 className='text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text'>Welcome to GadgetZone</h1>
                <p className='my-6 text-xs sm:text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-900'>
                Best E-commerce platform for buying high quality Smart Home
                  Appliances at extremely affordable Price.
                </p>
                <div className='flex flex-wrap justify-center'>
                    <Link  to ='/shop' >
                     
                        <button type='button' className='btn-primary'>
                             Shop Now
                        </button>
                       
                    </Link>

                    <Link to='/'>
                           <button type='button' className='btn-outlined'>Learn More</button>
                    </Link>

                </div>
             </div>
        </div>
          <img src={heroImg} 
          alt=""
          className='w-5/6 mx-auto mb-12 -mt-12 lg:-mt-40 rounded-lg shadow-md bg-purple-800'
          
          
          />
        </section>
    );
};

export default Home;