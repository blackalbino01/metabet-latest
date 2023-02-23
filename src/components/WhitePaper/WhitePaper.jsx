import React, { useState } from "react";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core"; // install this library
// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library

import PDF_File from "../../PDF/Updated-white-paper.pdf";

const WhitePaper = () => {
  const [defaultPdfFile] = useState(PDF_File);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <>
      <div
        className="pdf-container"
        style={{ height: "1780px", maxWidth: "1000px", margin: "0 auto" }}
      >
        {defaultPdfFile && (
          <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
              <Viewer
                fileUrl={defaultPdfFile}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </>
        )}
      </div>
    </>
  );
};

export default WhitePaper;
