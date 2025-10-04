const generateId = (array) => array.length > 0 ? Math.max(...array.map(item => item.id)) + 1 : 1;

const validateShelter = (shelter) => {
  const required = ['name', 'address', 'capacity', 'phone', 'email'];
  for (let field of required) {
    if (!shelter[field]) return { valid: false, message: `${field} is required` };
  }
  return { valid: true };
};

const validateRequest = (request) => {
  const required = ['type', 'requesterName', 'requesterPhone', 'urgencyLevel', 'description', 'numberOfPeople'];
  for (let field of required) {
    if (!request[field]) return { valid: false, message: `${field} is required` };
  }
  return { valid: true };
};

module.exports = { generateId, validateShelter, validateRequest };
