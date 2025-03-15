# Workshop-Routing Project @ SoftUni <img src="/ReactJS-February-2025/04-Workshop-Components/SoftUni.png" width="100">

This is a React <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="30"> Routing Work Shop as part of the React Course at SoftUni.

## In this Workshop: GamesPlay

WE are assigned to implement a Web application (SPA). The application should dynamically display content, based on user interaction and support user profiles and CRUD operations, using a REST service.

### Client

1.Overview

Implement a front-end application (SPA) to see and manage the game world. The app allows visitors to browse different types of games, including the latest collections, with different levels of difficulty. Users can register with an email and password, which allows them to create their own games. Game authors can also edit or delete their own posts at any time.

![Home Page](./public/Screenshot%202025-03-15%20at%2002.32.21.png)

### Server-1.0.1

2.Using the Local REST Service

-   Starting the Service
    The REST service will be in a folder named “server” inside the provided resources archive. It has no dependencies and can be started by opening a terminal in its directory and executing:

```
node server.js
```

If everything initialized correctly, you should see a message about the host address and port on which the service will respond to requests.

-   Sending Requests
    To send a request, use the hostname and port, shown in the initialization log and resource address and method as described in the application requirements. If data needs to be included in the request, it must be JSON-encoded, and the appropriate Content-Type header must be added. Similarly, if the service is to return data, it will be JSON-encoded. Note that some requests do not return a body and attempting to parse them will throw an exception.

Read requests, as well as login and register requests do not require authentication. All other requests must be authenticated.

-   Required Headers
    To send data to the server, include a Content-Type header and encode the body as a JSON string:

```
Content-Type: application/json
{JSON-encoded request body as described in the application requirements}
```

To perform an authenticated request, include an X-Authorization header, set to the value of the session token, returned by an earlier login or register request:

```
X-Authorization: {session token}
```

-   Server Response
    -   Data response:
    ```
    HTTP/1.1 200 OK
    Access-Control-Allow-Origin: *
    Content-Type: application/json
    {JSON-encoded response data}
    ```
    -   Empty response:
    ```
    HTTP/1.1 204 No Content
    Access-Control-Allow-Origin: *
    ```
    -   Error response:
    ```
    HTTP/1.1 400 Request Error
    Access-Control-Allow-Origin: *
    Content-Type: application/json
    {JSON-encoded error message}
    ```
