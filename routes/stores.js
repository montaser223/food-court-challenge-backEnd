const express = require("express");
const router = express.Router();
const stoersController = require("../controllers/stoersController");
/**
 * GET
 * Route: /
 * Result: return all food stoers
 */

router.get("/", stoersController.getStoers);

/**
 * GET
 * Route: /:id
 * Result: return matched food stoers or 404
 */

router.get("/:id", stoersController.getStoer);

/**
 * POST
 * Route: /
 * Result: return created food stoers
 */

router.post("/", stoersController.createStore);

/**
 * PUT
 * Route: /:id
 * Result: return updated food stoers
 */

router.put("/:id", stoersController.updateStore);

/**
 * DELETE
 * Route: /:id
 * Result: return deleted food stoers
 */

router.delete("/:id", stoersController.deleteStore);

module.exports = router;
