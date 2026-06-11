import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apIsDescription } from './resources/ap-is';

export class ApisetuGovEdistrictpb implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apisetu Gov Edistrictpb',
		name: 'N8nDevApisetuGovEdistrictpb',
		icon: { light: 'file:./apisetu-gov-edistrictpb.svg', dark: 'file:./apisetu-gov-edistrictpb.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Punjab government\'s online portal for certificates like Residence, SC/ST, OBC.',
		defaults: { name: 'Apisetu Gov Edistrictpb' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevApisetuGovEdistrictpbApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": ""
				}
			],
			"default": ""
		},
		...apIsDescription
		],
	};
}
