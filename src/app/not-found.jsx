import React from 'react';

const NorFound = () => {
    return (
        <div className='text-center flex flex-col items-center justify-center h-screen gap-4'>
            <h1 className='text-7xl font-extrabold'>404 - Not Found</h1>
            <p className='text-lg font-semibold'>The page you are looking for does not exist.</p>
        </div>
    );
};

export default NorFound;