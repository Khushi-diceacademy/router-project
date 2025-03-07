import React from 'react';
import loading from '/loading.gif';

function Loading() {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-full bg-black text-white'>
      <img src={loading} alt='Loading...' className='w-24 h-24 mb-4 animate-spin' />
      <p className='text-lg font-semibold animate-pulse'>Loading, please wait...</p>
    </div>
  );
}

export default Loading;