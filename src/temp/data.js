const projectInfo = [
	{
		id: '0000',
		name: 'neARby',
		description: 'Mobile Application',
		thumbnail: 'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0002/image0.PNG',
		thumbnails: [
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0002/image0.PNG',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0002/image1.PNG',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0002/image2.PNG',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0002/image3.PNG',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0002/image4.PNG',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0002/image5.png'
		],
		img: [
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0002/image0.PNG',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0002/image1.PNG',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0002/image2.PNG',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0002/image3.PNG',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0002/image4.PNG',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0002/image5.png',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0002/000.png'
		],
		link: 'https://calculatingpineapples.github.io/neARby_web/',
		detailDescription: 'neARby is iOS app that shows local POIs through augmented reality. The application shows local places as 3D objects through google\'s map API and also allow users to search for events through the Eventful API. Users can also drop custom places or events in the virtual world and share it with users in the vicinity.\nI mainly work on the front-end for this project. One of the challenge was threejs only works in browsers at the moment, in order to make it work for an react native app, we need to create an webview which is like a browser view just to run threejs and render objects.\nI was responsible for creating the AR component, setting up communication between native view and webview, letting the device views to update based on location and device orientation, I also used Redux to manage state and communication with other views'
	},
	{
		id: '0001',
		name: 'ReelPals',
		description: 'Web Application',
		thumbnail: 'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0001/000.png',
		thumbnails: [
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0001/000.png',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0001/001.png',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0001/002.png'
		],
		img: [
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0001/000.png',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0001/001.png',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0001/002.png'
		],
		link: 'https://reelpals.herokuapp.com/',
		detailDescription: 'ReelPals lets user discover new friends based on movie ratings and make friend request to watch movie. Compatibility score among users is calculated base on their rating of movies, the application then make recommendation to user a list of highly compatible users they might want to friend.\nI created markups and architected the ui/ux, I also worked on third party api integration in the backend to retrieve movie information and created rest apis and database schemas and wrote relational queries'
	},
	{
		id: '0002',
		name: 'FoodBuddy',
		description: 'Web Application',
		thumbnail: 'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0003/000',
		thumbnails: [
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0003/000',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0003/001'
		],
		img: [
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0003/000',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0003/001'
		],
		link: 'http://ec2-54-68-219-27.us-west-2.compute.amazonaws.com:8000/',
		detailDescription: 'FoodBuddy shows best places for groceries base on specific user grocery lists using crowd reported price data. The project is built rapidly in two day using the MEAN stack.'
	},
	{
		id: '0003',
		name: 'HotSpots',
		description: 'Web Application',
		thumbnail: 'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0004/000.png',
		thumbnails: [
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0004/000.png'
		],
		img: [
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0004/000.png'
		],
		link: 'https://wishspots.herokuapp.com/',
		detailDescription: 'Hotspots is a map based application that lets user tag spots on their map. Our team inherited the codebase from another another team and were tasked to extend new features on the existing codebase. Our team added social elements to the app, and allow users to see and interact with the spots their friend tagged, we also make the search results more relevant by integrating with the yelp API. \nI was responsible for making the backend infrastructure and database schemas to support the new features.'
	},
	{
		id: '0004',
		name: 'Huatai Design Competition',
		description: 'Architectural Design',
		thumbnail: 'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0005/bnk-c19a.jpg',
		thumbnails: [
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0005/C15.jpg',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0005/Untitled-3.jpg',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0005/bnk-c19a.jpg',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0005/c14.jpg',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0005/c10cc+a0001.jpg'
		],
		img: [
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0005/C15.jpg',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0005/Untitled-3.jpg',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0005/bnk-c19a.jpg',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0005/c14.jpg',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0005/c10cc+a0001.jpg'
		],
		link: 'https://issuu.com/lingchen215/docs/oct_2015ss',
		detailDescription: 'Huatai Masterplaning was an design competition for the development of a very visible city block in the CBD of Shenzhen China. It encompasses major office, hotel, commercial retail and residential components. It was completed in very tight time constraints with a tiny team.\nI was involve both as the main design contributor and a team lead that oversaw the production all design materials.'
	},
	{
		id: '0005',
		name: 'South Water Residence',
		description: 'Architectural Design',
		thumbnail: 'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0006/landscape-10_9.jpg',
		thumbnails: [
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0006/232.jpg',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0006/landscape-10_9.jpg',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0006/nk-c06-BT.jpg',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0006/nk-c07-BT.jpg'
		],
		img: [
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0006/232.jpg',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0006/landscape-10_9.jpg',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0006/nk-c06-BT.jpg',
			'https://s3-us-west-2.amazonaws.com/app-porfolio/projects/0006/nk-c07-BT.jpg'
		],
		link: 'https://issuu.com/lingchen215/docs/oct_2015ss',
		detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\nCurabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. '
	}
];

const projectTechDetails = [
	{
		id: '0000',
		techs: [
			{
				name: 'JavaScript',
				links: [
					'ReactNative',
					'Redux',
					'ThreeJS',
					'Node',
					'Express',
					'iOS',
					'Babel'
				]
			},
			{
				name: 'ReactNative',
				links: [
					'JavaScript',
					'Redux',
					'ThreeJS',
					'SVG',
					'Node',
					'iOS'
				]
			},
			{
				name: 'Redux',
				links: [
					'JavaScript',
					'ReactNative'
				]
			},
			{
				name: 'ThreeJS',
				links: [
					'JavaScript',
					'ReactNative'
				]
			},
			{
				name: 'SVG',
				links: [
					'ReactNative'
				]
			},
			{
				name: 'Node',
				links: [
					'JavaScript',
					'ReactNative',
					'Express',
					'Redis',
					'3rdPartyAPI'
				]
			},
			{
				name: 'Express',
				links: [
					'JavaScript',
					'Node'
				]
			},
			{
				name: 'Redis',
				links: [
					'Node'
				]
			},
			{
				name: 'iOS',
				links: [
					'JavaScript',
					'ReactNative'
				]
			},
			{
				name:'3rdPartyAPI',
				links: [
					'Node'
				]
			},
			{
				name: 'Babel',
				links: [
					'JavaScript'
				]
			}
		]
	},

	{
		id: '0001',
		techs: [
			{
				name: 'JavaScript',
				links: [
					'React',
					'Node',
					'Express',
					'Babel',
					'BookShelfJS',
					'HTML5'
				]
			},
			{
				name: 'HTML5',
				links: [
					'JavaScript',
					'CSS3'
				]
			},
			{
				name: 'CSS3',
				links: [
					'HTML5',
					'Materialize'
				]
			},
			{
				name: 'React',
				links: [
					'JavaScript',
					'Node',
					'3rdPartyAPI'
				]
			},
			{
				name: 'Node',
				links: [
					'JavaScript',
					'React',
					'Express',
					'BookShelfJS',
					'mySQL',
					'3rdPartyAPI',
					'Heroku'
				]
			},
			{
				name: 'Express',
				links: [
					'JavaScript',
					'Node'
				]
			},
			{
				name: 'mySQL',
				links: [
					'Node',
					'BookShelfJS'
				]
			},
			{
				name: '3rdPartyAPI',
				links: [
					'React',
					'Node'
				]
			},
			{
				name: 'BookShelfJS',
				links: [
					'Node',
					'mySQL',
					'JavaScript'
				]
			},
			{
				name: 'Materialize',
				links: [
					'CSS3'
				]
			},
			{
				name: 'Heroku',
				links: [
					'Node'
				]
			},
			{
				name: 'Babel',
				links: [
					'JavaScript'
				]
			}
		]
	},

	{
		id: '0002',
		techs: [
			{
				name: 'JavaScript',
				links: [
					'Angular',
					'Node',
					'Express',
					'Mongoose',
					'HTML5'
				]
			},
			{
				name: 'Node',
				links: [
					'JavaScript',
					'Express',
					'Mongoose',
					'MongoDB',
					'Angular',
					'AWS'
				]
			},
			{
				name: 'Express',
				links: [
					'JavaScript',
					'Node'
				]
			},
			{
				name: 'Angular',
				links: [
					'JavaScript',
					'Node',
					'HTML5'
				]
			},
			{
				name: 'HTML5',
				links: [
					'JavaScript',
					'Angular',
					'CSS3'
				]
			},
			{
				name: 'CSS3',
				links: [
					'HTML5',
					'Bootstrap'
				]
			},
			{
				name: 'Bootstrap',
				links: [
					'CSS3'
				]
			},
			{
				name: 'AWS',
				links: [
					'Node'
				]
			},
			{
				name: 'MongoDB',
				links: [
					'Node',
					'Mongoose'
				]
			},
			{
				name: 'Mongoose',
				links: [
					'Node',
					'MongoDB',
					'JavaScript'
				]
			}
		]
	},

	{
		id: '0003',
		techs: [
			{
				name: 'JavaScript',
				links: [
					'React',
					'Redux',
					'MapBox',
					'Wedpack',
					'Babel',
					'Node',
					'Express',
					'HTML5'
				]
			},
			{
				name: 'React',
				links: [
					'JavaScript',
					'Redux',
					'MapBox',
					'Node'
				]
			},
			{
				name: 'Redux',
				links: [
					'JavaScript',
					'React'
				]
			},
			{
				name: 'MapBox',
				links: [
					'JavaScript',
					'React'
				]
			},
			{
				name: 'PostgresSQL',
				links: [
					'Node'
				]
			},
			{
				name: 'Wedpack',
				links: [
					'JavaScript',
					'Babel'
				]
			},
			{
				name: 'Babel',
				links: [
					'JavaScript',
					'Wedpack'
				]
			},
			{
				name: 'Node',
				links: [
					'JavaScript',
					'React',
					'PostgresSQL',
					'Express'
				]
			},
			{
				name: 'Express',
				links: [
					'JavaScript',
					'Node'
				]
			},
			{
				name: 'Bootstrap',
				links: [
					'CSS3'
				]
			},
			{
				name: 'HTML5',
				links: [
					'JavaScript',
					'CSS3'
				]
			},
			{
				name: 'CSS3',
				links: [
					'Bootstrap',
					'HTML5'
				]
			}
		]
	},

	{
		id: '0004',
		techs: [
			{
				name: 'Rhino3D',
				links: [
					'AutoCAD',
					'3dsMAX',
					'SketchUP'
				]
			},
			{
				name: 'Illustrator',
				links: [
					'InDesign'
				]
			},
			{
				name: 'Photoshop',
				links: [
					'InDesign',
					'VrayRenderer'
				]
			},
			{
				name: 'InDesign',
				links: [
					'Illustrator',
					'Photoshop'
				]
			},
			{
				name: 'AutoCAD',
				links: [
					'Rhino3D'
				]
			},
			{
				name: 'VrayRenderer',
				links: [
					'Photoshop',
					'3dsMAX'
				]
			},
			{
				name: '3dsMAX',
				links: [
					'Rhino3D',
					'VrayRenderer'
				]
			},
			{
				name: 'SketchUP',
				links: [
					'Rhino3D'
				]
			}
		]
	},
	{
		id: '0005',
		techs: [
			{
				name: 'Rhino3D',
				links: [
					'AutoCAD',
					'3dsMAX',
					'SketchUP'
				]
			},
			{
				name: 'Illustrator',
				links: [
					'InDesign'
				]
			},
			{
				name: 'Photoshop',
				links: [
					'InDesign',
					'VrayRenderer'
				]
			},
			{
				name: 'InDesign',
				links: [
					'Illustrator',
					'Photoshop'
				]
			},
			{
				name: 'AutoCAD',
				links: [
					'Rhino3D'
				]
			},
			{
				name: 'VrayRenderer',
				links: [
					'Photoshop',
					'3dsMAX'
				]
			},
			{
				name: '3dsMAX',
				links: [
					'Rhino3D',
					'VrayRenderer'
				]
			},
			{
				name: 'SketchUP',
				links: [
					'Rhino3D'
				]
			}
		]
	}
];

const data = {
	projectInfo: projectInfo,
	projectTechDetails: projectTechDetails
};

export default data;