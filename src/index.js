import dva from 'dva';
import './index.css';
import 'antd/dist/antd.css'
import 'weui'
import {RouterConfig} from './router'
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/listStore').default);

// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');
