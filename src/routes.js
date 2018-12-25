import App from './App';
import Login from './pages/login';


const routeConfig = [
  { path: '/',
    component: App,
    // indexRoute: { component: Dashboard },
    // childRoutes: [
    //   { path: 'about', component: About },
    // ]
  },
  { path: '/Login',
    component: Login,
  }
]

export default routeConfig;
// React.render(<Router routes={routeConfig} />, document.body)