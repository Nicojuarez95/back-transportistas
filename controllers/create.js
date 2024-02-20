import Book from "../models/book.js";

async function createBook(req, res){
  try {
    const { titulo, categoria, descripcion} = req.body;
    const newBook = new Book({ titulo, categoria, descripcion });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default createBook;