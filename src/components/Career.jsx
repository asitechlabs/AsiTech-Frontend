import React, { useEffect, useState } from "react";
import jobsData from "../data/career.js";

const Careers = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const today = new Date();

    const processedJobs = jobsData
      .map((job) => {
        const deadlineDate = new Date(job.deadline);
        const diffDays = (today - deadlineDate) / (1000 * 60 * 60 * 24);

        return {
          ...job,
          isExpired: today > deadlineDate,
          isRemovable: diffDays > 7,
        };
      })
      .filter((job) => !job.isRemovable);

    setJobs(processedJobs);
  }, [jobsData]); // 👈 important (ensures update)

  return (
    <section className="bg-linear-to-b from-white to-gray-300 py-2 sm:py-4 px-4 sm:px-6 ">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
        Open Positions
      </h2>

      <div className="max-w-3xl mx-auto">
        {/* 🚫 No Jobs */}
        {jobs.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            🚫 No vacancy openings available right now
          </p>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className={`border rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row sm:justify-between gap-3 ${
                  job.isExpired ? "opacity-60 bg-gray-100" : "hover:shadow-md"
                }`}
              >
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">
                    {job.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {job.type} • {job.location}
                  </p>

                  <p className="text-xs mt-1">
                    Deadline: {job.deadline}
                  </p>

                  {job.isExpired && (
                    <p className="text-red-500 text-xs mt-1">
                      ⚠️ This post has expired
                    </p>
                  )}
                </div>

                <button
                  disabled={job.isExpired}
                  className={`px-4 py-2 rounded w-full sm:w-auto ${
                    job.isExpired
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  {job.isExpired ? "Closed" : "Apply"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Careers;