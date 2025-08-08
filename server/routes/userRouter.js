import express from "express";
import { register, verifyOTP, login, logout, getUser, forgotPassword, resetPassword } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/otp-verification", verifyOTP);
router.post("/login", login); // Assuming login function is defined in userController.js
router.get("/logout", isAuthenticated, logout); // Assuming logout function is defined in userController.js")
router.get("/me", isAuthenticated, getUser);
router.post("/password/forgot", forgotPassword); // Assuming forgotPassword function is defined in userController.js
router.put("/password/reset/:token", resetPassword); // Assuming reset password function is defined in userController.js

export default router;