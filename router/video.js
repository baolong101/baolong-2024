import express from "express";
import videoModel from "../models/video.js";
import Joi from "joi";
// taoj joi object
const videoObject = Joi.object({
  title: Joi.string().required().min(10).empty().messages({
    "any.required": "khong duocj de trong",
    "string.empty": "ten videokhong duoc trong",
    "string.min": "ten video phai tren 10 ki tu",
  }),
  author: Joi.string().required().empty().messages({
    "any.required": "ten tac gia khong duoc de trong",
    "string.empty": "ten tac gia hong duoc trong",
  }),
  url: Joi.string().required().empty().messages({
    "any.required": "url khong duoc de trong",
    "string.empty": "url khong duoc trong",
  }),
  duration: Joi.number().required().min(10).empty().messages({
    "any.required": "thoi gian khong duocj de trong",
    "number.empty": "thoi gian video khong duoc trong",
    "number.min": "thoi gian qua ngan",
  }),

  
});

const videorouter = express.Router();
videorouter.post('/videos',(req, res, next) => {
    const body = req.body;
    const {error} = videoObject.validate({
      title: body.title,
      author: body.author,
      url: body.url,
      duration: body.duration
    });
    if (error) {
      res.send(error.message);
    } else {
      next();
    }
  },
  async (req, res) => {
    try {
      const body = req.body;
      const video = new videoModel(body);
      const response = await video.save();
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  }
);

export default videorouter;
