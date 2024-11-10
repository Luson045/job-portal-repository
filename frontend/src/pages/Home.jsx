import React from 'react';
import { jobsData } from '../data/mockData';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobsData.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <Link to={`/candidate-details/${job.id}`}>View Candidates</Link>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
