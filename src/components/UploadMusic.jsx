import { useState } from "react";
import API from "../api/axios";
import ImageKit from "imagekit-javascript";

const imagekit = new ImageKit({
  publicKey: import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY,
  urlEndpoint: "https://ik.imagekit.io/anandanupam",
});

function UploadMusic() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setloading] = useState(false);

  const uploadToImageKit = async (file) => {
    try {
      const auth = await API.get("/api/upload/auth", {
        withCredentials: true,
      });

      console.log("AUTH DATA:", auth.data); // 🔍 debug

      return new Promise((resolve, reject) => {
        imagekit.upload(
          {
            file,
            fileName: file.name,
            token: auth.data.token,
            expire: auth.data.expire,
            signature: auth.data.signature,
          },
          (err, result) => {
            if (err) {
              console.log("IMAGEKIT ERROR:", err); // 🔥 debug
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
    } catch (error) {
      console.log("AUTH ERROR:", error.response?.data);
      throw error;
    }
  };

  const handleUpload = async () => {
    try {
      // ✅ Validation
      if (!title || !file || !image) {
        alert("All fields are required");
        return;
      }

      if (!file.type.startsWith("audio/")) {
        alert("Only audio files allowed");
        return;
      }

      if (!image.type.startsWith("image/")) {
        alert("Only image files allowed");
        return;
      }

      setloading(true);

      // 🚀 Parallel upload
      const [songRes, imageRes] = await Promise.all([
        uploadToImageKit(file),
        uploadToImageKit(image),
      ]);

      console.log("SONG:", songRes);
      console.log("IMAGE:", imageRes);

      // ✅ Send URLs to backend
      const res = await API.post(
        "/api/music/upload",
        {
          title,
          songUrl: songRes.url,
          imageUrl: imageRes.url,
        },
        { withCredentials: true }
      );

      console.log("FINAL RESPONSE:", res.data);

      alert("✅ Song uploaded");

      // reset
      setTitle("");
      setFile(null);
      setImage(null);

    } catch (err) {
      console.log("FULL ERROR:", err);
      console.log("BACKEND ERROR:", err?.response?.data);
      alert(err?.response?.data?.message || "Upload failed ❌");
    } finally {
      setloading(false);
    }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1518648751968-16f6987377af?w=900&auto=format&fit=crop&q=60)",
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content text-neutral-content text-center">
        <div className="card-body">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Set Your Song Title
            </legend>

            <input
              type="text"
              className="input"
              placeholder="Type here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label className="label">Upload your Image here</label>
            <input
              type="file"
              className="file-input file-input-neutral"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />

            <label className="label">Upload your File here</label>
            <input
              type="file"
              className="file-input file-input-neutral"
              accept="audio/*"
              onChange={(e) => setFile(e.target.files[0])}
            />

            {loading ? (
              <span className="loading loading-infinity loading-xl mt-4"></span>
            ) : (
              <button
                className="btn btn-neutral mt-4"
                onClick={handleUpload}
                disabled={loading}
              >
                UPLOAD
              </button>
            )}
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default UploadMusic;