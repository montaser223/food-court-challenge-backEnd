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

const getStore = async (req, res) => {
  try {
    const stoer = await Store.findOne({ _id: req.params.id });
    if (!stoer)
      return sendError(res, errorMessages.notFound, statusCodes.error.notFound);
    sendResponse(res, stoer, statusCodes.success.ok);
  } catch (error) {
    sendError(res, error.message, statusCodes.error.badRequest);
  }
};

const createStore = async (req, res) => {
  try {
    const createdStoer = await Store.create(req.body);
    sendResponse(res, createdStoer, statusCodes.success.ok);
  } catch (error) {
    sendError(res, error.message, statusCodes.error.badRequest);
  }
};

const updateStore = async (req, res) => {
  try {
    const updatedStore = await Store.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedStore)
      return sendError(res, errorMessages.notFound, statusCodes.error.notFound);
    sendResponse(res, updatedStore, statusCodes.success.ok);
  } catch (error) {
    sendError(res, error.message, statusCodes.error.badRequest);
  }
};

const deleteStore = (req, res) => res.status(200).send("deleteStore works");

module.exports = {
  getStores,
  getStore,
  createStore,
  updateStore,
  deleteStore,
};
