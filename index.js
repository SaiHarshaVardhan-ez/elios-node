import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import userRoutes from './routes/user.route.js';
import userProfileRoutes from './routes/userProfile.route.js';

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/employees', userRoutes);

app.use('/employeeProfiles', userProfileRoutes);


app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
