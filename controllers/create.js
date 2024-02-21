import Book from "../models/book.js";

async function createBook(req, res){
  try {
    const { estado, vehiculo, cliente, fecha, cuil, total} = req.body;
    const newBook = new Book({ estado, vehiculo, cliente, fecha, cuil, total });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default createBook;