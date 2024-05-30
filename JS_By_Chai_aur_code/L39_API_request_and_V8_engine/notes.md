[What is an API? by AWS](https://aws.amazon.com/what-is/api/)
[What is an API? by IBM](https://www.ibm.com/topics/api)

# What is API?

An API, or application programming interface, is a set of rules or protocols that enables software applications to communicate with each other to exchange data, features and functionality.

## Ways to get data from a web API in JavaScript.

1. XMLHttpRequest API
2. fetch API

### <span style="color:olive;">XMLHttpRequest</span>

XMLHttpRequest (often abbreviated as XHR) is an API in the form of an object provided by web browser's JavaScript environment. It alows make HTTP requests from a web browser. It is commonly used for AJAX (Asynchronous JavaScript and XML) requests to fetch data from a server without having to reload the entire webpage. Despite its name, XMLHttpRequest can be used to fetch data in various formats, not just XML.

```js
const requestUrl = "https://api.github.com/users/hiteshchoudhary";
const xhr = new XMLHttpRequest();
let data;

xhr.open("GET", requestUrl);

//xhr.responseType = "json";

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    data = JSON.parse(xhr.responseText);
    console.log("Name: " + data.name);
    console.log("Repos: " + data.public_repos);
  }
};
xhr.send();
```

### <span style="color:olive;">fetch</span>
