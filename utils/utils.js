const userExist = async (employees, condition, next) => {
  const data = await employees.findAll({ where: condition });
  try {
    if (data.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userExist,
};
