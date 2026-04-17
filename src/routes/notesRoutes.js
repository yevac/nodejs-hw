import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";

import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from "../controllers/notesController.js";

const router = Router();

router.get(
  "/",
  celebrate({
    [Segments.QUERY]: Joi.object({
      page: Joi.number().min(1),
      perPage: Joi.number().min(1).max(100),
      tag: Joi.string(),
      search: Joi.string(),
    }),
  }),
  getAllNotes
);

router.get(
  "/:noteId",
  celebrate({
    [Segments.PARAMS]: Joi.object({
      noteId: Joi.string().hex().length(24).required(),
    }),
  }),
  getNoteById
);

router.post(
  "/",
  celebrate({
    [Segments.BODY]: Joi.object({
      title: Joi.string().required(),
      content: Joi.string().allow(""),
      tag: Joi.string(),
    }),
  }),
  createNote
);

router.delete(
  "/:noteId",
  celebrate({
    [Segments.PARAMS]: Joi.object({
      noteId: Joi.string().hex().length(24).required(),
    }),
  }),
  deleteNote
);

router.patch(
  "/:noteId",
  celebrate({
    [Segments.PARAMS]: Joi.object({
      noteId: Joi.string().hex().length(24).required(),
    }),
    [Segments.BODY]: Joi.object({
      title: Joi.string(),
      content: Joi.string().allow(""),
      tag: Joi.string(),
    }),
  }),
  updateNote
);

export default router;
