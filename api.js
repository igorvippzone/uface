const express = require("express");
const router = express.Router();

const ip = require("ip");

const axios = require("axios");

router.post("/recognition/callback/qr", (req, res) => {
  console.log(1);
  console.log("qr: ", req);
});

router.get("/setQRCodeCallback/:ip", (req, res) => {
  console.log(2);
  const { ip: deviceIP } = req.params;
  const serverIP = ip.address();

  const query = `pass=1&url=http://${serverIP}:3000`;

  axios
    .post(
      `http://${deviceIP}:8090/device/setQRCodeCallback?${query}/recognition/callback/qr`
    )
    .then((result) => console.log("qr-post ", result.data));
});

router.post("/recognition/callback", (req, res) => {
  console.log(3);
  console.log(req.body);
});

router.get("/setIdentifyCallBack/:ip", (req, res) => {
  console.log(4);
  const { ip: deviceIp } = req.params;
  const serverIp = ip.address();

  const query = `pass=1&callbackUrl=http://${serverIp}:3000`;

  axios
    .post(
      `http://${deviceIp}:8090/setIdentifyCallBack?${query}/recognition/callback`
    )
    .then((res) => console.log("card-post: ", res.data));
});

module.exports = router;
