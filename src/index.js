import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';

import HelloWorld from "./HelloWord";

(async () => {

    console.log(process.env.REACT_APP_LD_CLIENT_SIDE_ID)

    const LDProvider = await asyncWithLDProvider({
        clientSideID: process.env.REACT_APP_LD_CLIENT_SIDE_ID,
        user: {
            "key": "gmail_user",
            "email": "User@gmail.com"
        },
        options: {
            streaming: false
        }
    });
    ReactDOM.render(
        <React.StrictMode>
            <LDProvider>
                <HelloWorld />
            </LDProvider>
        </React.StrictMode>,
        document.getElementById('root'),
    );
})();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
