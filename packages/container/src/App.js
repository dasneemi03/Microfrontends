import React from 'react';
import { BrowserRouter }from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

export default () => {
    return  <BrowserRouter>
        <div>
            <Header />
            <MarketingApp />
        </div>
    </BrowserRouter>
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