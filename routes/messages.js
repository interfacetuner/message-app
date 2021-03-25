const express = require("express");
const router = express.Router();

const messagesCtrl = require('../controllers/messages');



router.get("/", messagesCtrl.index);
router.get("/new", messagesCtrl.new);
router.get("/:id", messagesCtrl.show);
router.post("/", messagesCtrl.create);
router.delete("/:id", messagesCtrl.delete);
router.get("/:id/edit", messagesCtrl.edit);
router.put("/:id", messagesCtrl.update);

module.exports = router;
