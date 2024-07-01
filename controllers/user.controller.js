import User from "../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    await User.sync({ force: false });
    const { name,email,age, position } = req.body;
    const user = await User.create({ name,email, age, position });
    res.status(201).json({status:"created sucessully",user:user});
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const details = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).send("User not found");
    }

    await user.update(details);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("caught exception");
  }
};

export const deleteUser= async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    await user.destroy();
    res.status(200).send("User deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting user");
  }
};
