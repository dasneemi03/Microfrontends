import  React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//Mount function to start up the app
const mount = (el) => {
    ReactDOM.render(
        <App />, //wat we want to display
        el //where we want to display
    );
}

//If we are in development and in Isolation
//call mount immediately
if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#_marketing_dev_root');
    if(el){//if the element actually exists
        mount(el); 
    }
}

//We are tunngin through container(i.e in production)
//and we should export the mount().
export { mount };