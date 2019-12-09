
function formatDate(date) {
  var year = date.getFullYear();
  var month = add(date.getMonth() + 1);
  var day = add(date.getDate());
  var hour = add(date.getHours());
  var minutes = add(date.getMinutes());
  var seconds = add(date.getSeconds());
  str = year + '年' + month + '月' + day + '日 ' + hour + '时' + minutes + '分'+seconds+"秒";
  return str;
}
function add(v){
		return v<"10"?"0"+v:+v;
	
}