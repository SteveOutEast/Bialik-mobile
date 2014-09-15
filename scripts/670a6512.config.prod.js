App.CONFIG = {
	env: 'prod',
	api: {

		checkUrl: 'http://bialik.icconsultants.ca/api/location',//https://app.bialik.ca/location.php?v=1.1',
		//checkUrl: 'https://app.bialik.ca/location.php?v=1.0',
		url:'https://bialik-service-stage.icconsultants.ca/api',
		//url:'https://bialik-mobile.azurewebsites.net',
		DEVICE_ID_HEADER: 'X-Device-Id',
		AUTH_TOKEN_HEADER: 'X-Authorization-Token'
	},
	bbPush: {
		INVOKE_TARGET_ID: 'bialik.pushreceiver.invoke.push',
		BLACKBERRY_PUSH_APPLICATION_ID: '4280-6h3B579k4D69tR0865r681DD419a44r9251',
		BLACKBERRY_PUSH_URL: 'http://pushapi.eval.blackberry.com',
		HTTPS_GO_URBANAIRSHIP_COM_API_DEVICE_PINS: 'https://go.urbanairship.com/api/device_pins/',
		HTTPS_GO_URBANAIRSHIP_COM_API_TAGS: 'https://go.urbanairship.com/api/tags/',
		URBAN_AIRSHIP_APPKEY: 'sMMsCT6SQYilV1gVvoW2Zg',
		URBAN_AIRSHIP_APPSECRET: 'Qm-6tVUxRD2DLF9gi3WX_g'
	},

	URL_IMG_BASE: 'images/'
}