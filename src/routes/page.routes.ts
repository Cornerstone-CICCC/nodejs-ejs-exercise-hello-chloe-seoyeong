import { Router, Request, Response } from "express";

const pageRouter = Router();

pageRouter.get("/", (req: Request, res: Response) => {
  res.status(200).render("index", {
    title: "HOME",
    pageDetail: "EJS Exercise Home",
    className: "home",
  });
});

pageRouter.get("/about", (req: Request, res: Response) => {
  res.status(200).render("about", {
    title: "ABOUT",
    pageDetail:
      "This page is EJS Exercise pages. I don't know why vscode keep creating closing tag automatically.",
    className: "about",
  });
});

pageRouter.get("/contact", (req: Request, res: Response) => {
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

export default pageRouter;
