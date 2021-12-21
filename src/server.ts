import express, { Request, Response } from "express";

const server = express();

server.listen(3333, () =>
  console.log("🚀 Server is running on port http://localhost:3333")
);
