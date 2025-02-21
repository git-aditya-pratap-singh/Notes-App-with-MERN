import { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import asyncHandler from '../../utils/asyncHandler';
import AlertService from '../../helpers/AlertService';
import AddNotesDB from "../../models/add.schema";


dotenv.config();

class DashboardControllers extends AlertService {

   public AddNotes = asyncHandler(async (req: Request, res: Response): Promise<any> => {

      const { heading, message } = req.body;

      const newNotes = new AddNotesDB({
         title: heading,
         description: message
      });

      await newNotes.save()
         .then(saveData => {
            return this.sendSuccessResponse(res, true, "New Note Added Successfully!!");
         })
         .catch(err => {
            return this.sendErrorResponse(res, false, "Note hasn't Added!!");
         })
   });

   public GetNotes = asyncHandler(async (req: Request, res: Response): Promise<any> => {
      const response = await AddNotesDB.find()
      return this.sendSuccessResponse(res, true, "Notes fetched!!", response);
   });

   public DeleteNotes = asyncHandler(async (req: Request, res: Response): Promise<any> => {

      const { id } = req.params;
      const responseA = await AddNotesDB.deleteOne({ _id: new mongoose.Types.ObjectId(id) });
      if (responseA.deletedCount === 1)
         return this.sendSuccessResponse(res, true, "Deleted Successfully!")
   });

   public EditNotes = asyncHandler(async (req: Request, res: Response): Promise<any> => {
      const { id } = req.params;
      const updateData = await AddNotesDB.updateOne(
         { _id: new mongoose.Types.ObjectId(id) },
         {
            $set: {
               title: req.body.title,
               description: req.body.description
            }
         },
         { new: true }
      );
      return updateData
         ? this.sendSuccessResponse(res, true, `Notes Updated !!`)
         : this.sendErrorResponse(res, false, `Failed to update Notes !!`);
   });





}
export default DashboardControllers;