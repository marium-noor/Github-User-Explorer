import { Search, User, BookUser, PersonStanding } from 'lucide-react'
import React from 'react'

function Features() {
  return (
    <div className="h-auto w-full flex flex-col items-center text-center p-10">
      <div className="md:text-5xl text-3xl font-bold md:font-extrabold text-indigo-200 mb-28">
        <p>"Features!"</p>
        <div className="text-yellow-400 text-3xl md:text-5xl w-20">_____________</div>
      </div>

      <div className="w-full flex flex-wrap justify-evenly items-center text-white">
        <div className="w-64 flex flex-col items-center mb-12 p-6 bg-gray-800 rounded-lg shadow-lg max-h-80">
          <Search className="mb-4" size={40} />
          <p className="text-3xl font-bold text-white mb-2">Search Functionality</p>
        </div>

        <div className="w-64 flex flex-col items-center mb-12 p-6 bg-gray-800 rounded-lg shadow-lg max-h-80">
          <User className="mb-4" size={40} />
          <p className="text-3xl font-bold text-white mb-2">Profile Overview</p>
        </div>

        <div className="w-64 flex flex-col items-center mb-12 p-6 bg-gray-800 rounded-lg shadow-lg max-h-80">
          <BookUser className="mb-4" size={40} />
          <p className="text-3xl font-bold text-white mb-2">Repositories</p>
        </div>

        <div className="w-64 flex flex-col items-center mb-12 p-6 bg-gray-800 rounded-lg shadow-lg max-h-80">
          <PersonStanding className="mb-4" size={40} />
          <p className="text-3xl font-bold text-white mb-2">Contribute</p>
        </div>
        
      </div>
    </div>
  )
}

export default Features
