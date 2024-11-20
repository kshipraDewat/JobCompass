import React, { createContext, useState } from "react";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([
    {
      companyName: "Dummy Corp",
      companyLogo: "https://via.placeholder.com/150",
      jobRole: "Software Developer",
      jobDescription: "Develop and maintain applications.",
      experience: "3",
      skills: "React, Node.js",
    },
  ]);


  const addJob = (job) => {
    setJobs((prevJobs) => [...prevJobs, job]);
  };

  return (
    <JobContext.Provider value={{ jobs, addJob }}>
      {children}
    </JobContext.Provider>
  );
};
