import Voter, { IVoterDocument } from "../models/voterModel";

export const getAllVoters = async (): Promise<IVoterDocument[]> => {
  return await Voter.find();
};

export const getVoterById = async (id: string): Promise<IVoterDocument | null> => {
  return await Voter.findById(id);
};

export const createVoter = async (voterData: IVoterDocument): Promise<IVoterDocument> => {
  return await Voter.create(voterData);
};

export const updateVoter = async (id: string, voterData: Partial<IVoterDocument>): Promise<IVoterDocument | null> => {
  return await Voter.findByIdAndUpdate(id, voterData, { new: true });
};

export const deleteVoter = async (id: string): Promise<IVoterDocument | null> => {
  return await Voter.findByIdAndDelete(id);
};
