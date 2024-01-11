import Reviews from "../models/reviews.model.js";

export const getAllReviews = async (req, res) => {
  try {
    const result = await Reviews.find();
    if (!result) {
      res.status(400).json({ message: "No reviews found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching reviews", error);
    res.status(402).json({ message: "error while fetching reviews", error });
  }
};

export const getAllByStatus = async (req, res) => {
  try {
    const result = await Reviews.find({reviewStatus:true});
    if (!result) {
      res.status(400).json({ message: "No reviews found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching reviews", error);
    res.status(402).json({ message: "error while fetching reviews", error });
  }
};



export const addReview = async (req, res) => {
  try {
    const { reviewTitle, reviewMsg, reviewRating, reviewBy, reviewByID } =
      req.body;
    const newReview = new Reviews({
      reviewTitle: reviewTitle,
      reviewMsg: reviewMsg,
      reviewRating: reviewRating,
      reviewBy: reviewBy,
      reviewByID: reviewByID,
    });
    newReview.save();
    const allReview = await Reviews.find();
    if (!newReview) {
      res.status(400).json({ message: "Cannot add review" });
    }
    res.send(allReview);
  } catch (error) {
    console.error("Error adding review", error);
    res.status(402).json({ message: "error while adding review", error });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const deletedQuery = await Reviews.findByIdAndDelete(req.params.id);
    if (!deletedQuery) {
      return res.status(400).json({ message: "Cannot delete review" });
    }
    res
      .status(200)
      .json({ success: true, message: "Review deleted successfully" });
  } catch (error) {
    console.error("Error deleting review", error);
    res.status(402).json({ message: "error while deleting review", error });
  }
};


export const getOneReview = async (req, res) => {
  try {
    const reviewResult = await Reviews.findOne({ reviewByID: req.params.id });
    if (!reviewResult) {
      return res.status(400).json({ message: "No review found" });
    }
    const result = [reviewResult];
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching review", error);
    res.status(402).json({ message: "error while fetching review", error });
  }
};


export const editReviewStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const updateStatus = req.body.status
    const editResult = await Reviews.findByIdAndUpdate(id, {reviewStatus:updateStatus}, {new:true});

    if (!editResult) {
      return res.status(400).json({ message: "No review found" });
    }
    res.status(200).json(editResult);
  } catch (error) {
    console.error("Error updating review", error);
    res.status(402).json({ message: "error while updating review", error });
  }
};
