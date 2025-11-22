import { clientID, redirectURI } from './credentials';

const getAccessToken = async (code: string) => {
  let fakeToken = 'access_token_' + code;

  return fakeToken; // just prevent further execution for now
  const codeVerifier = localStorage.getItem('code_verifier');

  const url = "https://accounts.spotify.com/api/token";
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientID,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectURI,
      code_verifier: codeVerifier!,
    }),
  }

  const body = await fetch(url, payload);
  const response = await body.json();

  // localStorage.setItem('access_token', response.access_token);
  return response.access_token;
}

export { getAccessToken };