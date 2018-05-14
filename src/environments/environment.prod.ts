export const environment = {
  production: true,
  API_BASE_URL: 'https://api-medium-shared.herokuapp.com',
  clientId: '704670e41f3',
  clientSecret: 'aa0147624e82797a3b47d1c157c053628e89cc21',
  redirectUri: 'https://t4eng.github.io/Angular-OAuth2-API-Medium/callback',
  Host: 'https://api.medium.com/v1',
  scope: 'basicProfile,listPublications',
  state: 'state',
  responseType: 'code',
  GET_TEMP_CODE: 'https://medium.com/m/oauth/authorize?client_id=704670e41f3&scope=basicProfile,listPublications&state=state&response_type=code&redirect_uri=https://t4eng.github.io/Angular-OAuth2-API-Medium/callback'
}