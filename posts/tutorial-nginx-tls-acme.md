---
title: How to setup TLS certificates for CryptPad
date: 2022-12-12
author: "Mathilde Grünig"
summary: A complete tutorial about Nginx TLS configuration with acme.sh
tags:
- tutorials
- configuration
- security 
--- 

Hello!

This is the first of a new series of articles for the CryptPad blog. Let me introduce you to: tutorials! 📚

Today we'll be diving into an important step during CryptPad setup when deploying your own instance: TLS certificate generation.

## Prerequisites

* You have read and followed the installation steps in the [administrator guide](https://docs.cryptpad.org/en/admin_guide/).
* You are already familiar with Linux or UNIX systems, a command line text editor and basic command line use.
Unless stated otherwise, all commands listed in this article are meant to be run as superuser, `root`.
* You have two different domains available, it's a strong requirement [explained in the documentation](https://docs.cryptpad.org/en/admin_guide/installation.html#admin-domain-config). You know how to setup their DNS zone file and have added proper entries for both IPv4 & IPv6.

## Dependencies

As Nginx is a basic requirement for CryptPad we'll assume that [you have already installed it](https://nginx.org/en/linux_packages.html#Debian). However, we still need a way to generate our TLS certificates.

Luckily, since 2015 and thanks to [Let's Encrypt](https://letsencrypt.org), something that was once expensive and kind of a hassle to setup has been greatly simplified. Now you can get TLS certificates for free and provision them in a super simple way thanks to a variety of clients available. We will focus on [acme.sh](https://github.com/acmesh-official/acme.sh), *a pure Unix shell script implementing ACME client protocol*.

Let's start by cloning the git repository.

```bash
git clone https://github.com/acmesh-official/acme.sh.git
```

Then move inside the new folder and install it by specifying an email address for the account registration:

```bash
cd ./acme.sh
./acme.sh --install -m my@example.com
```

This command should produce the following output.

```
[Fri 02 Dec 2022 09:13:23 AM CET] It is recommended to install socat first.
[Fri 02 Dec 2022 09:13:23 AM CET] We use socat for standalone server if you use standalone mode.
[Fri 02 Dec 2022 09:13:23 AM CET] If you don't use standalone mode, just ignore this warning.
[Fri 02 Dec 2022 09:13:23 AM CET] Installing to /root/.acme.sh
[Fri 02 Dec 2022 09:13:23 AM CET] Installed to /root/.acme.sh/acme.sh
[Fri 02 Dec 2022 09:13:23 AM CET] Installing alias to '/root/.bashrc'
[Fri 02 Dec 2022 09:13:23 AM CET] OK, Close and reopen your terminal to start using acme.sh
[Fri 02 Dec 2022 09:13:23 AM CET] Installing cron job
38 0 * * * "/root/.acme.sh"/acme.sh --cron --home "/root/.acme.sh" > /dev/null
[Fri 02 Dec 2022 09:13:23 AM CET] Good, bash is found, so change the shebang to use bash as preferred.
[Fri 02 Dec 2022 09:13:24 AM CET] OK
[Fri 02 Dec 2022 09:13:24 AM CET] Install success!
```

You can safely ignore the socat warning since we won't use the standalone mode.

## Configuration

### acme.sh

It's a great ACME client because of its simplicity and the fact that it just works and then gets out of your way.

The maintainers of acme.sh have a sponsored partnership with ZeroSSL to set up their Certificate Authority (CA) as acme.sh's default. But ZeroSSL free services can be unreliable. That's why we prefer Let's Encrypt, which is more reliable and also operated by a nonprofit organization.

We need to change a single parameter to switch the CA from ZeroSSL to Let's Encrypt.
We do this with the following command:

```bash
acme.sh --set-default-ca --server letsencrypt
```

Which produces this result:

```bash
[Fri 02 Dec 2022 09:22:27 AM CET] Changed default CA to: https://acme-v02.api.letsencrypt.org/directory
```

### Nginx

Now we can configure Nginx!

First we create a directory where the ACME token will be put for authenticating before certificates retrieval. 
```bash
mkdir -p /var/www/le_root/.well-known/acme-challenge
```

Then we create a directory where the certificates will be stored when installed.
```bash
mkdir -p /etc/ssl/lets-encrypt/your-main-domain.com
```

We also need to create an Nginx configuration file for acme.sh webroot.
```nginx
cat <<EOT >> /etc/nginx/letsencrypt-webroot
location ^~ /.well-known/acme-challenge {
    allow all;
    expires -1;
    add_header Cache-Control no-store;
    alias /var/www/le_root/.well-known/acme-challenge/;
}
EOT
```

We link it to the default Nginx configuration file, pasting those lines below the `listen` directive in `/etc/nginx/conf.d/default.conf`:
```nginx
# Let's Encrypt webroot
include letsencrypt-webroot;
```

Then we check if everything is sound.
```bash
nginx -t
```

Finally, if we get no warning or errors, we reload the configuration to apply the last changes.
```bash
nginx -s reload
```

## Certificate generation

Now that we have configured acme.sh & Nginx we can finally issue our certificates. We'll validate them against two domains, the main one and the one dedicated to the sandbox.
```bash
acme.sh --issue -d your-main-domain.com -d your-sandbox-domain.com -w /var/www/le_root/
```

This command should produce the following output.

```
[Fri 02 Dec 2022 09:23:23 AM CET] Using stage ACME_DIRECTORY: https://acme-staging.api.letsencrypt.org/directory
[Fri 02 Dec 2022 09:23:23 AM CET] Creating domain key
[Fri 02 Dec 2022 09:23:23 AM CET] The domain key is here: /root/acme/.acme.sh/your-main-domain.com/your-main-domain.com.key
[Fri 02 Dec 2022 09:23:23 AM CET] Single domain='your-main-domain.com'
[Fri 02 Dec 2022 09:23:24 AM CET] Getting domain auth token for each domain
[Fri 02 Dec 2022 09:23:24 AM CET] Getting webroot for domain='your-main-domain.com'
[Fri 02 Dec 2022 09:23:25 AM CET] Getting new-authz for domain='your-main-domain.com'
[Fri 02 Dec 2022 09:23:25 AM CET] The new-authz request is ok.
[Fri 02 Dec 2022 09:23:26 AM CET] Verifying:your-main-domain.com
[Fri 02 Dec 2022 09:23:27 AM CET] Success
[Fri 02 Dec 2022 09:23:27 AM CET] Verify finished, start to sign.
[Fri 02 Dec 2022 09:23:27 AM CET] Cert success.
-----BEGIN CERTIFICATE-----
...
-----END CERTIFICATE-----
[Fri 02 Dec 2022 09:23:28 AM CET] Your cert is in  /root/acme/.acme.sh/your-main-domain.com/your-main-domain.com.cer 
[Fri 02 Dec 2022 09:23:28 AM CET] Your cert key is in  /root/acme/.acme.sh/your-main-domain.com/your-main-domain.com.key 
[Fri 02 Dec 2022 09:23:28 AM CET] The intermediate CA cert is in  /root/acme/.acme.sh/your-main-domain.com/ca.cer 
[Fri 02 Dec 2022 09:23:28 AM CET] And the full chain certs is there:  /root/acme/.acme.sh/your-main-domain.com/fullchain.cer 
```

After retrieving the certificates we will now install them in their proper directory. We'll also specify the command to be run for reloading Nginx after the certificates auto-renewal.
```bash
acme.sh --install-cert -d your-main-domain.com -d your-sandbox-domain.com \
--key-file /etc/ssl/lets-encrypt/your-main-domain.com/key \
--fullchain-file /etc/ssl/lets-encrypt/your-main-domain.com/cert \
--reloadcmd "systemctl reload nginx.service"
```

This command should produce the following output.

```
[Fri 02 Dec 2022 09:25:38 AM CET] Installing key to:/etc/ssl/lets-encrypt/your-main-domain.com/key
[Fri 02 Dec 2022 09:25:38 AM CET] Installing full chain to:/etc/ssl/lets-encrypt/your-main-domain.com/cert
[Fri 02 Dec 2022 09:25:38 AM CET] Run reload cmd: systemctl reload nginx.service
[Fri 02 Dec 2022 09:25:38 AM CET] Reload success
```

## Going forward

Now you just have to continue the installation process described in [the administrator guide](https://docs.cryptpad.org/en/admin_guide/installation.html#install-and-configure-nginx), copying the example configuration file provided and edit it to match your configuration.

## Summary

It's done! In this tutorial we've seen how to install acme.sh, adapt Nginx configuration to handle TLS certificates generation and what are the next steps going forward. Thank you very much for reading this far, and for your interest in CryptPad!

In case of need, don't hesitate to join the [community forum](https://forum.cryptpad.org) or the [Matrix space](https://matrix.to/#/#cryptpad:matrix.xwiki.com). You can also follow CryptPad on the fediverse with the [official Mastodon account](https://fosstodon.org/@cryptpad).

Have a great day!
