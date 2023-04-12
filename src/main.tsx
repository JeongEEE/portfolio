import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '/src/styles/globals.css'
import '/src/styles/reset.css'
import Layout from '/src/components/layout/layout'
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
		<RecoilRoot>
			<Layout>
				<App />
			</Layout>
		</RecoilRoot>
  </React.StrictMode>,
)
