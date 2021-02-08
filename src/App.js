import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfViewer from "./components/PdfViewer";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [base64, setBase64] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  console.log(base64);

  return (
    <div className='pdf-viewer'>
      {posts && (
        <>
          <PDFDownloadLink
            document={<PdfViewer posts={posts} />}
            fileName='somename.pdf'
          >
            {({ blob, url, loading, error }) => {
              console.log(blob);
              if (blob) {
                var reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = function () {
                  const base64data = reader.result;
                  setBase64(base64data);
                };
              }
              return loading ? "Loading document..." : "Download now!";
            }}
          </PDFDownloadLink>

          {base64 && <iframe src={`${base64}`} />}
        </>
      )}
    </div>
  );
}

export default App;
