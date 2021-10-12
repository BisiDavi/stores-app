/* Async Storage Fields Start */
/*
	email
	ddUpdatedAt,
	firstname
	surname
	unacceptedOrders,
	unacceptedBatches,
	ubLastNotificationAt,
	abaLastNotificationAt
	ipEmitter:lockKey
	ipEmitter:events
	onOpenNavigateTo
	fcmToken
	coordinates
	regExtraInfo
	syncCount
	lastSyncCount
*/
/* Async Storage Fields End */

/* ipEmitter Events Start */
/*
	updateLocation
*/
/* ipEmitter Events End */

// Fire onOrdersUpdate after dispatching a batch
// Fire onOrdersUpdate after coming online

export default {
  APP_VERSION: '1.0.0-a-1',
  NAIRA: '\u20a6',
  CIPHER: 'CloudMallNG Dispatcher Android App',
  //BASE_URL: 'http://100.25.212.224:8000/api/dispatcher',
  BASE_URL: 'https://cloudmallng.com/api/dispatcher',
  SECONDARY_BASE_URL: 'https://nfm-utils.herokuapp.com/api/cloudmall',
  MEDIUM_PRIORITY_THRESHOLD: 40,
  LOW_PRIORITY_THRESHOLD: 80,
  VERY_LOW_PRIORITY_THRESHOLD: 120,
  SORT_ORDER_BY_DISTANCE: false,
  DEVELOPMENT_MODE: false,
  MAPBOX_API_KEY:
    'pk.eyJ1IjoibmZtc2hvdyIsImEiOiJja2tsMnBqMTUxNjJjMm90ZGtubTdiemx1In0.X5QR5KEbN4Bvk2Yb6QBoJA',
  BASE_HEADER_HEIGHT: 70,
  BASE_PHORZ_PADDING: 15,
  BASE_PVERT_PADDING: 15,
  BASE_WIDTH: 392.73,
  BASE_HEIGHT: 774.91,
  P_IMG_WIDTH: 1080,
  P_IMG_HEIGHT: 800,
  PW_FIELD: 'dRoWP',
  TOAST_ANIM_DURATION: 300,
  TOAST_DURATION: 4500,
  PG_BASE_PADDING: 15,
  REQUEST_TIMEOUT: 25000,
  AUTH_CODE_DIGITS: 4,
  CHANNEL_ID_1: 'unaccepted_batches_update',
  SENDINBLUE_API_KEY:
    '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',
  SENDINBLUE_URL: 'https://api.sendinblue.com/v3/smtp/email',
  UB_MIN_NOTIFY_INTERVAL: 15 * 60 * 1000,
  BATCH_ADD_NOTIFY_DURATION: 5 * 60 * 1000,
  NOTID_WAITING_BATCHES: '1',
  NOTID_ADD_TO_BATCH: '2',
  DEFAULT_IMAGE_URI: 'ic_launcher.png',
  VERSION: '0.0.0',
  VERSION_NO: 1,
  /* Batch Algo Constants Start */
  /* Batch Algo Constants End */
};
