const messages = [{
    text: 'Aliens are watching me!',
  },
  {
    text: 'Squid people in my shed!',
  },
  {
    text: 'Lost my head in 88!',
  },
  {
    text: 'Reptillians in PTA meetings!',
  }
];

function getAll(id) {
  return messages;
}

function getOne(id) {
  return messages[id];
}

function create(message) {
  messages.push(message);
}

function deleteOne(id) {
  messages.splice(id, 1);
}

function updateOne(id, updatedMessage) {
  messages.splice(id, 1, updatedMessage);
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  updateOne,
};
