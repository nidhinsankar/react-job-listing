import React from "react";

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
  newPost: boolean;
}

const JobCard: React.FC<IJobCard> = ({
  id,
  image,
  company,
  contract,
  featured,
  newPost,
  languages,
  location,
  position,
  postedDate,
  tools,
}) => {
  return (
    <div
      key={id}
      className="bg-blue-200 w-full shadow-xl rounded-lg h-30 flex px-4 py-2"
    >
      <div className="flex flex-1 space-x-4">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-3 bg-white flex justify-center items-center shadow-md flex-shrink-0">
          <img
            src={image}
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            alt={company}
          />
        </div>
        <div>
          <div>
            {featured && (
              <span className="bg-black text-white px-2 py-0.5 mx-2 rounded-lg">
                featured
              </span>
            )}
            {newPost && (
              <span className="bg-black text-white px-2 py-0.5 mx-2 rounded-lg">
                new
              </span>
            )}
          </div>
          <h2 className="font-bold text-lg text-red-400">{company}</h2>
          <h2 className="font-semibold text-2xl">{position}</h2>
          <ul className="flex font-light text-gray-700 text-lg">
            <li>{contract}</li>
            <span>&nbsp;&bull;&nbsp;</span>
            <li>{postedDate}</li>
            <span>&nbsp;&bull;&nbsp;</span>
            <li>{location}</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-1 items-start gap-2 my-1  flex-wrap px-3">
        {languages.map((lang) => (
          <span className="px-3 py-1 bg-red-300 rounded-lg shadow-lg">
            {lang}
          </span>
        ))}
        {tools.map((tool) => (
          <span className="px-3 py-1 bg-red-300 rounded-lg shadow-lg">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
