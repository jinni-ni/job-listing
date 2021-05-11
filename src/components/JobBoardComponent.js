import React from "react";

const JobBoardComponent = ({ job }) => {
  const langAndTools = [...job.languages, ...job.tools];
  return (
    <div className="flex bg-white shadow-lg my-4 p-4">
      <div>
        <img src={job.logo} alt={job.company} />
      </div>
      <div className="flex flex-col justify-between  ml-4">
        <h3 className="font-bold text-sm text-purple-500">{job.company}</h3>
        <h2 className="font-bold text-lg">{job.position}</h2>
        <p className="text-gray-700 text-sm">
          {job.postedAt} * {job.contract} * {job.location}
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default JobBoardComponent;
