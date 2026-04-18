import { Router } from 'express';
import { authenticate } from "../middleware/authenticate.js";
import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';


const router = Router();


router.use(authenticate);
router.get('/notes', getAllNotes);
router.get('/notes/:noteId', getNoteById);
router.post('/notes', createNote);
router.delete('/notes/:noteId', deleteNote);
router.patch('/notes/:noteId', updateNote);

export default router;
