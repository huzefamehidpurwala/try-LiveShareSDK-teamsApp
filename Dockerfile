FROM mcr.microsoft.com/azure-functions/node:4-node18

COPY . /teamsApp

WORKDIR /teamsApp

RUN npm install -g azure-functions-core-tools@4 --unsafe-perm true
RUN npm install

WORKDIR /teamsApp/api

RUN npm install

EXPOSE 443
EXPOSE 7071

CMD /teamsApp/start.sh
