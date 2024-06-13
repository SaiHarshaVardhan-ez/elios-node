import User from "../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    await User.sync({ force: false });
    const { name, age, position } = req.body;
    const user = await User.create({ name, age, position });
    res.status(201).send("created sucessully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error inserting values");
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
