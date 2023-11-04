const matchingServices = require("../services/matching.services");

const getMatchedUsers = async (req, res) => {
  try {
    const data = await matchingServices.getMatchedUsers(req.body);
    res.status(data.statusCode).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getMatchedUsers };
