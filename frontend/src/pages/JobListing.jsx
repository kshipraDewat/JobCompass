import React, { useEffect, useState } from "react";
import axios from "axios";

const JobListing = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/jobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen  p-6">
      <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job, index) => (
          <div key={index} className="bg-[#141b26]  border shadow-md rounded-lg p-4 h-[45vh]">
            <img
              src={job.companyLogo}
              alt={job.companyName}
              className=" h-10 w-10 mb-3 rounded-full"
            />
            <h3 className="text-lg font-bold">{job.jobRole}</h3>
            <p className="text-sm text-gray-600">{job.companyName}</p>
            <p className="mt-2 ">{job.jobDescription}</p>
            <p className="mt-2 text-sm">
              <strong>Experience:</strong> {job.experience} years
            </p>
            <p className="mt-2 text-sm">
              <strong>Skills:</strong> {job.skills}
            </p>
           <div className="flex justify-between">

            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Apply
            </button>
            <button
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
              Save Job
            </button>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListing;
