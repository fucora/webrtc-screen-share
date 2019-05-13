FROM node:12

# Set apt in non-interactive mode during the image build
ARG DEBIAN_FRONTEND=noninteractive

# mkcertに必要なパッケージをインストール
RUN apt-get update && \
    apt-get install -y libnss3-tools

# Linuxbrewのインストール
# @see: https://github.com/Linuxbrew/docker/blob/ae70717907c35770fc7b5b78050f63c37a049548/debian/Dockerfile
# Set up UTF-8
RUN apt-get install -y apt-utils locales && \
    apt-get clean && \
    sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && \
    dpkg-reconfigure locales && \
    update-locale LANG=en_US.UTF-8
ENV LANG en_US.UTF-8

# Install minimal debian packages listed in Linuxbrew documentation
RUN apt-get install -y build-essential curl file git python-setuptools \
  && apt-get clean

# Create a linuxbrew user
RUN  useradd -m -s /bin/bash linuxbrew \
     && echo 'linuxbrew ALL=(ALL) NOPASSWD:ALL' >>/etc/sudoers
USER linuxbrew
WORKDIR /home/linuxbrew
ENV PATH=/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin:$PATH \
    SHELL=/bin/bash

# Install Linuxbrew from github
RUN git clone https://github.com/Linuxbrew/brew.git .linuxbrew

# mkcertをインストール
RUN brew install mkcert

# ローカルに擬似認証局を生成
ARG host_ip
USER root
ENV CAROOT /etc/ssl/ca
RUN mkdir -p /etc/ssl/ca \
    && mkcert -install \
    && mkcert -cert-file /etc/ssl/cert.pem -key-file /etc/ssl/key.pem $host_ip ::1

# 依存パッケージをインストール
WORKDIR /app
COPY package.json /app/
RUN npm install
