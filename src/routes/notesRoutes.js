import { Router } from "express";
import { celebrate } from "celebrate";

import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from "../controllers/notesController.js";

// ❗ ВАЖЛИВО: ці схеми вже мають бути в проєкті
import {
  getAllNotesSchema,
  noteIdSchema,
  createNoteSchema,
  updateNoteSchema,
} from "../schemas/notesSchemas.js";

const router = Router();

// GET /notes
router.get("/", celebrate(getAllNotesSchema), getAllNotes);

// GET /notes/:noteId
router.get("/:noteId", celebrate(noteIdSchema), getNoteById);

// POST /notes
router.post("/", celebrate(createNoteSchema), createNote);

// DELETE /notes/:noteId
router.delete("/:noteId", celebrate(noteIdSchema), deleteNote);

// PATCH /notes/:noteId
router.patch("/:noteId", celebrate(updateNoteSchema), updateNote);

export default router;
