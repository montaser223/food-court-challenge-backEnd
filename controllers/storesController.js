const Store = require("../models/store");
const {
  statusCodes,
  sendError,
  sendResponse,
  errorMessages,
} = require("../utils/responses");

const getStores = async (req, res) => {
  try {
    const stoers = await Store.find();
    sendResponse(res, stoers, statusCodes.success.ok);
  } catch (error) {
    sendError(res, error.message, statusCodes.error.badRequest);
  }
};

const getStore = (req, res) => res.status(200).send("get store works");

const createStore = (req, res) => res.status(200).send("createStore works");

const updateStore = (req, res) => res.status(200).send("updateStore works");

const deleteStore = (req, res) => res.status(200).send("deleteStore works");

module.exports = {
  getStores,
  getStore,
  createStore,
  updateStore,
  deleteStore,
};
