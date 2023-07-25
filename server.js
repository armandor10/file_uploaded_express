const express = require('express');
const app = express();
const port = 3000;
// import { initializeApp } from "firebase/app";
// import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
// import config from "./config/firebase.config"

// Require the upload middleware
const upload = require('./upload');

//Initialize a firebase application
// initializeApp(config.firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
// const storage = getStorage();

// Set up a route for file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.json({ message: "Successfully uploaded files" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});