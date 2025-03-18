import { init } from '@bundle_loader';
import wait from '@helpers/wait';
import orders from '@pages/orders';
import order from '@pages/order';

window.BUNDLE_VERSION = '0.0.1';

try {
	if (!await wait.attempts(500).element('#site > table')) throw new Error('не дождался загрузки приложения');
	init('moysklad', new Map([
		[/#customerorder$/, { orders }],
		[/#customerorder\/edit/, { order }]
	]));
} catch (error) {
	console.error(error);
}
