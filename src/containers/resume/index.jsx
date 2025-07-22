import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import './style.scss'
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import resumePath from '../../../src/public/CHITRANSHI_MAHESHWARI_RESUME (3).pdf'
// chitranshi's resume
const Resume = () => {
  return (
    <div className='resume-background'>
      <h1 className='resume-heading'
        >My Resume</h1>
      <a
        href={resumePath}
        download="CHITRANSHI_MAHESHWARI_RESUME (3).pdf"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          marginBottom: '1rem',
          backgroundColor: '#ffc107',
          color: '#000',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
        }}
      >
        Download CV
      </a>
      <div className="pdf-viewer">
  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
    <Viewer
      fileUrl={resumePath}
      defaultScale={1.5} 
      
    />
  </Worker>
</div>

    </div>
  );
};

export default Resume;

