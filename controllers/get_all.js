import Book from "../models/book.js";

const controller = {
  get_all: async (req, res, next) => {
    try {

      if (req.query.name) {
        filter.name = new RegExp(req.query.name.trim(), "i");
      }

      let books = await Book.find();
      if (books) {
        return res.status(200).json({
          success: true,
          books,
        });
      }
    } catch (err) {
      next(err);
    }
  },
};

export default controller;