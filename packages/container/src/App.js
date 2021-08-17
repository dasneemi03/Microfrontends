import React from 'react';
import MarketingApp from './components/MarketingApp';

export default () => {
    return <div>
        <h1>Hi I'm Container's App!</h1>
        <hr />
        <MarketingApp />
        </div>
}
// import { Switch, Route, BrowserRouter } from 'react-router-dom';
// import { StylesProvider } from '@material-ui/core/styles';
// import Landing from './components/Landing';
// import Pricing from './components/Pricing';

// export default ()=>{
//     return <div>
//         <StylesProvider>
//             <BrowserRouter>
//                 <Switch>
//                    <Route exact path='/pricing' component={Pricing}></Route> 
//                    <Route path='/' component={Landing}></Route> 
//                 </Switch>
//             </BrowserRouter>
//         </StylesProvider>
//     </div>
// }