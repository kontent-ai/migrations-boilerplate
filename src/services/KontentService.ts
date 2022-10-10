import * as dotenv from "dotenv";
import {
	camelCasePropertyNameResolver,
	DeliveryClient,
	IDeliveryClient,
} from "@kontent-ai/delivery-sdk";
import { HttpService, IHeader } from "@kontent-ai/core-sdk";
import https from "https";

dotenv.config();

export default class KontentService {
	private static _instance: KontentService;
	private static _previewInstance: KontentService;
	protected client: DeliveryClient;

	protected constructor(usePreviewMode: boolean) {
		const httpService = new HttpService({
			axiosRequestConfig: {
				timeout: 60000,
				httpsAgent: new https.Agent({ keepAlive: true }),
			},
		});

		const globalHeaders: IHeader[] = [];
		if (usePreviewMode) {
			globalHeaders.push({
				header: "X-KC-Wait-For-Loading-New-Content",
				value: "true",
			});
		}

		this.client = new DeliveryClient({
			projectId: process.env.KONTENT_PROJECT_ID ?? "",
			previewApiKey: process.env.KONTENT_PREVIEW_API_KEY ?? "",
			httpService: httpService,
			defaultQueryConfig: {
				usePreviewMode,
			},
			globalHeaders: () => globalHeaders,
			propertyNameResolver: camelCasePropertyNameResolver,
		});
	}

	public get deliveryClient(): IDeliveryClient {
		return this.client;
	}

	public static Instance(usePreviewMode = false) {
		if (!this._instance) {
			this._instance = new this(false);
			this._previewInstance = new this(true);
		}

		return usePreviewMode ? this._previewInstance : this._instance;
	}
}
