import express from "express";

const app = express();
const port = 4000;
app.use(express.json());

const videos = [
  {
    id: 1,
    title: "An apple mobile which is nothing like apple",
    duration: "12:05",
    thumbnail: "https://cdn.dummyjson.com/productimages/1/thumbnail.jpg",
  },
  {
    id: 2,
    title: "Samsung Universe 9",
    duration: "10:25",
    thumbnail: "https://cdn.dummyjson.com/productimages/2/thumbnail.jpg",
  },
  {
    id: 3,
    title: "Samsung Galaxy Book",
    duration: "06:51",
    thumbnail: "https://cdn.dummyjson.com/productimages/3/thumbnail.jpg",
  },
];
// cau1
app.get("/videos", (req, res) => {
  res.send(videos);
});
// cau 2
app.get("/videos?search=videoTitle", (req, res) => {
    const videoTitle = req.params.title;
    const videosearch = videos.find((data) => {
      return data.title === videoTitle; 
    });
  
    if (videosearch) {
      res.send(videosearch);
    } else {
      res.status(404).send("Video không tồn tại");
    }
  });
  

// cau3
app.get("/videos/:id", (req, res) => {
    const videoId = parseInt(req.params.id); 
    const video = videos.find((data) => {
      return data.id === videoId;
    });
  
    if (video) {
      res.send(video);
    } else {
      res.status(404).send("Video khong ton tai");
    }
  });
//  cau4 


app.listen(port, () => {
  console.log(`Endpoint http://localhost:${port}/videos`);
});
