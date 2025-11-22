import data from './mockData';

const base_url = 'https://api.spotify.com';

const search_endpoint = '/v1/search?type=TRACK';
'&limit=20&query=';

const getData = async (accessToken: string, searchInput: string, filter: string) => {
    try {
        if (!accessToken) {
            throw new Error('Access token is required to fetch data from Spotify API.');
        } else {
            console.log(`Fetching data with access token: ${accessToken}, searchInput: ${searchInput}, filter: ${filter}`);
        }
    
        return new Promise<any[]>((resolve) => setTimeout(() => resolve(data), 1000));

    } catch (error) {
        console.error('Error fetching data from Spotify API:', error);
    }
}

export { getData };