import mongoose, { Schema } from "mongoose";
// Define the interface for TypeScript
interface ICertificate extends Document {
  certificateNumber: string;
  name: string;
  issueDate: string;
  expiryDate: Date;
}

const CertificateSchema: Schema = new Schema({
  certificateNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  issueDate: { type: String, required: true },
  expiryDate: { type: Date, default: Date.now },
});

export default mongoose.model<ICertificate>("Certificate", CertificateSchema);
