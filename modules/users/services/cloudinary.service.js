const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dni3lhbk3",
  api_key: "587286479177933",
  api_secret: "IBxSnBajCBxT47Dav7IzfYuw4uE",
});

module.exports = cloudinary;
// cloudinary.image("turtles.jpg", { width: 70, height: 53, crop: "scale" });
