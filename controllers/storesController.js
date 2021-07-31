const getStores = (req, res) => res.status(200).send("get stores works");

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
