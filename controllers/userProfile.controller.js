import User from "../models/user.model.js";
import userProfile from "../models/userProfile.model.js";
import fs from "fs";


export const createUserProfile = async (req, res) => {
  try {
    await userProfile.sync({ force: false });
    const { email, dob } = req.body;

    const exist = await User.findOne({ where: { email } });
    if (!exist) {
      return res.status(404).json({
        message: "User not doesnot exis so you can not upload profile pic",
      });
    }

    const profilePicPath = req.file.path;
    const fileBuffer = fs.readFileSync(profilePicPath);
    const base64Image = fileBuffer.toString('base64');
    fs.writeFileSync(profilePicPath,fileBuffer)
    const userProfileData = await userProfile.create({
      email,
      dob,
      base64Image,
    });
    res
      .status(201)
      .json({ status: "created sucessully", data: userProfileData });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
