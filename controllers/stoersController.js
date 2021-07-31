const getStoers = (req, res) => res.status(200).send("get stoers works");

const getStoer = (req, res) => res.status(200).send("get stoer works");

const createStore = (req, res) => res.status(200).send("createStore works");

const updateStore = (req, res) => res.status(200).send("updateStore works");

const deleteStore = (req, res) => res.status(200).send("deleteStore works");

module.exports = {
  getStoers,
  getStoer,
  createStore,
  updateStore,
  deleteStore,
};
