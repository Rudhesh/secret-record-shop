import { body, header } from "express-validator";

const userValidators = [
  body("name")
    .isLength({ min: 3 })
    .withMessage("Please type minimum 3 characters"),
  body("email").isEmail().withMessage("Email is invalid"),
  body("email").normalizeEmail(),
  body("password").isLength({ min: 4 }).withMessage("password too Short"),
  // body("password").isStrongPassword().withMessage("password too weak"),
];

export default userValidators;
