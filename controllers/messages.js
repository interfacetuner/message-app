const Message = require("../models/message");


function index(req, res) {
  res.render("messages/index", {
    messages: Message.getAll(),
    time: req.time
  });
}

function show(req, res) {
  res.render('messages/show', {
    message: Message.getOne(req.params.id),
    messageNum: parseInt(req.params.id) + 1,
  });
}

function newMessage(req, res) {
  res.render('messages/new');
}

function create(req, res) {
  console.log(req.body)
  req.body.done = false;
  Message.create(req.body);
  res.redirect("/messages");
}

function deleteMessage(req, res) {
  Message.deleteOne(req.params.id);

  res.redirect("/messages");
}

function edit(req, res) {
  const message = Message.getOne(req.params.id);
  res.render("messages/edit", {
    message,
    messageId: req.params.id,
  });
}

function update(req, res) {
  req.body.done = req.body.done ? true : false;

  Message.updateOne(req.params.id, req.body);

  res.redirect(`/messages/${req.params.id}`);
}

module.exports = {
  index,
  show,
  new: newMessage,
  create,
  delete: deleteMessage,
  edit,
  update,
};
