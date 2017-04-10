import App from '../app'

const login = r => require.ensure([],() => r(require('../page/login/login')),'login');

export default [{
	path:'/',
	component:App,
	children:[
		//登录注册页
        {
            path: '/login',
            component: login
        }
	]
}]