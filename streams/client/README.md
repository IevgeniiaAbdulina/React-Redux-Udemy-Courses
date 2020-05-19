**Stream videos project - clone of twitch.tv**

-Navigation with React Router.\
-LogIn with Google.\
-CRUD\
-Show list of streams.\
-Show particular stream details.\
-Options with my streams: Create / Edit / Delete stream.

_Using:_\

<!-- [axios](https://www.npmjs.com/package/axios)\ -->
<!-- [Redux Thunk](https://github.com/reduxjs/redux-thunk)\ -->

[semantic-ui](https://semantic-ui.com/elements/list.html)\
[semantic-ui cdn](https://cdnjs.com/libraries/semantic-ui)\
[react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)\
[OAuth](https://developers.google.com/identity/protocols/oauth2/scopes)\
[Google Developers Console](https://console.developers.google.com/)\
[GAPI Documentation - Authentication](https://developers.google.com/identity/sign-in/web/reference#authentication)\
[React-Redux GitHub](https://github.com/reduxjs/react-redux)\
[Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)\
[Redux Dev Extension - Advanced store setup](https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup)\
<br />
-Redux Devtools persist all actions and state across refresh:

```
http://localhost:3000/?debug_session=<some_string>
```

<br />

```
mkdir streams
cd streams
create-react-app client
ls
cd client
code .
npm start
npm install --save react-router-dom
npm install --save redux react-redux
```

-Add to _public/index.html_ :

```
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
  <script src="https://apis.google.com/js/api.js"></script>
```

<img src="public/img/streams.png" width="500">
