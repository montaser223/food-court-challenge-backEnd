const Store = require("../models/store");
const {
  statusCodes,
  sendError,
  sendResponse,
  errorMessages,
} = require("../utils/responses");
const uploadImage = require("../middlewares/uploadImage");
const fs = require("fs");

const getStores = async (req, res) => {
  try {
    const stores = await Store.find();
    sendResponse(res, stores, statusCodes.success.ok);
  } catch (error) {
    sendError(res, error.message, statusCodes.error.badRequest);
  }
};

const getStore = async (req, res) => {
  try {
    const store = await Store.findOne({ _id: req.params.id });
    if (!store)
      return sendError(res, errorMessages.notFound, statusCodes.error.notFound);
    sendResponse(res, store, statusCodes.success.ok);
  } catch (error) {
    sendError(res, error.message, statusCodes.error.badRequest);
  }
};

const createStore = async (req, res) => {
  const upload = uploadImage.single("storeLogo");
  upload(req, res, async (err) => {
    if (err)
      return sendError(res, err.message, statusCodes.error.invalidMediaType);
    if (req.file) req.body.storeLogo = req.file.destination + req.file.filename;
    try {
      const createdStore = await Store.create(req.body);
      sendResponse(res, createdStore, statusCodes.success.ok);
    } catch (error) {
      sendError(res, error.message, statusCodes.error.badRequest);
    }
  });
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

const deleteStore = async (req, res) => {
  try {
    const deletedStore = await Store.findOneAndDelete({ _id: req.params.id });
    if (!deletedStore)
      return sendError(res, errorMessages.notFound, statusCodes.error.notFound);
    deleteFile(deletedStore.storeLogo);
    sendResponse(res, deletedStore, statusCodes.success.ok);
  } catch (error) {
    sendError(res, error.message, statusCodes.error.badRequest);
  }
};

const deleteFile = (path) => {
  return fs.unlink(path, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

module.exports = {
  getStores,
  getStore,
  createStore,
  updateStore,
  deleteStore,
};
