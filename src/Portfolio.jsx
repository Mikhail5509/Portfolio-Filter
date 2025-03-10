import React, { useState } from "react";

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onSelectFilter(filter)}
          style={{
            fontWeight: filter === selected ? "bold" : "normal",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

const ProjectList = ({ projects }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
      {projects.map((project, index) => (
        <img
          key={index}
          src={project.img}
          alt={project.category}
          style={{ width: "200px", height: "150px", objectFit: "cover", borderRadius: "8px" }}
        />
      ))}
    </div>
  );
};

const Portfolio = () => {
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const [selectedFilter, setSelectedFilter] = useState("All");

  const projects = [
    { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg", category: "Business Cards" },
    { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg", category: "Websites" },
    { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg", category: "Websites" },
    { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg", category: "Websites" },
    { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg", category: "Business Cards" },
    { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png", category: "Websites" },
    { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg", category: "Business Cards" },
    { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg", category: "Websites" },
    { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg", category: "Business Cards" },
    { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg", category: "Websites" },
    { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg", category: "Websites" }
  ];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  return (
    <div>
      <Toolbar
        filters={filters}
        selected={selectedFilter}
        onSelectFilter={setSelectedFilter}
      />
      <ProjectList projects={filteredProjects} />
    </div>
  );
};

export default Portfolio;
