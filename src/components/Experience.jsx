import React, {  useState } from 'react';


const Experience = () => {
    let[count, setCount] = useState(1);
    const noOfClients=45;
    const noOfProjects=150;
    const noOfEarns=1500;
    const satisfiedPercentage=100;
    const incrementCount = ( ) =>{
        count++;
        if(count >= 44){
            count=45;
            clearInterval();
        }
        setCount(count);
    }
    setInterval(incrementCount, 100);
  return (
    <div className='w-full h-fit'>
    <div className="w-full h-fit px-10 md:px-20 py-24 flex flex-wrap justify-between text-center">
        <div className='w-full md:w-1/6  p-1'>
            <h1 className='mt-2 text-2xl font-semibold'>Some Numbers</h1>
            <p className='mt-4'>Let our experience talk !</p>
        </div>
        <div className='w-full mt-12 md:mt-0 md:w-1/6  border-gray-400 p-1 text-center shadow-md shadow-orange-400'>
            <h1 className='mt-2 text-2xl font-semibold'>{count < 45 ?  count: noOfClients} +</h1>
            <p className='mt-4'>Clients</p>
        </div> <div className='w-full mt-12 md:mt-0 md:w-1/6 b shadow-md shadow-red-400 p-1 text-center'>
            <h1 className='mt-2 text-2xl font-semibold'>{count < 45 ?  count: noOfProjects} +</h1>
            <p className='mt-4'>Projects Completed</p>
        </div> <div className='w-full mt-12 md:mt-0 md:w-1/6 shadow-md shadow-sky-400 p-1 text-center'>
            <h1 className='mt-2 text-2xl font-semibold'>{count < 45 ?  count: noOfEarns} +</h1>
            <p className='mt-4'>Accolades Earned</p>
        </div> <div className='w-full mt-12 md:mt-0 md:w-1/6 shadow-md shadow-purple-400 p-1 text-center'>
            <h1 className='mt-2 text-2xl font-semibold'>{count < 45 ?  count: satisfiedPercentage} %</h1>
            <p className='mt-4'>Satisfied Clients</p>
        </div>
    </div>
    <div className='w-full md:w-2/3 m-auto flex flex-wrap mt-20 h-fit shadow-md shadow-gray-400 px-8 py-4 justify-center'>
        <div className='w-full md:w-2/3 '>
            <h1 className='text-2xl font-semibold text-sky-700 '>Would you like to start a project with us?</h1>
            <p className='text-xl mt-2'>Give it a try and expand your business or brand today!</p>
        </div>
        <div className='w-full md:w-1/3 p-4 flex justify-center   mt-4 md:mt-0'>
            <button className='w-40 h-10 bg-blue-600 rounded-xl text-white'>Request Quote</button>
        </div>

    </div>
    </div>
  )
}

export default Experience