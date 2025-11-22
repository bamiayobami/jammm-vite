import Tracklist from './Tracklist';
import Playlist from './Playlist';

const SearchResults = ({tracklist, playlist, onUpdate}) => {
    

    return (
        <>
            <Tracklist tracks={tracklist} onAdd={onUpdate}/>
            <Playlist tracks={playlist} onRemove={onUpdate}/>
        </>
    )
}

export default SearchResults;