import jwt from "jsonwebtoken";

const generateToken = (id) => {
  const token = jwt.sign({ id }, "thisisasupersecretkey", {
    expiresIn: "30d",
  });
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
    sameSite: "strict",
    secure: true,
  });
};
export default generateToken;
