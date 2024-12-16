import User from "@/models/user";
import { ErrorResponse } from "@/models/interfaces";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") await get(req, res);
  else if (req.method === "POST") await post(req, res);
  else notFound(req, res);
}

async function get(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await User.findAll({
      attributes: ["id", "username", "email"],
    });
    res.status(200).json(users);
  } catch (error) {
    const errorResponse: ErrorResponse = {
      message: "Error al obtener usuarios.",
      error,
    };
    res.status(500).json(errorResponse);
  }
}

async function post(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { username, email, password } = req.body;
    const userCreated = await User.create({ username, email, password });
    const userResponse = userCreated.toJSON();
    res.status(200).json(userResponse);
  } catch (error) {
    const errorResponse: ErrorResponse = {
      message: "Error al obtener usuarios.",
      error,
    };
    console.log("errorResponse:", errorResponse);
    res.status(500).json(errorResponse);
  }
}

function notFound(req: NextApiRequest, res: NextApiResponse) {
  const errorResponse: ErrorResponse = {
    message: "No encontrado.",
  };
  res.status(404).json(errorResponse);
}
