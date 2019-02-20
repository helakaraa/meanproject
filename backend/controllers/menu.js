const Menu = require("../models/menu");

exports.getMenu = (req, res, next) => {
  Menu.find().then(documents => {

    res.status(200).json({
      message: "Menu fetched successfully!",
      menus: documents
    });
  });
};
