const express = require("express");
const router = express.Router();

const cooperativeRoutes = require("../routes/cooperativeRoutes");

router.use("/cooperatives", cooperativeRoutes);
module.exports = router;
