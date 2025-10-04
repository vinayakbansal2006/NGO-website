let requests = [
  {
    id: 1,
    type: "emergency_shelter",
    requesterName: "Jane Doe",
    requesterPhone: "555-0123",
    requesterEmail: "jane@email.com",
    urgencyLevel: "high",
    description: "Urgent need for shelter for family of 4 after house fire",
    location: "Downtown",
    numberOfPeople: 4,
    specialNeeds: "Medical care needed",
    status: "pending",
    createdAt: new Date(Date.now() - 86400000),
    assignedShelter: null
  },
  {
    id: 2,
    type: "food_assistance",
    requesterName: "Robert Wilson",
    requesterPhone: "555-0456",
    requesterEmail: "robert@email.com",
    urgencyLevel: "medium",
    description: "Need food assistance for single parent with 2 children",
    location: "East side",
    numberOfPeople: 3,
    specialNeeds: "Vegetarian meals preferred",
    status: "approved",
    createdAt: new Date(Date.now() - 172800000),
    assignedShelter: 1
  }
];

module.exports = requests;
