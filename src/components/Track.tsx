import styles from '../styles/track.module.css';

export default function Track({track, sign, onHover, onClick}) {
    return (
        <>
            {track.title} ({track.artist}) <br/>
            album: {track.album}
            <span className={styles.right}
                onMouseOver={onHover}
                onMouseOut={onHover}
                onClick={ () => {
                    let action = sign === '+' ? 'add' : 'remove';
                    onClick(track, action);
                }}
            >{sign}</span>
            <hr/>
        </>
    )
}

// import Track from "../components/Track";

const returnListOf = (tracks, sign, changeLabelColor, updatePlayList) => {
    return  tracks.map( (track, index) => {
       return  <li key={track.id}>
            <Track track={track} sign={sign} onHover={changeLabelColor} onClick={updatePlayList} />
        </li>
    })
}

export { returnListOf };
