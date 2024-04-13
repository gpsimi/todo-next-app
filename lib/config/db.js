import { mongoose } from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://gpsimi01:Wisexcellent*1904#@cluster0.mdptc5y.mongodb.net/todo-app');
    console.log("DB Connected");
}