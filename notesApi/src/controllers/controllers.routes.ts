import express from 'express';
import DashboardControllers from "./dashboard/dashboard.controller";

const dashboardRoutes = express.Router();
const API_DASH = new DashboardControllers();

dashboardRoutes.use('/add', API_DASH.AddNotes);
dashboardRoutes.use('/getNotesList', API_DASH.GetNotes);
dashboardRoutes.use('/delete/:id', API_DASH.DeleteNotes);
dashboardRoutes.use('/edit/:id', API_DASH.EditNotes);

export default dashboardRoutes;