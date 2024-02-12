const express = require("express");
const router = express.Router();

const work = require("../controller/work");
const work2 = require("../controller/work2");

router.route("/work1").get(work);
router.route("/work2").get(work2);

module.exports = router;
