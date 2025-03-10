"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
pageRouter.get("/", (req, res) => {
    res.status(200).render("index", {
        title: "HOME",
        pageDetail: "EJS Exercise Home",
        className: "home",
    });
});
pageRouter.get("/about", (req, res) => {
    res.status(200).render("about", {
        title: "ABOUT",
        pageDetail: "This page is EJS Exercise pages. I don't know why vscode keep creating closing tag automatically.",
        className: "about",
    });
});
pageRouter.get("/contact", (req, res) => {
    res.status(200).render("contact", {
        title: "CONTACT",
        pageDetail: "Contact!!!",
        contactsWay: [
            {
                mail: "contactme@here.com",
                tell: "342-434-2342",
                location: "Vancouver, BC, Canada",
            },
        ],
        className: "contact",
    });
});
exports.default = pageRouter;
