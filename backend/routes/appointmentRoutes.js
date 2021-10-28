const express = require("express");
const authmiddlewares = require("../middlewares/authMiddlewares");
const appointmentController = require("../controllers/appointmentController");

const router = express.Router();

//All routes after this middleware are protected
router.use(authmiddlewares.protectRoute);

//Appointment Routes
router
  .route("/")
  .get(appointmentController.getAllAppointments)
  .post(appointmentController.createAnAppointment);

module.exports = router;
