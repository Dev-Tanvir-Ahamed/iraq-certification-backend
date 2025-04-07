import express from "express";
import * as voterController from "../controllers/voterController";

const router = express.Router();

router.get("/", voterController.getAllVoters);
router.get("/:id", voterController.getVoterById);
router.post("/", voterController.createVoter);
router.put("/:id", voterController.updateVoter);
router.delete("/:id", voterController.deleteVoter);

export default router;
