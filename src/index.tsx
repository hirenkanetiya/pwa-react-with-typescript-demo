import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

// import Snackbar from '@material-ui/core/Snackbar';
// import Button from '@material-ui/core/Button';
// import Alert from '@material-ui/lab/Alert';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const useStyles = makeStyles((theme) => ({
//   '@global': {
//     body: {
//       backgroundColor: theme.palette.background.paper,
//     },
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   fab: {
//     position: 'absolute',
//     bottom: theme.spacing(2),
//     right: theme.spacing(2),
//   },
//   snackbar: {
//     [theme.breakpoints.down('xs')]: {
//       bottom: 90,
//     },
//   },
// }));

// const classes = useStyles();
// const handleClick = () => {
//     console.log('hear we need to update it')
// };

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();


// serviceWorkerRegistration.register({
//   onUpdate: (e) => {
//          console.log('yeah we are getting update any ');
//         // <Snackbar
//         //       open
//         //       autoHideDuration={6000}
//         //       message="yeah we are getting a new update"
//         //       action={
//         //         <Button color="inherit" size="small" onClick={handleClick}>
//         //           Update
//         //         </Button>
//         //       }
//         //       // className={classes.snackbar}
//         //     />
//   },
// });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
