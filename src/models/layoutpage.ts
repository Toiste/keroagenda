import { model } from "mongoose";
import mongoose, { Document, Model, Schema } from 'mongoose';
import { string } from "zod";

interface ISchedulingPage extends Document {
  token: string;
  title: string;
  slug: string;
  published: boolean;
}

const schedulingSchema = new Schema<ISchedulingPage>({
  token: { type: String, required: true},
  title: { type: String, required: true },
  slug: { type: String, required: true },
  published: { type: Boolean, required: true },
});

const SchedulingPage: Model<ISchedulingPage> = mongoose.models.SchedulingPage || model('SchedulingPage', schedulingSchema);

export default SchedulingPage;