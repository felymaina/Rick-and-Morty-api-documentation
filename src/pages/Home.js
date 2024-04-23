import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Welcome to the Rick and Morty API Documentation</h1>
      <p className="text-lg mt-2">Explore the endless possibilities of the Rick and Morty universe through our API.</p>
      <Link to="/apidocs" className="mt-4 inline-block bg-green-600 text-white p-2 rounded">
        Go to API Documentation
      </Link>
    </div>
  );
};

export default Home;
