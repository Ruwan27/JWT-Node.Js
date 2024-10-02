import { tokenVerify } from "../jwt/jwt.mjs";

export const authCheck = (req, res, next) => {
  console.log(req.headers.authorization);
  const authorization = req.headers.authorization;
  if (authorization !== undefined) {
    const token = `${authorization}`.split(" ")[1];
    if (token !== undefined) {
      const payload = tokenVerify(token);
      if (payload !== null) {
        // console.log(payload);
        req.userDetails = payload;
        next();
      } else
        return res
          .status(401)
          .json({ status: "error", msg: "unauthorized", statusCode: 401 });
    } else
      return res
        .status(401)
        .json({ status: "error", msg: "unauthorized", statusCode: 401 });
  } else
    return res
      .status(401)
      .json({ status: "error", msg: "unauthorized", statusCode: 401 });
};
