'use client'
import Image from "next/image";
import { useEffect } from "react";

// Create your instance


export const Projects = () => {

  return (
    <div className='w-full flex-col'>
        <div className='w-full flex items-center'>
            <p className="select-none" style={{fontSize: '10px'}}>➔</p>
            <p className="select-none ml-4" style={{fontFamily: 'roobertb', fontSize: '10px'}}>Projects</p>
        </div>
        {/* <div className='w-full flex items-center'>
            <p className="mt-2" style={{fontFamily: 'roobert', fontSize: '72px'}}>Contributions</p>
            
        </div> */}
        <div className='flex flex-col md:flex-row mt-8 items-center lg:items-start'>
            <div className='w-full md:w-1/2 mt-5' style={{minWidth: '300px'}}>
                <p style={{fontFamily: 'roobert', fontSize: '27px'}}>Developed geostatistical modeling and high performance computing software for subglacial topological simulation in collaboration with the University of Florida Research and NVIDIA AI Staff to improve ice sheet models and sea level rise projections.</p>
            </div>
            
            <div className='w-full md:w-1/2 mt-5 md:-mt-5 md:ml-auto items-center flex-col' style={{minWidth: '300px'}}>
                <p style={{textAlign: 'center', fontFamily: 'roobertm', fontSize: '12px'}} className='mb-2'>Sequential Gaussian Simulations</p>
                <img style={{width: '100%', maxWidth: '880px', marginLeft: 'auto', marginRight: 'auto'}} src="https://i.imgur.com/DwuuSJc.png" alt="Simulated Grenland Topography" />
            </div>
        </div>
        <div className='flex flex-col md:flex-row mt-16 items-center lg:items-start'>
            <div className='w-full md:w-1/3 mt-5 md:-mt-5 items-center flex-col' style={{minWidth: '300px'}}>
                <p style={{textAlign: 'center', fontFamily: 'roobertm', fontSize: '12px'}} className='mb-2'>Monte Carlo simulation</p>
                <img style={{width: '100%', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto'}} src="https://i.imgur.com/n3a8Duw.png" alt="Simulated Grenland Topography" />
            </div>
            <div className='w-full md:w-1/2 mt-5 md:ml-auto' style={{minWidth: '300px'}}>
                <p style={{fontFamily: 'roobert', fontSize: '27px'}}>Developed geostatistical modeling and high performance computing software for subglacial topological simulation in collaboration with the University of Florida Research and NVIDIA AI Staff to improve ice sheet models and sea level rise projections.</p>
            </div>
            
            
        </div>
    </div>
  );
}
