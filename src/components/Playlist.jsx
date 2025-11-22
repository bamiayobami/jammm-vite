import { useState } from "react";
import { returnListOf } from "./Track";
import uploadToSpotify from "../utils/uploadToSpotify";

const Playlist = ({tracks, onRemove}) => {
    const [hovered, setHovered] = useState(false);
    const [customName, setCustomName] = useState('');

    const handleNameChange = (e) => {
        setCustomName(e.target.value);
    }

    const changeLabelColor = () => {
        setHovered(!hovered);
    }

    const labelStyle = {
        color: hovered ? 'blue' : '',
    }

    const songs = returnListOf(tracks, '-', changeLabelColor, onRemove);

    const saveToSpotify = async () => {
        alert('Saving to Spotify'); // placeholder for actual save functionality

        await uploadToSpotify(tracks, customName);

        onRemove(null, 'clear'); // clear the playlist after saving
        setCustomName(''); // reset playlist name

        alert('Playlist saved to Spotify!'); // confirmation alert
    }

    return (
        <div>
            <ul>
                <li>
                    <span>Playlist</span> 
                    <span className="right" style={labelStyle}>Remove</span>
                    <hr/>
                </li>
                {songs}
            </ul>
            <input id="playlist-name" type="text" placeholder="Playlist Name" 
                value={customName} onChange={handleNameChange} />
            <br/>
            <button onClick={saveToSpotify} type="button">Save to Spotify</button>
        </div>
    )
}

export default Playlist;