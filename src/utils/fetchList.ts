import { redirectToSpotifyAuth } from './spotifyAuth';
import { getAccessToken } from './spotifyToken';
import { getData } from './spotifyWebApi';

const fetchList = async (searchInput: string, filter: string) => {
    const urlParams = new URLSearchParams(window.location.search)
    let code = urlParams.get('code');

    if(!code) {
        alert('Please authorize the app to access Spotify.'); // simulating spotify auth redirection
        redirectToSpotifyAuth();
    } else {
        const accessToken = await getAccessToken(code);
        const tracks = await getData(accessToken, searchInput, filter);
        return tracks;
    }
}

export default fetchList;