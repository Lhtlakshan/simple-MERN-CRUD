import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to your home page</h1>

      <button
        type="button"
        className="text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-center mt-2"
        onClick={()=>navigate('/users')}
      >
        Submit
      </button>
    </div>
  );
}

export default Home
