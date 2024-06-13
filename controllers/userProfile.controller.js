import User from "../models/user.model.js";
import userProfile from "../models/userProfile.model.js";

export const createUserProfile = async (req, res) => {
  try {
    await userProfile.sync({ force: false });
    const { email, dob } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({
        message: "User does not exist, so you cannot upload a profile picture",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "Profile picture is required",
      });
    }

    const profilePicPath = req.file.path; // Assuming req.file.path contains the path of the uploaded file

    const userProfile = await UserProfile.create({
      email,
      dob,
      profilePicPath,
    });

    res.status(201).json({ status: "created successfully", data: userProfile });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
