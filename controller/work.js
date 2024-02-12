const express = require("express");

const work = (req, res) => {
  res.json({ message: "Hello from workController" });
};
//create  
module.exports = work;

