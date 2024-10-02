import jwt from "jsonwebtoken";

export const tokenGen = (payload) => {
  console.log(process.env.JWT_KEY);

  try {
    const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "10m" });
    return token;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const tokenVerify = (token) => {
  try {
    const payload = jwt.verify(token, process.env.JWT_KEY);
    return payload;
  } catch (error) {
    console.log(error);
    return null;
  }
};
