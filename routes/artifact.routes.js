import express from "express";
import { createArtifact ,getArtifacts} from "../controllers/artifact.controller.js";
import { authMiddleware} from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";
import {upload} from "../middlewares/upload.middleware.js";

const router = express.Router();

/**
 * Protected Artifact APIs
 */
router.post("/", authMiddleware, upload.single("media"), createArtifact);
router.get("/", authMiddleware, getArtifacts);

export default router;