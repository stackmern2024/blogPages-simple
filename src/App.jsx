import React from 'react';

const App = () => {
  const blogArray = [
    {
      img:"https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      blog:"1",
      desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione placeat earum dolore! Nisi assumenda cupiditate eius sit error mollitia nesciunt? Assumenda omnis id ullam sint eaque corrupti voluptatem quasi?"
    },
    {
      img:"https://images.pexels.com/photos/2651/car-vehicle-vintage-driving.jpg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      blog:"2",
      desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione placeat earum dolore! Nisi assumenda cupiditate eius sit error mollitia nesciunt? Assumenda omnis id ullam sint eaque corrupti voluptatem quasi?"
    },
    {
      img:"https://images.pexels.com/photos/2533088/pexels-photo-2533088.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      blog:"3",
      desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione placeat earum dolore! Nisi assumenda cupiditate eius sit error mollitia nesciunt? Assumenda omnis id ullam sint eaque corrupti voluptatem quasi?"
    },
    {
      img:"https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=400",
      blog:"4",
      desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione placeat earum dolore! Nisi assumenda cupiditate eius sit error mollitia nesciunt? Assumenda omnis id ullam sint eaque corrupti voluptatem quasi?"
    },
    {
      img:"https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      blog:"5",
      desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione placeat earum dolore! Nisi assumenda cupiditate eius sit error mollitia nesciunt? Assumenda omnis id ullam sint eaque corrupti voluptatem quasi?"
    },
    {
      img:"https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      blog:"6",
      desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione placeat earum dolore! Nisi assumenda cupiditate eius sit error mollitia nesciunt? Assumenda omnis id ullam sint eaque corrupti voluptatem quasi?"
    },
   ]

   const recentArray  = [...blogArray].reverse();
  return (
    <div className='py-12'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold '>All Blogs</h1>
        <p>Lorem ipsum dolor sit.</p>
      </div>
     <div className='grid grid-cols-3 gap-4 px-4 mt-6'>
       {blogArray.map((item, indx)=>(
        <div key={indx} className='space-y-3 overflow-hidden '>
          <div className='h-[200px] group  overflow-hidden '>
            <img src={item.img} className='object-cover w-full h-full group-hover:scale-110 duration-300' alt="" />
          </div>
          <h1 className='text-3xl font-bold'>blog {item.blog}</h1>
          <p>{item.desc.slice(0, 90)} ....</p>
          <button className='px-4 hover:scale-x-110 duration-300 py-2 bg-indigo-500 text-white font-bold'>Read More </button>
        </div>
       ))}
     </div>

     <div className='text-center space-y-3 mt-12'>
        <h1 className='text-4xl font-bold '>Recent Blogs</h1>
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <div className='grid grid-cols-3 gap-4 px-4 mt-6'>
       {recentArray.slice(0,3).map((item, indx)=>(
        <div key={indx} className='space-y-3'>
          <div className='h-[200px] group overflow-hidden '>
            <img src={item.img} className='object-cover w-full group-hover:scale-110 duration-300 h-full ' alt="" />
          </div>
          <h1 className='text-3xl font-bold'>blog {item.blog}</h1>
          <p>{item.desc.slice(0, 90)} ....</p>
          <button className='px-4 py-2 bg-red-500 text-white font-bold hover:animate-pulse duration-300'>Read More </button>
        </div>
       ))}
     </div>
    </div>
  );
};

export default App;