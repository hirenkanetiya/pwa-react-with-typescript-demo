import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();
// serviceWorkerRegistration.register({
//   onSuccess: () => {},
//   onUpdate: () => function(){
//     debugger
//     console.log('yeah we are getting update any ');
//     window.alert('yeas we getting a update')
//     // <Snackbar
//     //       open
//     //       autoHideDuration={6000}
//     //       message="yeah we are getting a new update"
//     //       action={
//     //         <Button color="inherit" size="small" onClick={handleClick}>
//     //           Update
//     //         </Button>
//     //       }
//     //       className={classes.snackbar}
//     //     />
//   },
// });

  serviceWorkerRegistration.register({
    onSuccess: () => {},
    onUpdate: registration => {
     console.log('asdsad')
    }
  });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
