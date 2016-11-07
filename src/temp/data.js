const projectInfo = [
	{
		id: '0001',
		name: 'neARby',
		description: 'Mobile Application',
		thumbnail: 'http://imagecache5d.allposters.com/watermarker/76-7640-117G300Z.jpg?ch=949&cw=633'
	},
	{
		id: '0002',
		name: 'ReelPals',
		description: 'Web Application',
		thumbnail: 'http://imagecache5d.allposters.com/watermarker/21-2126-GJJED00Z.jpg?ch=916&cw=655'
	},
	{
		id: '0003',
		name: 'FoodBuddy',
		description: 'Web Application',
		thumbnail: 'http://imagecache5d.allposters.com/watermarker/56-5698-2SSUG00Z.jpg'
	},
	{
		id: '0004',
		name: 'WishSpots',
		description: 'Web Application',
		thumbnail: 'http://imagecache5d.allposters.com/watermarker/17-1723-KK53D00Z.jpg'
	},
	{
		id: '0005',
		name: 'Huatai Design Competition',
		description: 'Architectural Design',
		thumbnail: 'http://imagecache5d.allposters.com/watermarker/56-5662-2HFUG00Z.jpg'
	},
	{
		id: '0006',
		name: 'South Water Residence',
		description: 'Architectural Design',
		thumbnail: 'http://imagecache5d.allposters.com/watermarker/15-1555-PN9DD00Z.jpg'
	}
];

const projectTechDetails = [
	{
		id: '0001',
		techs: {
			JavaScript: {
				ReactNative: true,
				Redux: true,
				ThreeJS: true,
				Node: true,
				Express: true,
				iOS: true,
				Babel: true
			},
			ReactNative: {
				JavaScript: true,
				Redux: true,
				ThreeJS: true,
				SVG: true,
				Node: true,
				iOS: true
			},
			Redux: {
				JavaScript: true,
				ReactNative: true
			},
			ThreeJS: {
				JavaScript: true,
				ReactNative: true
			},
			SVG: {
				ReactNative: true
			},
			Node: {
				JavaScript: true,
				ReactNative: true,
				Express: true,
				Redis: true,
				'3rdPartyAPI': true
			},
			Express: {
				JavaScript: true,
				Node: true
			},
			Redis: {
				Node: true
			},
			iOS: {
				JavaScript: true,
				ReactNative: true
			},
			'3rdPartyAPI': {
				Node: true
			},
			Babel: {
				JavaScript: true
			}
		}
	},

	{
		id: '0002',
		techs: {
			JavaScript: {
				React: true,
				Node: true,
				Express: true,
				Babel: true,
				BookShelfJS: true,
				HTML5: true
			},
			HTML5: {
				JavaScript: true,
				CSS3: true
			},
			CSS3: {
				HTML5: true,
				Materialize: true
			},
			React: {
				JavaScript: true,
				Node: true,
				'3rdPartyAPI': true
			},
			Node: {
				JavaScript: true,
				React: true,
				Express: true,
				BookShelfJS: true,
				mySQL: true,
				'3rdPartyAPI': true,
				Heroku: true
			},
			Express: {
				JavaScript: true,
				Node: true
			},
			mySQL: {
				Node: true,
				BookShelfJS: true
			},
			'3rdPartyAPI': {
				React: true,
				Node: true
			},
			BookShelfJS: {
				Node: true,
				mySQL: true,
				JavaScript: true
			},
			Materialize: {
				CSS3: true
			},
			Heroku: {
				Node: true
			},
			Babel: {
				JavaScript: true
			}
		}
	},

	{
		id: '0003',
		techs: {
			JavaScript: {
				Angular: true,
				Node: true,
				Express: true,
				Mongoose: true,
				HTML5: true
			},
			Node: {
				JavaScript: true,
				Express: true,
				Mongoose: true,
				MongoDB: true,
				Angular: true,
				AWS: true
			},
			Express: {
				JavaScript: true,
				Node: true
			},
			Angular: {
				JavaScript: true,
				Node: true,
				HTML5: true
			},
			HTML5: {
				JavaScript: true,
				Angular: true,
				CSS3: true
			},
			CSS3: {
				HTML5: true,
				Bootstrap: true
			},
			Bootstrap: {
				CSS3: true
			},
			AWS: {
				Node: true
			},
			MongoDB: {
				Node: true,
				Mongoose: true
			},
			Mongoose: {
				Node: true,
				MongoDB: true,
				JavaScript: true
			}
		}
	},

	{
		id: '0004',
		techs: {
			JavaScript: {
				React: true,
				Redux: true,
				MapBox: true,
				Wedpack: true,
				Babel: true,
				Node: true,
				Express: true,
				HTML5: true
			},
			React: {
				JavaScript: true,
				Redux: true,
				MapBox: true,
				Node: true
			},
			Redux: {
				JavaScript: true,
				React: true
			},
			MapBox: {
				JavaScript: true,
				React: true
			},
			PostgresSQL: {
				Node: true
			},
			Wedpack: {
				JavaScript: true,
				Babel: true
			},
			Babel: {
				JavaScript: true,
				Wedpack: true
			},
			Node: {
				JavaScript: true,
				React: true,
				PostgresSQL: true,
				Express: true
			},
			Express: {
				JavaScript: true,
				Node: true
			},
			Bootstrap: {
				CSS3: true
			},
			HTML5: {
				JavaScript: true,
				CSS3: true
			},
			CSS3: {
				Bootstrap: true,
				HTML5: true
			}
		}
	},

	{
		id: '0005',
		techs: {
			Rhino3D: {
				AutoCAD: true,
				'3dsMAX': true,
				SketchUP: true
			},
			Illustrator: {
				InDesign: true
			},
			Photoshop: {
				InDesign: true,
				VrayRenderer: true
			},
			InDesign: {
				Illustrator: true,
				Photoshop: true
			},
			AutoCAD: {
				Rhino3D: true
			},
			VrayRenderer: {
				Photoshop: true,
				'3dsMAX': true
			},
			'3dsMAX': {
				Rhino3D: true,
				VrayRenderer: true
			},
			SketchUP: {
				Rhino3D: true
			}
		}
	},

	{
		id: '0006',
		techs: {
			Rhino3D: {
				AutoCAD: true,
				'3dsMAX': true,
				SketchUP: true
			},
			Illustrator: {
				InDesign: true
			},
			Photoshop: {
				InDesign: true,
				VrayRenderer: true
			},
			InDesign: {
				Illustrator: true,
				Photoshop: true
			},
			AutoCAD: {
				Rhino3D: true
			},
			VrayRenderer: {
				Photoshop: true,
				'3dsMAX': true
			},
			'3dsMAX': {
				Rhino3D: true,
				VrayRenderer: true
			},
			SketchUP: {
				Rhino3D: true
			}
		}
	}
];

const data = {
	projectInfo: projectInfo,
	projectTechDetails: projectTechDetails
};

export default data;