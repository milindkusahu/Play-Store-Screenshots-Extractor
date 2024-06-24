import express from "express";
import gplay from "google-play-scraper";
import cors from "cors";
import path from "path";
import axios from "axios";

const app = express();
app.use(cors());

app.get("/screenshots", async (req, res) => {
  const { appId } = req.query;

  try {
    const appDetails = await gplay.app({ appId });
    const appName = appDetails.title;
    const screenshots = appDetails.screenshots.map(
      (url) => `${url}=w2560-h1440-rw`
    );

    res.json({ appName, screenshots });
  } catch (error) {
    console.error("Failed to fetch app screenshots:", error);
    res.status(500).json({ error: "Failed to fetch app screenshots" });
  }
});

app.get("/app-details", async (req, res) => {
  const { appId } = req.query;

  try {
    const appDetails = await gplay.app({ appId });
    const appName = appDetails.title;
    const screenshots = appDetails.screenshots.map(
      (url) => `${url}=w2560-h1440-rw`
    );
    const featuredGraphicsUrl = `${appDetails.headerImage}=w2560-h1440-rw`;
    const logoUrl = `${appDetails.icon}=w512-h512-rw`;

    res.json({ appName, screenshots, featuredGraphicsUrl, logoUrl });
  } catch (error) {
    console.error("Failed to fetch app details:", error);
    res.status(500).json({ error: "Failed to fetch app details" });
  }
});

app.get("/download", async (req, res) => {
  const { url } = req.query;

  try {
    const response = await axios({
      url,
      method: "GET",
      responseType: "stream",
    });

    const contentType = response.headers["content-type"];
    const fileExtension = getFileExtension(contentType);
    const filename = `${path.basename(url)}.${fileExtension}`;

    res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
    response.data.pipe(res);
  } catch (error) {
    console.error("Failed to download screenshot:", error);
    res.status(500).json({ error: "Failed to download screenshot" });
  }
});

function getFileExtension(contentType) {
  switch (contentType) {
    case "image/webp":
      return "webp";
    case "image/png":
      return "png";
    case "image/jpeg":
      return "jpg";
    default:
      return "bin";
  }
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
