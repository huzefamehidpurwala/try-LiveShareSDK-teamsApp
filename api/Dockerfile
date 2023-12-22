FROM mcr.microsoft.com/azure-functions/node:4-node18

COPY . /teamsApp

WORKDIR /teamsApp

RUN npm install -g azure-functions-core-tools@4 --unsafe-perm true
RUN npm install

EXPOSE 7071

CMD ["npm", "run", "dev:teamsfx"]
