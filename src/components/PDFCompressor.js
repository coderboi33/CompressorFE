import React, { useState } from 'react';
import axios from 'axios';

const PDFCompressor = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const compressPDF = async () => {
        const formData = new FormData();
        formData.append('pdf', file);

        try {
            const response = await axios.post('https://compressorbe-1.onrender.com/compress', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                responseType: 'blob',
            });

            const blob = new Blob([response.data], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'compressed.pdf');
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error compressing PDF:', error);
        }
    };

    return (
        <div>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <button onClick={compressPDF}>Compress PDF</button>
        </div>
    );
};

export default PDFCompressor;
