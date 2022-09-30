const student = require("../model/student.model");

exports.create = (req, res) => {
  res.render("index", {
    page_title: "Home",
  });
};

/**
 * @Method insert
 * @Description Insert User Data
 */

exports.insert = async (req, res) => {
  try {
    req.body.fullName = `${req.body.firstName} ${req.body.lastName}`;
    console.log(req.body);

    let saveData = await student.create(req.body);
    console.log(saveData);
    if (saveData && saveData._id) {
      console.log("Data Added Successfully");
      res.render("index", {
        page_title: "Home",
      });
    } else {
      console.log("Data Not Added");
      res.render("index", {
        page_title: "Home",
      });
    }
  } catch (err) {
    throw err;
  }
};

/**
 * @Method studentView
 * @Description view student data
 */

exports.studentView = async (req, res) => {
  try {
    let studentData = await student.find({});
    // console.log(studentData);
    res.render("studentView", {
      page_title: "student || view",
      studentData,
    });
  } catch (err) {
    throw err;
  }
};
