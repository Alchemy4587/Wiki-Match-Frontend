import React from 'react'

function AudioCard() {
  return (
    <div>
        <article style={{ backgroundColor: '#BBF1FF', borderColor: '#BBF1FF' }} className="rounded-xl border p-4">
        <div className="flex items-center gap-4 p-5 justify-between">
            <img src='./play.png'
            width={60}
            height={100}
            />
             <a
            className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            href="#">
            Skip
        </a> 
        </div>
       
    </article> 
       
    </div>
  )
}

export default AudioCard
