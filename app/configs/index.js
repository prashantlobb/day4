export const TOKEN_URL =
  'https://swsut62sse.execute-api.ap-south-1.amazonaws.com/prod/generateToken';
export const URL =
  'https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent';

export const apiRequest = async ({
  path,
  method = 'GET',
  data = null,
  token = null,
}) => {
  try {
    const options = {
      method: method,
      ...(data && {body: JSON.stringify(data)}),
      headers: {},
    };
    if (token) {
      options.headers.Authorization = 'token ' + token;
    }
    const response = await fetch(path, options);
    if (response.status >= 200 && response.status <= 299) {
      const responseData = await response.json();
      return responseData;
    } else if (response.status >= 400 && response.status <= 499) {
      const responseData = await response.json();
      responseData['status'] = response.status;
      return responseData;
    } else if (response.status >= 500 && response.status <= 599) {
      let message = {
        error: 'Server errors',
        error_description: 'Server status 500',
      };
      message['status'] = response.status;
      message['error_description'] =
        'Ooops...!, Something went wrong please try after sometimes.';
      return message;
    }
  } catch (error) {
    let message = {
      error: 'Network Error',
      error_description: error,
    };
    return message;
  }
};
