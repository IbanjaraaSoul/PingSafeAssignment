export function postApiCall(bool,token,userAgent,id,name,phoneNumber) {
    return  cy.api({
      method: 'POST',
      url: '/',
      failOnStatusCode: bool,
        headers: {
          'x-session-token': token,
          'user-agent': userAgent,
          'Content-Type': 'application/json'
        },
      body: {
        id: id,
        name:name,
        phone_number: phoneNumber
      }
    })
  }

  export function getApiCall(bool,token,userAgent,id) {
    return  cy.api({
      method: 'GET',
      url: `?id=${id}`,
      failOnStatusCode: bool,
        headers: {
          'x-session-token': token,
          'user-agent': userAgent,
          'Content-Type': 'application/json'
        }
    })
  }

  export function genRanStr(length) {
    let result = '';
    const characters = '0123456789';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const randomChar = characters.charAt(randomIndex);
      result += randomChar;
    }
    return result;
  }