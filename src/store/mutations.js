import {GET_USERINFO} from './mutation_type.js'

export default {
  [GET_USERINFO](state,info){
	if (state.userInfo && (state.userInfo.username !== info.username)) {
		return;
	};
	if (!state.login) {
		return
	}
	if (!info.message) {
		state.userInfo = {...info};
		let validity = 30;
		let now = new Date();
		now.setTime(now.getTime() + validity * 24 * 60 * 60 * 1000);
		document.cookie = "USERID=" + info.user_id + ";expires=" + now.toGMTString();
		document.cookie = "SID=huRyTRd9QLij7NkbpHJoj3PQrx1eRiO6bAiw" + ";expires=" + now.toGMTString();
	} else {
		state.userInfo = null;
	}
  }
}
