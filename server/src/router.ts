import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// imports
import gameCharacterActions from "./modules/gamecharacter/gameCharacterActions";

/* ************************ */

/* gameCharacter routes */
router.get("/api/gamecharacter", gameCharacterActions.browse);
router.get("/api/gamecharacter/:id", gameCharacterActions.read);
router.post("/api/gamecharacter", gameCharacterActions.add);

export default router;
