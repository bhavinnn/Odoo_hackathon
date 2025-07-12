const User = require('../models/user');

// Update profile using email
const updateProfileByEmail = async (req, res) => {
  const { email, ...profileData } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const user = await User.findOneAndUpdate(
      { email },
      profileData,
      { new: true }
    ).select('password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'Profile updated', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  updateProfileByEmail
};
