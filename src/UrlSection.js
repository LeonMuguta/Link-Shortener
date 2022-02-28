import { useState } from "react";
import ClipboardJS from "clipboard";

new ClipboardJS(".buttonCopy");

const UrlSection = () => {

    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [shortUrl, setShortUrl] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const info = { long_url: url }

        return fetch("https://api-ssl.bitly.com/v4/shorten", {
            method: "POST",
            headers: {
                "Authorization": "Bearer b41b45e401ba987fae260afe2777bb230c7ef5e8",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        }).then(res => {
            if (res.status === 400) {
                setErrorMessage("Please paste a link only");
            } else {
                setErrorMessage("");
            }
            setIsLoading(false);
            return res.json();
        }).then(data => {
            console.log(data.id);
            setShortUrl(data.id);
        }).catch(err => console.log("ERROR"))
    }

    return ( 
        <div className="paste-section">
            <h1>Paste in your URL below</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className="urlForm" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter url" required/>
                {!isLoading && <button className="button" type="submit">Generate</button>}
                {isLoading && <button className="button" disabled>Generating...</button>}
            </form>
            {errorMessage !== "" && <p>{errorMessage}</p>}
            {
            shortUrl !== "" && 
            <div className="parent">
                <p className="shortUrl child">{shortUrl}</p>
                <button className="buttonCopy child" data-clipboard-action="copy" data-clipboard-target=".shortUrl">Copy</button>
            </div>
            }   
        </div>
    );
}
 
export default UrlSection;