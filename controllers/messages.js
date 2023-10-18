const Message = require("../models/message");

function getAll(id) {
  return messages;
}

// Function to get message by id
function getOne(id) {
  // Return message from messages array
  return messages[id];
}

// Function to create a message
function create(message) {
  // Push the message to the messages array
  messages.push(message);
}

function deleteOne(id) {
  messages.splice(id, 1);
}

function updateOne(id, updatedMessage) {
  messages.splice(id, 1, updatedMessage);
}



//////////////////////////////////////////
function create(req, res) {
  Message.create(req.body, function (err, message) {
    res.redirect("/messages");
  });
}

function index(req, res) {
  Message.find({}, function (err, messages) {
    res.render("messages/index", {
      messages,
      time: req.time
    })
  })
}

function show(req, res) {
  Message.findById(req.params.id, function (err, message) {
    res.render('messages/show', {
      message,
      messageNum: parseInt(req.params.id) + 1,
    })
  })
}

function newMessage(req, res) {
  res.render('messages/new');
}

function deleteMessage(req, res) {
  Message.findByIdAndRemove(req.params.id, function (err, message) {
    res.redirect("/messages");
  });
}

function edit(req, res) {
  Message.findById(req.params.id, function (err, message) {
    res.render("messages/edit", {
      message,
    });
  });
}

function update(req, res) {
  Message.findByIdAndUpdate(req.params.id, req.body, function (err, updatedMessage) {
    res.redirect(`/messages/${updatedMessage._id}`);
  })
}

module.exports = {
  getAll,
  getOne,
  deleteOne,
  updateOne,
  create,
  index,
  show,
  new: newMessage,
  delete: deleteMessage,
  edit,
  update,
};
