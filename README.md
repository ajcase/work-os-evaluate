# WorkOS Evaluation
Quick integration of WorkOS into Express service.

## Objective
Evaluate the WorkOS SSO API and integrate it to support a simple SP-initiated SAML authentication proxied by WorkOS.

## Getting started

This GitHub repo does not contain the API clientID and secret in the env file (for obvious reasons). Nothing fancy here, this is just an express app. However, in case you want to use it, you will need to create an .env file first and paste in the client ID and secret as notated in this [document](https://workos.com/docs/sso/2-add-sso-to-your-app/install-the-workos-sdk).

To utilize this code sample and run it locally, follow the steps below.

*Steps*
1. *Configure the .env file*
Create a file called `.env` and copy and paste the following, and then replace the WORKOS_API_KEY and WORKOS_CLIENT_ID in the code below. Then save.

```
WORKOS_API_KEY='sk_test_a2V5XzAxR0c5MzdLUTVOTktIVFI1SzRNWFhRVlQ0LEFkNUdrcnBybnFvcTIwSUV5NldXbWNlWWU'
WORKOS_CLIENT_ID='client_01GG937KQCDSY8W5VYF23QEXNF'
```

2. *Install the package depedencies*
Run the following command in the console/terminal to install the package depedencies that make this operational.

```
npm Install
```
3. *Configure for your workOS connection*
You will need to obtain a connection ID from your WorkOS tenant. Replace the connection variable in the `app.js` file. Reference the [documentation](https://workos.com/docs/sso/2-add-sso-to-your-app/install-the-workos-sdk) for additional resources.

```
// A WorkOS Connection ID
  const connection = 'connection_123';
```

Additionally, you will need to configure the redirect URI in your WorkOS tenant. Since this is running locally and without HTTPS, the redirect URI that you need to use is:

```
http://localhost:3000/callback
```

3. *Run the application*
In your console, run the following command to run the app.

```
node app.js
```

4. *Authenticate*
To reach the `/private` URL, first navigate to `http://localhost:3000/auth`.
