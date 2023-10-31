const User = require("../models/user.models");
const response = require("../utils/response");

const matchUsers = (users) => {
  const matchedPairs = [];

  for (let i = 0; i < users.length - 1; i++) {
    for (let j = i + 1; j < users.length; j++) {
      const userA = users[i];
      const userB = users[j];

      const sharedInterests = userA.interests.filter((interest) =>
        userB.interests.includes(interest)
      );

      if (sharedInterests.length > 0) {
        matchedPairs.push({ userA, userB, sharedInterests });
      }
    }
  }

  return matchedPairs;
};

const getMatchedUsers = async (payload) => {
  try {
    const users = await User.find();

    const matchedPairs = matchUsers(users);

    return response.buildSuccessResponse("Matched users found", 200, matchedPairs);
  } catch (error) {
    console.error(error);
    return response.buildFailureResponse("Server Error", 500);
  }
};

module.exports = {
  getMatchedUsers,
};
