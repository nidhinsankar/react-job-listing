import JobCard from "./JobCard";
import { data } from "../data.json";

const JobList = () => {
  return (
    <div className="flex flex-col gap-3 w-[540px] mx-auto my-3">
      {data.map((job) => (
        <div key={job.id} className="bg-slate-300 shadow-xl rounded-lg h-20">
          <h2>{job.company}</h2>
          <p>{job.contract}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
