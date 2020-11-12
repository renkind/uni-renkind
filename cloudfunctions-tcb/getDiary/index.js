'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	//context为包含用户使用信息的实体
	const db = uniCloud.database();
	const collection = db.collection('diary') // 获取表'project'的集合对象
	const res = await collection.skip(event.offset).limit(event.limit).orderBy('add_time','desc').get() // 获取表中的limit条数据，结果为json格式
	//返回数据给客户端
	return res
};

