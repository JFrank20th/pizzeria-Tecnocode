//importar libreria
import e from "cors";
import mongoose from "mongoose";

const dbConnection = () => {
  try {
    mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection wtih mongoDB: Ok");
  } catch (error) {
    console.log("Error connecting to mongoDB: \n" + error);
  }
};

export default { dbConnection };
