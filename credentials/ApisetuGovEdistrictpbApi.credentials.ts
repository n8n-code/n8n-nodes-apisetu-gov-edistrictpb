import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovEdistrictpbApi implements ICredentialType {
        name = 'N8nDevApisetuGovEdistrictpbApi';

        displayName = 'Apisetu Gov Edistrictpb API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovEdistrictpb/apisetu-gov-edistrictpb.svg', dark: 'file:../nodes/ApisetuGovEdistrictpb/apisetu-gov-edistrictpb.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/edistrictpb/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/edistrictpb/v3',
                        description: 'The base URL of your Apisetu Gov Edistrictpb API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
