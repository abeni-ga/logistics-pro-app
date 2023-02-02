/* eslint-disable no-console */
import axios from "axios";

const httpRequest = async (method, url, request) => {
  var config = {
    method: method,
    url: url,
    headers: {},
    data: request,
  };
  const result = await axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
  console.log("result", result);
  return result;
  // try {
  //   const response = await axios[method](url, request);
  //   return response;
  // } catch (error) {
  //   console.error(error);
  // }
};

/**
 * Get is a function that takes a url and a request and returns the
 * result of calling httpRequest with
 * the arguments "get", url, and request.
 * @param url - The URL to make the request to.
 * @param request - The request object that is passed to the API.
 */
const get = async (url, request) => {
  const resp = await httpRequest("GET", url, request);
  return resp;
};
/**
 * Deleter is a function that takes a url and a request and
 * returns the result of calling httpRequest
 * with the arguments "delete", url, and request.
 * @param url - The url to make the request to.
 * @param request - The request object that will be passed to the httpRequest function.
 */
const deleter = async (url, request) => {
  const resp = await httpRequest("DELETE", url, request);
  return resp;
};
/**
 * Post is a function that takes a url and a request and
 * returns the result of calling httpRequest with
 * the arguments "post", url, and request.
 * @param url - The URL to make the request to.
 * @param request - The request object that will be sent to the server.
 */
const post = async (url, request) => {
  const resp = await httpRequest("POST", url, request);
  console.log("res", resp);

  return resp;
};
/**
 * Put is a function that takes a url and a request and
 * returns the result of calling httpRequest with
 * the arguments put, url, and request.
 * @param url - The URL to make the request to.
 * @param request - The request object that will be sent to the server.
 */
const put = async (url, request) => {
  const resp = await httpRequest("PUT", url, request);
  return resp;
};
/**
 * Patch is a function that takes a url and a request and
 * returns the result of calling httpRequest
 * with the arguments "patch", url, and request.
 * @param url - The URL to make the request to.
 * @param request - The request object that contains the data to be sent to the server.
 */
const patch = async (url, request) => {
  const resp = await httpRequest("PATCH", url, request);
  return resp;
};

export { get, deleter, post, put, patch };
