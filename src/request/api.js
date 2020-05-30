/* eslint-disable prettier/prettier */
import Request from "./axios";


export const test = data =>
    Request.get("/mock/mock.json", data);
