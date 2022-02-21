import { useState } from "react";

const UrlSection = () => {

    const [url, setUrl] = useState("");

    return ( 
        <div className="paste-section">
            <h1>Paste in your URL below</h1>
            <form action="" method="post">
                <input type="text" className="urlForm" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter url"/>
                <button className="button">Generate</button>
            </form>
        </div>
    );
}
 
export default UrlSection;