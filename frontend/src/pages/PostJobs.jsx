import React, { useState } from "react";
import axios from "axios";

const PostJobs = () => {
  const [jobData, setJobData] = useState({
    companyName: "",
    companyLogo: "",
    jobRole: "",
    jobDescription: "",
    experience: "",
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/jobs", jobData);
      alert("Job posted successfully!");
      setJobData({
        companyName: "",
        companyLogo: "",
        jobRole: "",
        jobDescription: "",
        experience: "",
        skills: "",
      });
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Failed to post job.");
    }
  };

  return (
    <div className=" flex justify-center">
      <div className="w-full max-w-lg border bg-[#141b26]  shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Post a Job</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={jobData.companyName}
            onChange={handleChange}
            className="w-full p-3 mb-3 border  rounded bg-transparent "
            required
          />
          <input
            type="text"
            name="companyLogo"
            placeholder="Company Logo URL"
            value={jobData.companyLogo}
            onChange={handleChange}
            className="w-full p-3 mb-3 border  rounded bg-transparent"
            required
          />
          <input
            type="text"
            name="jobRole"
            placeholder="Job Role"
            value={jobData.jobRole}
            onChange={handleChange}
            className="w-full p-3 mb-3 border   rounded bg-transparent"
            required
          />
          <textarea
            name="jobDescription"
            placeholder="Job Description"
            value={jobData.jobDescription}
            onChange={handleChange}
            className="w-full p-3 mb-3 border   rounded bg-transparent"
            required
          ></textarea>
          <input
            type="number"
            name="experience"
            placeholder="Experience (Years)"
            value={jobData.experience}
            onChange={handleChange}
            className="w-full p-3 mb-3 border  rounded bg-transparent "
            required
          />
          <textarea
            name="skills"
            placeholder="Skills"
            value={jobData.skills}
            onChange={handleChange}
            className="w-full p-3 mb-3 border rounded bg-transparent"
            required
          ></textarea>
          <button type="submit" className="bg-red-900 text-white px-4 py-3 rounded">
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJobs;
