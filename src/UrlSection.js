import { useState } from "react";

const UrlSection = () => {

    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const info = { long_url: "https://dev.bitly.com/", domain: "bit.ly", group_guid: "Ba1bc23dE4F" }

        fetch("https://api-ssl.bitly.com/v4/shorten", {
            method: "POST",
            headers: {
                "Authorization": "Bearer {b41b45e401ba987fae260afe2777bb230c7ef5e8}",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        }).then((res) => {
            res.json();
            console.log(res);
            setIsLoading(false);
        }).then((data) => {
            console.log(data);
    })
    }

    return ( 
        <div className="paste-section">
            <h1>Paste in your URL below</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className="urlForm" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter url" required/>
                {!isLoading && <button className="button">Generate</button>}
                {isLoading && <button className="button" disabled>Generating...</button>}
            </form>
        </div>
    );
}
 
export default UrlSection;