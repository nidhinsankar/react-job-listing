interface IJobCard {
  id: string;
  company: string;
  featured: boolean;
  image: string;
  position: string;
  contract: string;
  postedDate: string;
  location: string;
  languages: string[];
  tools: string[];
  new: boolean;
}

const JobCard = () => {
  return <div>JobCard</div>;
};

export default JobCard;
