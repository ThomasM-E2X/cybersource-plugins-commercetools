import googlePay from '../../JSON/googlePay.json';
import creditCard from '../../JSON/creditCard.json';
export const payment = {
  id: '33e68f3d-8143-4d07-ac13-2314c7039251',
  version: 2,
  lastMessageSequenceNumber: 2,
  createdAt: '2021-12-21T10:19:02.132Z',
  lastModifiedAt: '2021-12-21T10:19:02.132Z',
  lastModifiedBy: {
    clientId: 'iFOAd29Lew5ADrpakIhQkz_N',
    isPlatformClient: false,
    customer: {
      typeId: 'customer',
      id: 'de2127f2-1e51-429e-90fd-47521b95108c',
    },
  },
  createdBy: {
    clientId: 'iFOAd29Lew5ADrpakIhQkz_N',
    isPlatformClient: false,
    customer: {
      typeId: 'customer',
      id: 'de2127f2-1e51-429e-90fd-47521b95108c',
    },
  },
  amountPlanned: {
    type: 'centPrecision',
    currencyCode: 'USD',
    centAmount: 5980,
    fractionDigits: 2,
  },
  paymentMethodInfo: {
    paymentInterface: 'cybersource',
    method: 'googlePay',
    name: {
      en: 'Google Pay',
    },
  },
  custom: {
    type: {
      typeId: 'type',
      id: '87b9d9db-74a3-45d7-8e60-dde669866808',
    },
    fields: {
      isv_deviceFingerprintId: '8a22fb00-dc63-496b-b0de-9f1d1fd36a50',
      isv_token: googlePay.isv_token,
      isv_acceptHeader: '*/*',
      isv_customerIpAddress: '106.202.150.94',
      isv_userAgentHeader: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
    },
  },
  paymentStatus: {},
  transactions: [],
  interfaceInteractions: [],
};

export const guestPayment = {
  "id": "5eef4795-60df-45cf-9fc7-be4500333b57",
  "version": 2,
  "lastMessageSequenceNumber": 2,
  "createdAt": "2022-06-23T05:42:58.469Z",
  "lastModifiedAt": "2022-06-23T05:42:58.469Z",
  "lastModifiedBy": {
    "clientId": "mSpmJgXkt_CadneUb0otjt98",
    "isPlatformClient": false,
    "anonymousId": "b7037191-ed8f-4518-a66a-5b1efda2a2de"
  },
  "createdBy": {
    "clientId": "mSpmJgXkt_CadneUb0otjt98",
    "isPlatformClient": false,
    "anonymousId": "b7037191-ed8f-4518-a66a-5b1efda2a2de"
  },
  "amountPlanned": {
    "type": "centPrecision",
    "currencyCode": "USD",
    "centAmount": 3500,
    "fractionDigits": 2
  },
  "paymentMethodInfo": {
    "paymentInterface": "cybersource",
    "method": "googlePay",
    "name": {
      "en": "Google Pay"
    }
  },
  "custom": {
    "type": {
      "typeId": "type",
      "id": "e2288aa6-6a13-49eb-8f79-f9cc73fd4dd0"
    },
    "fields": {
      "isv_deviceFingerprintId": "e161b9f0-f093-4708-9805-e2639ef586e7",
      "isv_token": googlePay.isv_token,
      "isv_saleEnabled": false,
      "isv_acceptHeader": "*/*",
      "isv_customerIpAddress": "122.163.190.43",
      "isv_userAgentHeader": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
    }
  },
  "paymentStatus": {},
  "transactions": [],
  "interfaceInteractions": [],
  "anonymousId": "b7037191-ed8f-4518-a66a-5b1efda2a2de"
}

export const cart ={
  "type": "Cart",
  "id": "3d09ed42-1b1b-450a-b670-269437683939",
  "version": 10,
  "lastMessageSequenceNumber": 1,
  "createdAt": "2022-04-11T09:08:17.675Z",
  "lastModifiedAt": "2022-04-11T09:10:51.071Z",
  "lastModifiedBy": {
    "clientId": "0GrQ8c2D9t1iSjzJF8E3Ygu3",
    "isPlatformClient": false,
    "customer": {
      "typeId": "customer",
      "id": "def6c669-eed5-4c57-ba2e-5fb04bfed1fa"
    }
  },
  "createdBy": {
    "clientId": "0GrQ8c2D9t1iSjzJF8E3Ygu3",
    "isPlatformClient": false,
    "customer": {
      "typeId": "customer",
      "id": "def6c669-eed5-4c57-ba2e-5fb04bfed1fa"
    }
  },
  "customerId": "def6c669-eed5-4c57-ba2e-5fb04bfed1fa",
  "locale": "en-US",
  "lineItems": [
    {
      "id": "321ea068-968a-431c-a7a5-98615b74cda3",
      "productId": "7e3ccfc6-36ee-4995-ab1d-bb5095b08bbe",
      "name": {
        "en": "Sherwani"
      },
      "productType": {
        "typeId": "product-type",
        "id": "31d56c4e-d578-4dab-a313-780b5f1e7556",
        "version": 1
      },
      "productSlug": {
        "en": "a1"
      },
      "variant": {
        "id": 1,
        "sku": "SKU-1",
        "prices": [
          {
            "id": "1fbaed84-99cc-4922-9776-c1ea3cd553e6",
            "value": {
              "type": "centPrecision",
              "currencyCode": "EUR",
              "centAmount": 15845,
              "fractionDigits": 2
            },
            "country": "US"
          },
          {
            "id": "68018b50-2c8a-4304-b67a-ae15389be32d",
            "value": {
              "type": "centPrecision",
              "currencyCode": "USD",
              "centAmount": 5980,
              "fractionDigits": 2
            },
            "country": "US"
          }
        ],
        "images": [
          {
            "url": "https://ik.imagekit.io/ldqsn9vvwgg/images/505833.jpg",
            "dimensions": {
              "w": 300,
              "h": 375
            }
          }
        ],
        "attributes": [],
        "assets": []
      },
      "price": {
        "id": "68018b50-2c8a-4304-b67a-ae15389be32d",
        "value": {
          "type": "centPrecision",
          "currencyCode": "USD",
          "centAmount": 5980,
          "fractionDigits": 2
        },
        "country": "US"
      },
      "quantity": 1,
      "discountedPricePerQuantity": [],
      "taxRate": {
        "name": "test-tax-category",
        "amount": 0.2,
        "includedInPrice": true,
        "country": "US",
        "id": "HxMyojUT",
        "subRates": []
      },
      "addedAt": "2022-04-11T09:08:17.982Z",
      "lastModifiedAt": "2022-04-11T09:08:17.982Z",
      "state": [
        {
          "quantity": 1,
          "state": {
            "typeId": "state",
            "id": "438c0901-36c4-41ec-9a86-2853d6c73d0d"
          }
        }
      ],
      "priceMode": "Platform",
      "totalPrice": {
        "type": "centPrecision",
        "currencyCode": "USD",
        "centAmount": 5980,
        "fractionDigits": 2
      },
      "taxedPrice": {
        "totalNet": {
          "type": "centPrecision",
          "currencyCode": "USD",
          "centAmount": 4983,
          "fractionDigits": 2
        },
        "totalGross": {
          "type": "centPrecision",
          "currencyCode": "USD",
          "centAmount": 5980,
          "fractionDigits": 2
        },
        "totalTax": {
          "type": "centPrecision",
          "currencyCode": "USD",
          "centAmount": 997,
          "fractionDigits": 2
        }
      },
      "lineItemMode": "Standard"
    }
  ],
  "cartState": "Active",
  "totalPrice": {
    "type": "centPrecision",
    "currencyCode": "USD",
    "centAmount": 5980,
    "fractionDigits": 2
  },
  "taxedPrice": {
    "totalNet": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 4983,
      "fractionDigits": 2
    },
    "totalGross": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 5980,
      "fractionDigits": 2
    },
    "taxPortions": [
      {
        "rate": 0.2,
        "amount": {
          "type": "centPrecision",
          "currencyCode": "USD",
          "centAmount": 997,
          "fractionDigits": 2
        },
        "name": "test-tax-category"
      }
    ],
    "totalTax": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 997,
      "fractionDigits": 2
    }
  },
  "country": "US",
  "customLineItems": [],
  "discountCodes": [],
  "directDiscounts": [],
  "inventoryMode": "None",
  "taxMode": "Platform",
  "taxRoundingMode": "HalfEven",
  "taxCalculationMode": "LineItemLevel",
  "deleteDaysAfterLastModification": 90,
  "refusedGifts": [],
  "origin": "Customer",
  "shippingAddress": {
    "firstName": "shakshi",
    "lastName": "poddar",
    "streetName": "1295 Charleston Road",
    "postalCode": "94043",
    "city": "Mountain View",
    "region": "CA",
    "country": "US",
    "phone": "9876543210",
    "email": "shakshi.poddar@wipro.com"
  },
  "billingAddress": {
    "firstName": "shakshi",
    "lastName": "poddar",
    "streetName": "1295 Charleston Road",
    "postalCode": "94043",
    "city": "Mountain View",
    "region": "CA",
    "country": "US",
    "phone": "9876543210",
    "email": "shakshi.poddar@wipro.com"
  },
  "itemShippingAddresses": [],
  "totalLineItemQuantity": 1
}

export const service = 'google';

export const payments = {
  id: '33e68f3d-8143-4d07-ac13-2314c7039251',
  version: 2,
  lastMessageSequenceNumber: 2,
  createdAt: '2021-12-21T10:19:02.132Z',
  lastModifiedAt: '2021-12-21T10:19:02.132Z',
  lastModifiedBy: {
    clientId: 'iFOAd29Lew5ADrpakIhQkz_N',
    isPlatformClient: false,
    anonymousId: 'ad175f34-543f-4a33-956a-39c30cd0aa61',
  },
  createdBy: {
    clientId: 'iFOAd29Lew5ADrpakIhQkz_N',
    isPlatformClient: false,
    anonymousId: 'ad175f34-543f-4a33-956a-39c30cd0aa61',
  },
  amountPlanned: {
    type: 'centPrecision',
    currencyCode: 'USD',
    centAmount: 5980,
    fractionDigits: 2,
  },
  paymentMethodInfo: {
    paymentInterface: 'cybersource',
    method: 'googlePay',
    name: {
      en: 'Google Pay',
    },
  },
  custom: {
    type: {
      typeId: 'type',
      id: '87b9d9db-74a3-45d7-8e60-dde669866808',
    },
    fields: {
      isv_deviceFingerprintId: '8a22fb00-dc63-496b-b0de-9f1d1fd36a50',
      isv_token:
        'eyJzaWduYXR1cmUiOiJNRVFDSUQ0RmI3YTJNUndKMjJGL3BCRVBZaFA2ZHdtN2R6VWt4bVQ2MGVKMEpPOHRBaUJyOFNvZVd5TTRxTmt5N3ltbDZOektqMjlFSzNoZlk2SGs4bURTbm1YRmF3XHUwMDNkXHUwMDNkIiwicHJvdG9jb2xWZXJzaW9uIjoiRUN2MSIsInNpZ25lZE1lc3NhZ2UiOiJ7XCJlbmNyeXB0ZWRNZXNzYWdlXCI6XCJYNFluRmpqeFMzRk92Z2NxYkh5OGFpdC93N2UvMmZJcG5kWlVXZ3pmR2FiUE9kbHhKRWFKK3JnL2xCWWU4dVh6RkZEb2loQWU1bnJlSFN0RUVVR2dBcEVZMW1uWkxmWkplZTB0WXNLOWVZeTVBYVkvNEdQR2s3ZVZ3TlllTWhCY01ZeWUwMjN5bUZOL1VzMmtNeUFqRFlGNkFPQkRRK0tUNTQrbzMwNGptdFkzdzV0R1NYOWtPZnFuU3V0aFFYMFlXVVVHUU0wSmdQL2duMW5WSDFJeFNyTmpmbHFtY1k5MWlWSk5ZTXB1a1E1WmFieEhlaTQvcDFYVXppNUcyVEZSN1RhaEM3UTJGRWpqeGs2d3o3cWJkMUhBNlg0RUE3TnEzMjFHTm1LaFAyQVZPVmtqRy9ZVW5VSWNJQlNMb3BmZVhPYWxMVFVsdnR2ZDN1QkUzTDhRcTFyVHIxSnE2UCtVaFJSY1doRXlsVVNvbkxURGlqM0cxVFNCSTJ1UVZUd2U4RXVjbThaNDYzZnJUOVNpQjlCc0NGeVZzM25mNC9aa0pIckNmemVvSFVzdTVkYklrNFMzNDRqRG1iZVhSM3hVSjVlNVwiLFwiZXBoZW1lcmFsUHVibGljS2V5XCI6XCJCQ3hCRk5LV3NBZUwyQ0NGR2hVRWptOFBVbmxVZWdmYlFYNWRQdy9KSGIvUGVPL3QxZ3FuYlpoYlRrU2tlOE93akU5UUwraFBiNzNEN0llQlNKMDNkN0FcXHUwMDNkXCIsXCJ0YWdcIjpcIkYvMzJpb2o4blNtdU5ZU3JIYUdTeEkzYWR5a3pSSVNQUmMvQVlHSldoREVcXHUwMDNkXCJ9In0',
      isv_acceptHeader: '*/*',
      isv_customerIpAddress: '106.202.150.94',
      isv_userAgentHeader: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
    },
  },
  paymentStatus: {},
  transactions: [],
  interfaceInteractions: [],
};

export const cardTokens = {
  customerTokenId: creditCard.savedTokenId,
  paymentInstrumentId: creditCard.savedToken,
};

export const guestCardTokens = null

export const dontSaveTokenFlag = false;

export const payerAuthMandateFlag = false

export const orderNo = null;

export const orderNumber = '10'; 
