'use strict';

const helpers = {
	poolData: (projectDatas) => {
		let allDataObj = projectDatas.reduce((prev, curr) => {
			for (let key in curr.techs) {
				prev[key] = prev[key] || 0;
				prev[key]++;
			}
			return prev;
		}, {});

		let dataArray = [];
		for (let key in allDataObj) {
			dataArray.push({
				name: key,
				occurance: allDataObj[key]
			});
		}


		return dataArray.sort((a, b) => b.occurance - a.occurance);
	}
};

export default helpers;