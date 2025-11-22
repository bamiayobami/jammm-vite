import {useState} from 'react';
import { returnListOf } from './Track';

const Tracklist = ({tracks, onAdd}) => {
    const [hovered, setHovered] = useState(false);

    const changeLabelColor = () => {
        setHovered(!hovered);
    }

    const labelStyle = {
        color: hovered ? 'blue' : '',
    }

    const songs = returnListOf(tracks, '+', changeLabelColor, onAdd);

    return (
        <div>
            <ul>
                <li><span>Results</span> 
                    <span className="right" style={labelStyle}>Add</span>
                    <hr/>
                </li>
              {songs}
            </ul>
        </div>
    )
}

export default Tracklist;