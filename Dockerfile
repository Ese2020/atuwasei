FROM current-alpine3.16

COPY . /src/index
WORKDIR /app

RUN docker pull node
RUN npm install
RUN npm install firebase
RUN npm install styled-components
RUN npm install react-icons



ENTRYPOINT ["node", "index.js"]