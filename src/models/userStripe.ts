import { model } from "mongoose";
import mongoose, { Document, Model, Schema } from 'mongoose';

interface UserStripe extends Document {
    email: string,
    stripeCustomerId: string,
    stripeSubscriptionId: string,
    stripeSubscriptionStatus: string,
    stripePriceId: string,
}

const userStripeSchema = new Schema<UserStripe>({
    email: { type: String, required: true},
    stripeCustomerId: { type: String, required: true},
    stripeSubscriptionId: { type: String, required: true},
    stripeSubscriptionStatus: { type: String, required: true},
    stripePriceId: { type: String, required: true},
    
});

const SchedulingUserStripe: Model<UserStripe> = mongoose.models.SchedulingUserStripe || model('UserStripe', userStripeSchema);

export default SchedulingUserStripe;