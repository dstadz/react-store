import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import reportWebVitals from './reportWebVitals';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient, gql } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'



// const cache = new InMemoryCache()
// const httpLink = createHttpLink({
//   uri: 'https://crwn-clothing.com'
// })
// const client = new ApolloClient({
//   cache,
//   link: httpLink
// })



// client.writeData({
//   data: {
//     cartHidden: true
//   }
// })

ReactDOM.render(
  // <ApolloProvider client={client}>
		<BrowserRouter>
			<RecoilRoot>
				<App />
			</RecoilRoot>
		</BrowserRouter>,
  // {/* </ApolloProvider>, */}
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
