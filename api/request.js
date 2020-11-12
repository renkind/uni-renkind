function cloudRequest (name,param){
	return uniCloud.callFunction({
		name: name,
		data: param
	})
}

module.exports = {
	cloudRequest: cloudRequest,
}