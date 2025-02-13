import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// imports
import authActions from "./modules/auth/authActions";
import gameCharacterActions from "./modules/gamecharacter/gameCharacterActions";
import userActions from "./modules/user/userActions";

/* ************************ */

// /* gameCharacter routes */
router.get("/api/gamecharacter/:id", gameCharacterActions.read);
router.get("/api/gamecharacter", gameCharacterActions.sort);
router.post("/api/gamecharacter", gameCharacterActions.add);
router.delete("/api/gamecharacter/:id", gameCharacterActions.destroy);
router.put("/api/gamecharacter/:id", gameCharacterActions.edit);

/* user routes */
router.get("/api/user", userActions.browse);
router.post("/api/user", userActions.add);
router.post("/api/user/login", authActions.login);

export default router;
