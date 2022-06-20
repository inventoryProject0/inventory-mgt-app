import React from 'react';
import ReactDOM from 'react-dom';
import {InventoryAppProvider} from './Context/Context'
import 'regenerator-runtime/runtime'

import App from './components/App';
// Client ID
// WjcpYTcTJHSQrPVba8ks31uwgtzxhupD

ReactDOM.render(
			<InventoryAppProvider>
			<App />
			</InventoryAppProvider>
	,
	document.getElementById('root')
)