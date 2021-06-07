// import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// import Snackbar from '@material-ui/core/Snackbar';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import Pokegame from './Pokegame';

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


function App() {
  // const classes = useStyles();

  // function updateServiceWorker()  {
  //   serviceWorkerRegistration.register({
  //     onSuccess: () => {},
  //     onUpdate: registration => function(){
  //       debugger
  //       console.log('yeah we are getting update any ');
  //       return true;
  //       // <Snackbar
  //       //       open
  //       //       autoHideDuration={6000}
  //       //       message="yeah we are getting a new update"
  //       //       action={
  //       //         <Button color="inherit" size="small" onClick={handleClick}>
  //       //           Update
  //       //         </Button>
  //       //       }
  //       //       className={classes.snackbar}
  //       //     />
  //     },
  //   });
  // };

  // const handleClick = () => {
  //   console.log('hear we need to update it')
  // };

  return (
   
     <div className="App">
        <Pokegame />
        {/* {updateServiceWorker()} */}
    </div>

  )

}


export default App;

