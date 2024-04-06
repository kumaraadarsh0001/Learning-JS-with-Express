const myLogger = (req, res, next) => {
  console.log("Write Your Logic Hare...");
  next();
};

export default myLogger;
