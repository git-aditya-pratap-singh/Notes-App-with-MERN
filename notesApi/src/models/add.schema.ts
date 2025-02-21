
import mongoose, { Schema, Document, Model } from 'mongoose';

interface INotes extends Document {
    title: string;
    description: string;
}

const AddSchema: Schema<INotes> = new Schema({
    title: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }  
});

const AddNotesDB: Model<INotes> = mongoose.model<INotes>("addNotes", AddSchema);
export default AddNotesDB;
