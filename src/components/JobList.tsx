import JobCard from "./JobCard";
import { data } from "../data.json";

const JobList = () => {
  return (
    <div className="flex flex-col gap-3 w-[75%] mx-auto my-3">
      {data.map((job) => (
        <JobCard
          key={job.id}
          company={job.company}
          contract={job.contract}
          featured={job.featured}
          id={job.id}
          image={job.image}
          languages={job.languages}
          location={job.location}
          newPost={job.new}
          position={job.position}
          postedDate={job["posted-date"]}
          tools={job.tools}
        />
      ))}
    </div>
  );
};

export default JobList;
