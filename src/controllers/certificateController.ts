import { Request, Response } from "express";
import Certificate from "../models/Certificate"; // Make sure this model exists

export const verifyCertificate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { certificateNumber } = req.body;

    if (!certificateNumber) {
      return res
        .status(400)
        .json({ message: "Certificate number is required" });
    }

    const certificate = await Certificate.findOne({ certificateNumber });

    if (!certificate) {
      return res.status(404).json({ message: "Certificate not found" });
    }

    return res
      .status(200)
      .json({ message: "Certificate is valid", certificate });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

// Function to add a new certificate
export const addCertificate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { certificateNumber, name, issueDate, expiryDate } = req.body;
    if (!certificateNumber || !name || !issueDate) {
      return res
        .status(400)
        .json({
          message: "Certificate number, name, and issue date are required",
        });
    }

    const newCertificate = new Certificate({
      certificateNumber,
      name,
      issueDate,
      expiryDate,
    });
    await newCertificate.save();

    return res
      .status(201)
      .json({
        message: "Certificate added successfully",
        certificate: newCertificate,
      });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};
