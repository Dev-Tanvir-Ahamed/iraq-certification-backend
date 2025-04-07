import { Request, Response } from "express";
import * as voterService from "../services/voterService";

export const getAllVoters = async (req: Request, res: Response): Promise<void> => {
  try {
    const voters = await voterService.getAllVoters();
    res.status(200).json(voters);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: (error as Error).message });
  }
};

export const getVoterById = async (req: Request, res: Response): Promise<void> => {
  try {
    const voter = await voterService.getVoterById(req.params.id);
    if (!voter) {
      res.status(404).json({ message: "Voter not found" });
      return;
    }
    res.status(200).json(voter);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: (error as Error).message });
  }
};

export const createVoter = async (req: Request, res: Response): Promise<void> => {
  try {
    const voter = await voterService.createVoter(req.body);
    res.status(201).json(voter);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: (error as Error).message });
  }
};

export const updateVoter = async (req: Request, res: Response): Promise<void> => {
  try {
    const voter = await voterService.updateVoter(req.params.id, req.body);
    if (!voter) {
      res.status(404).json({ message: "Voter not found" });
      return;
    }
    res.status(200).json(voter);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: (error as Error).message });
  }
};

export const deleteVoter = async (req: Request, res: Response): Promise<void> => {
  try {
    const voter = await voterService.deleteVoter(req.params.id);
    if (!voter) {
      res.status(404).json({ message: "Voter not found" });
      return;
    }
    res.status(200).json({ message: "Voter deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: (error as Error).message });
  }
};
