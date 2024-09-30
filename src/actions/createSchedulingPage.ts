"use server";

import * as z from "zod";

import {ScheduleformSchema} from '@/schemas/index'

import mongoose from 'mongoose';
import SchedulingPage from '@/models/layoutpage';

  const uri= process.env.MONGODB_URI

  mongoose.connect(uri as string)

export const createSchedulePage = async (values: z.infer<typeof ScheduleformSchema>) =>{
  // Create a new blog post object
  const article = new SchedulingPage({
    token: values.title,
    title: values.title,
    slug: values.slug,
    published: true,
  });
  
  // Insert the article in our MongoDB database
  await article.save();
}

export const createUserStripe = async (stripeCustomerId: String,
  stripeSubscriptionId: String,
  stripeSubscriptionStatus: String,
  stripePriceId: String,) =>{
  // Create a new blog post object
  const article = new SchedulingPage({
    stripeCustomerId: stripeCustomerId,
    stripeSubscriptionId: stripeSubscriptionId,
    stripeSubscriptionStatus: stripeSubscriptionStatus,
    stripePriceId: stripePriceId
  });
  
  // Insert the article in our MongoDB database
  await article.save();
}

