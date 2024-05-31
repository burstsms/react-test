// there's a proxy config in package.json that specifies all unknown requests are proxied to the Kudosity transmitmessage api
// this means instead of making a call to https://api.transmitmessage.com/v2/sms you would call just /v2/sms

type SendSMSResponse = void;

export const sendSMS = (
  sender: string,
  recipient: string,
  message: string
): SendSMSResponse => {};
