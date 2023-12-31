const express = require("express");
const route = express.Router();

const {
    getAllRoles,
    updateRoleDetails,
    createRoleDetails,
} = require('../controller/roleController')
const { verifyAccessToken } = require("../shared/jwt");



route.route("/").get(verifyAccessToken, getAllRoles)
route.route("/").post(createRoleDetails)
route.route("/").put(verifyAccessToken, updateRoleDetails)





module.exports = route