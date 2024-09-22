import React, { useState } from 'react';
import axios from 'axios';

const YouTubeDownloader = () => {
    const [url, setUrl] = useState(''); // State variable for YouTube URL
    const [format, setFormat] = useState('mp4'); // State variable for format

    const downloadVideo = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/download`, {
                params: { url, format }, // Using the state variable 'url' and 'format'
                responseType: 'blob', // For file download
            });

            const downloadUrl = window.URL.createObjectURL(new Blob([response.data])); // Use a new variable 'downloadUrl'
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.setAttribute('download', `video.${format}`);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error downloading video:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter YouTube URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)} // Update the URL state
            />
            <select value={format} onChange={(e) => setFormat(e.target.value)}>
                <option value="mp4">MP4</option>
                <option value="mp3">MP3</option>
            </select>
            <button onClick={downloadVideo}>Download</button>
        </div>
    );
};

export default YouTubeDownloader;
