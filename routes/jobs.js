const express = require("express");
const {
  createJob,
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");

const router = express.Router();

router.get("/", getAllJobs);
router.post("/", createJob);
router.get("/:jobId", getJob);
router.patch("/:jobId", updateJob);
router.delete("/:jobId", deleteJob);

module.exports = router;
