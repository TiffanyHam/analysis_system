function  initTable ()  {
	$.ajax({
		type: "GET",
		url: "json/table.json", //利用ajax请求后台的并返回值
		dataType: "json",
		success: function(data) {
			//
			//var obj = JSON.parse(data); //解析json字符串为json对象形式
			var OverviewList = data.result;
			console.log(OverviewList);
			var trStr = ''; //动态拼接table
			for(var i = 0; i < OverviewList.length; i++) { //循环遍历出json对象中的每一个数据并显示在对应的td中
				trStr +=
					'<tr><a id="detect" onclick="playlist(this)">' +
					'<td width="20%">' + OverviewList[i].time + '</td>' +
					'<td width="20%">' + OverviewList[i].type + '</td>' +
					'<td width="20%">' + OverviewList[i].state + '</td>' +
					'<td width="20%">' + OverviewList[i].id + '</td>' +
					'<td width="20%">' + OverviewList[i].grade + '</td>';
				'</a></tr>';
			}
			$("#behavior_table tbody").append(trStr); //运用html方法将拼接的table添加到tbody中return;

			//行为分析表格
			var behaviorList = data.behavior;
			var trStr = ''; //动态拼接table
			for(var i = 0; i < behaviorList.length; i++) { //循环遍历出json对象中的每一个数据并显示在对应的td中
				trStr +=
					'<tr><a id="detect" onclick="playlist(this)">' +
					'<td width="15%">' + behaviorList[i].time + '</td>' +
					'<td width="15%">' + behaviorList[i].type + '</td>' +
					'<td width="15%">' + behaviorList[i].state + '</td>' +
					'<td width="20%">' + behaviorList[i].id + '</td>' +
					'<td width="15%">' + behaviorList[i].grade + '</td>' +
					'<td width="20%">' + behaviorList[i].kinds + '</td>';
				'</a></tr>';
			}
			$("#behavior_table_two tbody").append(trStr); //运用html方法将拼接的table添加到tbody中return;

			//系统设置
			var systemList = data.system;
			var trStr = ''; //动态拼接table
			for(var i = 0; i < systemList.length; i++) { //循环遍历出json对象中的每一个数据并显示在对应的td中
				trStr +=
					'<tr><a id="detect" onclick="playlist(this)">' +
					'<td width="15%">' + systemList[i].time + '</td>' +
					'<td width="15%">' + systemList[i].type + '</td>' +
					'<td width="15%">' + systemList[i].state + '</td>' +
					'<td width="20%">' + systemList[i].id + '</td>' +
					'<td width="15%">' + systemList[i].grade + '</td>' +
					'<td width="20%">' + systemList[i].kinds + '</td>';
				'</a></tr>';
			}
			$("#system_table_two tbody").append(trStr); //运用html方法将拼接的table添加到tbody中return;

		},
		error: function(error) {
			console.log(error);
		}
	});
}
initTable();