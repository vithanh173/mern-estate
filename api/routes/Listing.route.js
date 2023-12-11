import express from "express";
import { createListing, deleteListing, getListing, getListings, updateListing } from "../controllers/Listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const listingRouter = express.Router();

listingRouter.post("/create", verifyToken, createListing);
listingRouter.delete("/delete/:id", verifyToken, deleteListing);
listingRouter.post("/update/:id", verifyToken, updateListing);
listingRouter.get("/get/:id", getListing);
listingRouter.get("/get", getListings);

export default listingRouter;