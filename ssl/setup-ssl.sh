#!/bin/sh

export NODE_EXTRA_CA_CERTS="$(mkcert -CAROOT)/rootCA.pem"