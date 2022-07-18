import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";

const API_URL = "http://localhost:3001"
//http://localhost:1337 https://express-forecast-cms.herokuapp.com

const config = {
  link: new HttpLink({
    uri: `${API_URL}/api/graphql`, // Server URL (must be absolute)
  }),
};

export default withData(config);
