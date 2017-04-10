import * as login from './tempdata/login.js'

//创建临时数据
const setpromise = data => {
    return new Promise((resolve, reject) => {
    	console.log(data)
        resolve(data)
    })
}

var getUser = () => setpromise(login.userInfo);

export {
    getUser
}
