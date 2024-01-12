import express from "express"
import connection from "./db.js"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
import testRoutes from "./routes/test.routes.js"
import userRoutes from "./routes/user.routes.js"
import authRoutes from "./routes/auth.routes.js"
import adminAuthRoutes from "./routes/auth.admin.routes.js"
import servicesRoutes from "./routes/services.routes.js"
import reviewsRoutes from "./routes/reviews.routes.js"
import quotesRoutes from "./routes/quotes.routes.js"
import appointmentRoutes from "./routes/appointments.routes.js"
import cookieParser from "cookie-parser"

const PORT = 3500;
const app = express();
app.use(express.json());
app.use(cookieParser());
// app.use(cors())
app.use(cors({ credentials: true,origin: 'http://localhost:5173'}));

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});


  
app.use("/", testRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminAuthRoutes)
app.use("/api/services", servicesRoutes)
app.use("/api/reviews", reviewsRoutes)
app.use("/api/quotes", quotesRoutes)
app.use("/api/appointments", appointmentRoutes)

app.use((error,req,res,next)=>{
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal Server error";
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    });
});