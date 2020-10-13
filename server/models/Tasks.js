import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Tasks = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    done: { type: Boolean, required: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Tasks;
