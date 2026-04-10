import { useState } from "react";
import API from "../api/axios";

function UploadMusic() {

  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setloading] = useState(false)

  const handleUpload = async () => {
    try {

      setloading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("song", file);
      formData.append("image", image);

      const res = await API.post("/api/music/musical", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
         withCredentials: true
         
      });

      console.log(res.data);
      alert("Song uploaded");

    } catch (err) {
      console.log(err.response?.data);
      alert("Upload failed");
    }
    finally{
      setloading(false);
    }
  };

  return (
    

<div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1518648751968-16f6987377af?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fG11c2ljJTIwY29uY2VydCUyMHJlZHxlbnwwfDB8MHx8fDI%3D)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
   <div className="card-body">
        <fieldset className="fieldset">
           <legend className="fieldset-legend">Set Your Song Title</legend>
           <input type="text" className="input" placeholder="Type here" onChange={(e) => setTitle(e.target.value)}/>

            
          <label className="label">Upload your Image here</label>
          <input type="file" className="file-input file-input-neutral" onChange={(e) => setImage(e.target.files[0])}/>

           
          <label className="label">Upload your File here</label>
          <input type="file" className="file-input file-input-neutral" onChange={(e) => setFile(e.target.files[0])}/>
          
        {loading ? (
              <span className="loading loading-infinity loading-xl mt-4"></span>
            ):(
          <button className="btn btn-neutral mt-4" onClick={handleUpload}>UPLOAD</button>
            )}
        </fieldset>
      </div>
  </div>
</div>
  );
}

export default UploadMusic;



