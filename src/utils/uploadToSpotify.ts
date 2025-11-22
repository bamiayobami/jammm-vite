interface Track {
    id: string;
    name: string;
    artist: string;
    album: string;
    uri: string;
}

const uploadToSpotify = async (tracks: Track[], playlistName: string) => {
    // Placeholder function to simulate uploading to Spotify
    console.log(`Uploading ${tracks.length} tracks to Spotify playlist: ${playlistName}`);
    return new Promise((resolve) => setTimeout(resolve, 1000));
}



// await fetch('https://api.spotify.com/v1/me/playlists', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json', 
//         'Authorization': 'Bearer YOUR_SPOTIFY_ACCESS_TOKEN' // replace with actual token
//     },
//     body: JSON.stringify({
//         name: document.getElementById('playlist-name').value,
//         description: 'New playlist description',
//         public: false
//     })
// });
  

export default uploadToSpotify;