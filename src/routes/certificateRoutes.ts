import express from "express";
import {
  addCertificate,
  verifyCertificate,
} from "../controllers/certificateController";

const router = express.Router();

router.post("/verify", (req, res) => {
  verifyCertificate(req, res).catch((err) => {
    console.error(err);
    res.status(500).send("Internal Server Error");
  });
});

router.post("/add", (req, res) => {
  addCertificate(req, res).catch((err) => {
    console.error(err);
    res.status(500).send("Internal Server Error");
  });
});

export default router;
