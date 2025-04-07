import mongoose, { Schema, Document } from "mongoose";

interface IVoter {
  address: string;
  date_of_birth: string;
  father_or_husband_name: string;
  mother_name: string;
  occupation: string;
  voter_name: string;
  voter_number: string;
}

export interface IVoterDocument extends Document {
  city_corporation_or_municipality: string;
  district: string;
  post_code: string;
  post_office: string;
  publication_date: string;
  sub_district_or_police_station: string;
  total_female_voters?: number;
  total_voters?: number;
  union_or_ward: string;
  voter_area: string;
  voter_area_number: string;
  ward_number: string;
  voters: IVoter[];
}

const VoterSchema = new Schema<IVoterDocument>(
  {
    city_corporation_or_municipality: { type: String, required: true },
    district: { type: String, required: true },
    post_code: { type: String, required: true },
    post_office: { type: String, required: true },
    publication_date: { type: String, required: true },
    sub_district_or_police_station: { type: String, required: true },
    total_female_voters: { type: Number },
    total_voters: { type: Number },
    union_or_ward: { type: String, required: true },
    voter_area: { type: String, required: true },
    voter_area_number: { type: String, required: true },
    ward_number: { type: String, required: true },
    voters: [
      {
        address: { type: String, required: true },
        date_of_birth: { type: String, required: true },
        father_or_husband_name: { type: String, required: true },
        mother_name: { type: String, required: true },
        occupation: { type: String, required: true },
        voter_name: { type: String, required: true },
        voter_number: { type: String, required: true },
      },
    ],
  },
  { collection: "voterInformations" }
);

export default mongoose.model<IVoterDocument>("Voter", VoterSchema);
