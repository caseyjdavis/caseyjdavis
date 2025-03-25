---
title: "Let's Encrypt SSL for TrueNAS"
date: "2025-03-24"
draft: false
---

## Intro

TrueNAS has a built-in acme dns authenticator available via the web ui which means you can easily generate SSL certificates for the admin portal. Here are the steps to setup Cloudflare as an authenticator using Let's Encrypt for automatic SSL certificates for TrueNAS.

## Edit User

First you need to edit a user on your TrueNAS installation to have a valid e-mail address. Here I am editing the root user and putting in my e-mail. This is required to generate a certificate.

![Add Cloudflare e-mail to local user](./edit-user.png)

## Add ACME DNS Authenticator

Next you add a DNS authenticator. In this case I am using Cloudflare because my domain is hosted there. You will need to generate a API token that allows you to edit DNS zones. Name the authenticator and paste your token in the API Token field. Note: If you use a token you do NOT have to enter your Cloudflare email and API Key.

![Adding ACMD DNS Authenticator](./acme-dns-authenticator.png)

## Add Certificate Signing Request

Here you enter the details of the Certificate Signing Request you want to be visible on the certificate details. Fill in the required fields and save.

![Generating a Certificate Signing Request in TrueNAS](./add-certificate-signing-request.png)

Once you have generated a CSR, then you turn around and click the wrench icon 🔧 in the web gui and that will open the wizard to generate the certificate.

![Generating a Certificate Signing Request in TrueNAS](./add-certificate-signing-request%2002.png)

## Generating a certificate

For the identifier I use `letsencrypt`, accept the Terms of Service, I set the certificate to renew every 30 days since this is local on my home lab. Make sure to select "Production Directory", select the domain and the authenticator and click Save.

![Let's Encrypt Certificate for TrueNAS](./acme-certificate.png)

A pop-up box will open with progress and you can see if the certificate was provisioned. This is what a successful DNS challenge will look like.

![Let's Encrypt Certificate for TrueNAS](./dns-challenge.png)

## Activating new certificate

Now that you have generated a valid SSL cert you need to make sure the web gui in TrueNAS uses that certificate. Go to System Settings > General > GUI > Settings. In this menu you will select your new cert from the drop down box and make sure to click the HTTP > HTTPS Redirect. Click Save. The web interface will need to restart.

![Activate Let's Encrypt Certificate for TrueNAS](./gui-settings.png)

## Verifying SSL cert

If you have done everything correctly the certificate will be active, and you can click on the lock in your browser window to confirm the certificate has been issued by Let's Encrypt.

![Verify Let's Encrypt Certificate for TrueNAS](./ssl-verified.png)
