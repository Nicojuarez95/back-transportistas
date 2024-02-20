import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  categoria: { type: String, required: true },
  descripcion: { type: String, required: true },
});

const Book = mongoose.model('Book', bookSchema);

export default Book