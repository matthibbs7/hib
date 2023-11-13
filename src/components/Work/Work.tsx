'use client'
import Image from "next/image";
import { useEffect } from "react";

// Create your instance


export const Work = () => {

  return (
    <div className='w-full flex-col mt-10'>
        <div className='w-full flex items-center'>
            <p className="select-none" style={{fontSize: '10px'}}>➔</p>
            <p className="select-none ml-4" style={{fontFamily: 'roobertb', fontSize: '10px'}}>Work</p>
        </div>
        {/* <div className='w-full flex items-center'>
            <p className="mt-2" style={{fontFamily: 'roobert', fontSize: '72px'}}>Contributions</p>
            
        </div> */}
        <div className='flex flex-col md:flex-row mt-8 items-center'>
            <div className='w-full mt-5 md:mt-2' style={{minWidth: '300px', border: '1px solid red'}}>
                <p style={{fontFamily: 'roobert', fontSize: '27px'}}>lve worked as a Software Engineer at the following companies</p>
                <div className='flex h-40 mt-10 md:mt-14 flex-col md:flex-row'>
                    <img style={{maxWidth: '280px', marginLeft: 'auto', marginRight: 'auto', height: '80px', marginTop: '30px'}} src="https://i.imgur.com/0NrKvMu.png" alt="Simulated Grenland Topography" />
                    <img style={{maxWidth: '280px', marginLeft: 'auto', marginRight: 'auto', height: '100px', marginTop: '30px'}} src="https://i.imgur.com/LuQTdb7.png" alt="Simulated Grenland Topography" />
                    <img style={{maxWidth: '280px', marginLeft: 'auto', marginRight: 'auto', height: '80px', marginTop: '30px'}} src="https://i.imgur.com/Dx88Jwn.png" alt="Simulated Grenland Topography" />
                </div>
            </div>
            
            {/* <div className='w-full md:w-1/3 mt-5 md:-mt-5 md:ml-auto items-center flex-col'>
                <p style={{textAlign: 'center', fontFamily: 'roobertm', fontSize: '12px'}} className='mb-2'>Sequential Gaussian Simulations</p>
                <img style={{width: '100%', maxWidth: '280px', marginLeft: 'auto', marginRight: 'auto'}} src="https://i.imgur.com/sOKbiRL.png" alt="Simulated Grenland Topography" />
            </div> */}
        </div>
        <div className='flex flex-col md:flex-row mt-20 items-center lg:items-start'>
            <div className='w-full md:w-2/3 mt-5 md:-mt-5 items-center flex-col'>
                <p style={{textAlign: 'center', fontFamily: 'roobertm', fontSize: '12px'}} className='mb-2'>Sequential Gaussian Simulations</p>
                <div className='md:flex-row flex flex-col'>
                <img style={{width: '100%', maxWidth: '280px', marginLeft: 'auto', marginRight: 'auto'}} src="https://i.imgur.com/8pQwvhn.png" alt="Simulated Grenland Topography" />
                    <img className='mt-6 md:mt-0' style={{width: '100%', maxWidth: '280px', marginLeft: 'auto', marginRight: 'auto'}} src="https://i.imgur.com/d9EloYI.png" alt="Simulated Grenland Topography" />
                </div>
            </div>
            <div className='w-full md:w-1/3 mt-5 md:mt-2 md:ml-auto'>
                <p className='pl-0 md:pl-4' style={{fontFamily: 'roobert', fontSize: '27px'}}>Contributed a vectorized octantal kNN algorithm for Sequential Gaussian Simulations</p>
            </div>
            
            
        </div>
    </div>
  );
}
