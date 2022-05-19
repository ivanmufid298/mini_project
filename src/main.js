import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import { ApolloClient, HttpLink, InMemoryCache, split } from "apollo-boost";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import VueApollo from "vue-apollo";

Vue.config.productionTip = false;

const httpLink = new HttpLink({
  uri: "https://light-elephant-62.hasura.app/v1/graphql",
});

const wsLink = new WebSocketLink({
  uri: "ws://light-elephant-62.hasura.app/v1/graphql",
  options: {
    reconnect: true,
  },
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind == "OperationDefinition" &&
      definition.operation == "subsciption"
    );
  },
  wsLink,
  httpLink
);

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.use(VueApollo);

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
