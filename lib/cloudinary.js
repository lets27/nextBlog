import cloudinary from "cloudinary";

// upload images to cloudinary store
cloudinary.v2.config({
  cloud_name: process.env.cloudname,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
});

// For local files (File or Blob from FormData)
async function uploadLocalFile(file) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return await new Promise((resolve, reject) => {
    const stream = cloudinary.v2.uploader.upload_stream(
      { folder: "blogs" },
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
    stream.end(buffer);
  });
}

// For remote URLs
async function uploadImageFromUrl(url) {
  return await cloudinary.v2.uploader.upload(url, { folder: "blogs" });
}

export { uploadImageFromUrl, uploadLocalFile };
