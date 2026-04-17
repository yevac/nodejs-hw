import mongoose from "mongoose";
import { TAGS } from "../constants/tags";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: false,
      default: "",
      trim: true,
    },
    tag: {
      type: String,
      enum: TAGS,
      default: "Todo",
    },
  },
  { timestamps: true }
);

// ❗ текстовий індекс
noteSchema.index({ title: "text", content: "text" });

export const Note = mongoose.model("Note", noteSchema);
