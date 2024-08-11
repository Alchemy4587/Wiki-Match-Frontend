import React, { useState } from 'react';
import MoreDescription from './more-description';

export default function Card({toggleLinkModal}) {
  const [show, setShow] = useState(false)
  function handleTog () {
    setShow((prev)=> !prev)
    if(show) {
      return <MoreDescription />
    }
  }
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center	'>
      <div
        className="flex flex-col gap-4 rounded-lg bg-white shadow-md dark:bg-neutral-200 ">
        <img
          className=" h-44 w-full rounded-t-lg object-cover  md:rounded-none md:rounded-l-lg"
          src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
          alt="Image" />
        <div className="flex flex-col h-28">
          <h5
            className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Label
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>

        </div>
    <div className=' pb-2 float-right'>
    <button onClick={toggleLinkModal} className='font-bold text-2xl lg:text-4xl text-green-500'>+</button>
    </div>
      </div>
      <div
        className="flex flex-col gap-4 rounded-lg bg-white shadow-md dark:bg-neutral-200 ">
        <img
          className=" h-44 w-full rounded-t-lg object-cover  md:rounded-none md:rounded-l-lg"
          src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
          alt="Image" />
        <div className="flex flex-col h-28">
          <h5
            className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Label
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>

        </div>
    <div className=' pb-2 float-right'>
    <button onClick={toggleLinkModal} className='font-bold text-2xl lg:text-4xl text-green-500'>+</button>
    </div>
      </div>
      <div
        className="flex flex-col gap-4 rounded-lg bg-white shadow-md dark:bg-neutral-200 ">
        <img
          className=" h-44 w-full rounded-t-lg object-cover  md:rounded-none md:rounded-l-lg"
          src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
          alt="Image" />
        <div className="flex flex-col h-28">
          <h5
            className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Label
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>

        </div>
    <div className=' pb-2 float-right'>
    <button onClick={toggleLinkModal} className='font-bold text-2xl lg:text-4xl text-green-500'>+</button>
    </div>
      </div>
      <div
        className="flex flex-col gap-4 rounded-lg bg-white shadow-md dark:bg-neutral-200 ">
        <img
          className=" h-44 w-full rounded-t-lg object-cover  md:rounded-none md:rounded-l-lg"
          src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
          alt="Image" />
        <div className="flex flex-col h-28">
          <h5
            className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Label
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>

        </div>
    <div className=' pb-2 float-right'>
    <button onClick={toggleLinkModal} className='font-bold text-2xl lg:text-4xl text-green-500'>+</button>
    </div>
      </div>
      <div
        className="flex flex-col gap-4 rounded-lg bg-white shadow-md dark:bg-neutral-200 ">
        <img
          className=" h-44 w-full rounded-t-lg object-cover  md:rounded-none md:rounded-l-lg"
          src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
          alt="Image" />
        <div className="flex flex-col h-28">
          <h5
            className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Label
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>

        </div>
    <div className=' pb-2 float-right'>
    <button onClick={toggleLinkModal} className='font-bold text-2xl lg:text-4xl text-green-500'>+</button>
    </div>
      </div>
      <div
        className="flex flex-col gap-4 rounded-lg bg-white shadow-md dark:bg-neutral-200 ">
        <img
          className=" h-44 w-full rounded-t-lg object-cover  md:rounded-none md:rounded-l-lg"
          src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
          alt="Image" />
        <div className="flex flex-col h-28">
          <h5
            className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Label
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>

        </div>
    <div className=' pb-2 float-right'>
    <button onClick={toggleLinkModal} className='font-bold text-2xl lg:text-4xl text-green-500'>+</button>
    </div>
      </div>
      <div
        className="flex flex-col gap-4 rounded-lg bg-white shadow-md dark:bg-neutral-200 ">
        <img
          className=" h-44 w-full rounded-t-lg object-cover  md:rounded-none md:rounded-l-lg"
          src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
          alt="Image" />
        <div className="flex flex-col h-28">
          <h5
            className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Label
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>

        </div>
    <div className=' pb-2 float-right'>
    <button onClick={toggleLinkModal} className='font-bold text-2xl lg:text-4xl text-green-500'>+</button>
    </div>
      </div>
      <div
        className="flex flex-col gap-4 rounded-lg bg-white shadow-md dark:bg-neutral-200 ">
        <img
          className=" h-44 w-full rounded-t-lg object-cover  md:rounded-none md:rounded-l-lg"
          src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
          alt="Image" />
        <div className="flex flex-col h-28">
          <h5
            className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Label
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>

        </div>
    <div className=' pb-2 float-right'>
    <button onClick={toggleLinkModal} className='font-bold text-2xl lg:text-4xl text-green-500'>+</button>
    </div>
      </div>
      <div
        className="flex flex-col gap-4 rounded-lg bg-white shadow-md dark:bg-neutral-200 ">
        <img
          className=" h-44 w-full rounded-t-lg object-cover  md:rounded-none md:rounded-l-lg"
          src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
          alt="Image"  onClick={toggleLinkModal}/>
        <div className="flex flex-col h-28">
          <h5
            className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Label
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>

        </div>
    <div className=' pb-2 float-right'>
    <button onClick={toggleLinkModal} className='font-bold text-2xl lg:text-4xl text-green-500'>+</button>
    </div>
      </div>
      
    </div>
    
  );
}