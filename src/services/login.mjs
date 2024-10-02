import DB from "../config/db.mjs";
import { tokenGen } from "../jwt/jwt.mjs";

export const login = async (userDetails) => {
  if (
    userDetails.username !== undefined &&
    userDetails.password !== undefined
  ) {
    try {
      const user = await DB.user.findUnique({
        where: { username: userDetails.username },
      });
      if (user !== null) {
        if (user.password === userDetails.password) {
          const payload = {
            name: user.name,
            username: user.username,
            role: user.role,
          };
          const token = tokenGen(payload);
          if (token !== null) {
            return {
              token,
              status: "ok",
              msg: "token genereted",
              statusCode: 200,
            };
          } else
            return { status: "error", msg: "system error", statusCode: 500 };
        } else
          return {
            status: "error",
            msg: "incorrect password",
            statusCode: 400,
          };
      } else
        return { status: "error", msg: "username not found", statusCode: 400 };
    } catch (error) {
      console.log(error);
      return { status: "error", msg: "system error", statusCode: 500 };
    }
  } else {
    return { status: "error", msg: "no username or password", statusCode: 400 };
  }
};

export const register = async (userDetails) => {
  if (
    userDetails.name !== undefined &&
    userDetails.password !== undefined &&
    userDetails.username !== undefined
  ) {
    try {
      const newUser = await DB.user.create({
        data: userDetails,
        select: {
          id: true,
          name: true,
          username: true,
        },
      });
      return {
        newUser,
        status: "ok",
        msg: "user created",
        statusCode: 200,
      };
    } catch (error) {
      console.log(error);
      return { status: "error", msg: "system error", statusCode: 500 };
    }
  } else
    return { status: "error", msg: "incorrect user details", statusCode: 400 };
};
