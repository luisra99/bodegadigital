const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
	pwa: {
		dest: 'public',
		runtimeCaching,
	},
	env: {
		WSO2: {
			APIM_MTZ: {
				AM_PROTOCOL: 'https',
				AM_IP: 'wso2-am.mtz.xetid.cu',
				AM_PORT: '',
				AM_CONSUMER_KEY: 'vfHfAtjYuA_V6lXpFnsGCRyQxFoa',
				AM_CONSUMER_SECRET: 'WBOO_WOnA1WvDZ9kdOnQa8b08Lca',
				AM_TOKEN_ENDPOINT: '/oauth2/token',
				GW_PROTOCOL: 'https',
				GW_IP: 'wso2-gws.mtz.xetid.cu',
				GW_PORT: '',
				API_OLAP_ENDPOINT: '/olap-api/1.0.0',
				API_Norma_ENDPOINT: '/sistemagestiondenormas/1.0.0',
			},
			APIM_FUC: {
				AM_PROTOCOL: 'https',
				AM_IP: 'apis-fuc.xutil.cu',
				AM_PORT: '',
				AM_CONSUMER_KEY: 'hh3Ty7vgSRWyNpfy8OdvP92t39oa',
				AM_CONSUMER_SECRET: 'GPFzdRV65Da8yPEcPSnLrKSF2QIa',
				AM_TOKEN_ENDPOINT: '/token',
				GW_PROTOCOL: 'https',
				GW_IP: 'apis-fuc.xutil.cu',
				GW_PORT: '',
				API_DCPR_CONSULTA: '/api-dcpr-consulta/0.1.221112',
			},
		},
	},
})
