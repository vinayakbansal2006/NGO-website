let volunteers = [
  {
    id: 1,
    name: "Alice Cooper",
    email: "alice@email.com",
    phone: "555-1234",
    skills: ["Cooking", "Counseling"],
    availability: "Weekends",
    assignedShelter: 1,
    status: "active",
    joinedDate: new Date(Date.now() - 2592000000)
  },
  {
    id: 2,
    name: "Bob Martinez",
    email: "bob@email.com",
    phone: "555-5678",
    skills: ["Medical Care", "Administration"],
    availability: "Weekdays",
    assignedShelter: 2,
    status: "active",
    joinedDate: new Date(Date.now() - 1296000000)
  }
];

module.exports = volunteers;
