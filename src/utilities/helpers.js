'use strict';

const helpers = {
	poolData: (projectDatas) => {
		let allDataObj = projectDatas.reduce((prev, curr) => {
			curr.techs.forEach((tech) => {
				prev[tech.name] = prev[tech.name] || 0;
				prev[tech.name]++;
			});
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