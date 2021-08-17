import React from 'react';
import { BrowserRouter }from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName ({
    productionPrefix: 'co',
})

export default () => {
    return (
    <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <div>
                <Header />
                <MarketingApp />
            </div>
        </StylesProvider>
    </BrowserRouter>
    ) 
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