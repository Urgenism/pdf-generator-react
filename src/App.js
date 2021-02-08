import { BlobProvider } from "@react-pdf/renderer";
import PdfViewer from "./components/PdfViewer";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [base64, setBase64] = useState(null);

  const generateBase64Data = (blob) => {
    if (blob) {
      try {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          const base64data = reader.result;
          setBase64(base64data);
        };
      } catch {
        throw new Error("Unable to generate base64data");
      }
    }
  };

  return (
    <div className='pdf-viewer'>
      <>
        <BlobProvider document={<PdfViewer />} fileName='somename.pdf'>
          {({ blob, url, loading, error }) => {
            generateBase64Data(blob);
            return loading && "Loading document...";
          }}
        </BlobProvider>

        {base64 && <iframe src={`${base64}`} />}
      </>
    </div>
  );
}

export default App;
