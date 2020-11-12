import cloudRequest from 'request';

//获取项目列表
function getProject (param){
	return cloudRequest('getProject',param)
}

//获取项目列表
function getProject2 (param){
	return cloudRequest('getProject2',param)
}

module.exports = {
	getProject: getProject,
	getProject2: getProject2,
}
