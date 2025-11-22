
const clientID = 'f76562d6d4f94f3e80a4d03ec78b8c90';

// rsBuild localhost server 
// const  redirectURI = 'http://localhost:3000'
// const redirectURI = 'http://192.168.43.67:3000';

// loopback server IPv6
// const redirectURI = 'http://127.0.0.1:3000';
const redirectURI = 'http://127.0.0.1:5173';

// vite dev server
// const  redirectURI = 'http://localhost:5173';
// const  redirectURI = 'http://192.168.43.67:5173';


const scope = 'playlist-modify-public user-read-private user-read-email';

export { clientID, redirectURI, scope };