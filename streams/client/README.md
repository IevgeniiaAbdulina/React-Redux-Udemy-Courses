**Stream videos project - clone of twitch.tv**

-Navigation with React Router.\
-LogIn with Google.\
-CRUD\
-Show list of streams.\
-Show particular stream details.\
-Options with my streams: Create / Edit / Delete stream.

_Using:_\
[React-Redux GitHub](https://github.com/reduxjs/react-redux)\

<!-- [axios](https://www.npmjs.com/package/axios)\ -->
<!-- [Redux Thunk](https://github.com/reduxjs/redux-thunk)\ -->

[semantic-ui](https://semantic-ui.com/elements/list.html)\
[semantic-ui cdn](https://cdnjs.com/libraries/semantic-ui)\
[react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)\
[OAuth](https://developers.google.com/identity/protocols/oauth2/scopes)\
[Google Developers Console](https://console.developers.google.com/)

```
mkdir streams
cd streams
create-react-app client
ls
cd client
code .
npm start
npm install --save react-router-dom
```

-Add to _public/index.html_ :

```
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
  <script src="https://apis.google.com/js/api.js"></script>
```

<img src="public/img/streams.png" width="500">
