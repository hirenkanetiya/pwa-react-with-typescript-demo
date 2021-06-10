// import logo from './logo.svg';
import './App.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Pokegame from './Pokegame';
import Alert from '@material-ui/lab/Alert';
import React, { FC, useEffect } from 'react';



const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.paper,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  snackbar: {
    [theme.breakpoints.down('xs')]: {
      bottom: 90,
    },
  },
}));



function App() {
  const classes = useStyles();
  const [isUpdate, setChange] = React.useState(false);  
  const [waitingServiceWorker, setWaitingServiceWorker] = React.useState<ServiceWorker | null>(null);

  useEffect(() => {
    serviceWorkerRegistration.register({
      onUpdate: onSWUpdate 
      //  (registration) => {
      //   console.log('12345------yeeyeyeyss');
      //   setChange(true);
      //   setWaitingServiceWorker(registration.waiting as ServiceWorker);
  
      //   // waitingWorker = registration && registration.waiting as ServiceWorker;
      //   console.log('update avilable he',isUpdate);
      // },
    });
  }, []);
  
  const onSWUpdate = (registration: ServiceWorkerRegistration) => {
    setChange(true);
    setWaitingServiceWorker(registration.waiting);
  };

  // const updateAlert = function () {
  //   return 
  //  }

  // const handleClick = () => {
  // };

  const updateServiceWorker = () => {
    const registrationWaiting = waitingServiceWorker; 
    console.log('waitWorker -----',registrationWaiting);
    if (registrationWaiting) {
      console.log('yes it found');
      registrationWaiting.postMessage({ type: 'SKIP_WAITING' });

      registrationWaiting.addEventListener('statechange', function (e : any) {
        console.log('hear we need to update it');

        if (e.target.state === 'activated') {
             debugger
            window.location.reload();
          console.log('yes we have success fully reload');
        }
      });
    }
  };

  return (
   
     <div className="App">
        <Pokegame />
        { isUpdate &&
           <Snackbar
              open
              autoHideDuration={6000}
              message="A new update is avilabale please update it !"
              action={
                <Button color="inherit" size="small" onClick={updateServiceWorker}>
                  Update
                </Button>
              }
              className={classes.snackbar}
            />
          }

        {isUpdate?<h1>Welcome to GeeksforGeeks</h1>:
                <h1>A Computer Science Portal for Geeks</h1>
        }
    </div>

    
  )

}

 /* {isUpdate &&
        <Alert action={
          <Button color="inherit" size="small">
            UPDATE
          </Button>
        }> Yeah You have new update please click on Update btn and check it out! </Alert>
  } */

export default App;

