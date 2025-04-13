export default function submitForm(req, res, next) {
    const { movie, rating } = req.body;
  
    // Trim whitespace and validate
    const isValidMovie = movie && movie.trim() !== '';
    const numericRating = parseInt(rating, 10);
    const isValidRating = numericRating >= 1 && numericRating <= 10;
  
    //Check if both movie and rating are valid
    if (isValidMovie && isValidRating) {
      req.submitFormFailed = false;
      req.validMovie = movie.trim(); // Save for use in rendering
      req.validRating = numericRating;
    } else {
      req.submitFormFailed = true;
    }
  
    next();
  }
  