import { render } from 'react-dom'
import App from './App.jsx'
import './index.css'

const rootReactElement = <App />;
const target = document.getElementById('root');

render(rootReactElement, target);
