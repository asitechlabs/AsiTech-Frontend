const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    type: "Full Time",
    location: "Remote",
    deadline: "2026-05-01",
  },
  {
    id: 2,
    title: "Backend Developer",
    type: "Full Time",
    location: "Kathmandu",
    deadline: "2026-04-15", // expired
  },
  {
    id: 3,
    title: "UI/UX Designer",
    type: "Internship",
    location: "Hybrid",
    deadline: "2026-04-10", // expired > 1 week → will be removed
  },
];

export default jobsData;