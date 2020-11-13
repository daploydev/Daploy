import * as Realm from "realm-web";
import Layout from "../components/Layout";
import { Typography } from "@material-ui/core";
import "fontsource-roboto";

const REALM_APP_ID = "daploy-wcred";
const app = new Realm.App({ id: REALM_APP_ID });

const mongo = app.services.mongodb("mongodb-atlas");
const mongoCollection = mongo.db("daploy").collection("items");

function GetItems({ setItem }) {
  const Items = async () => {
    const queryFilter = {};
    const itemDoc = await mongoCollection.findOne(queryFilter);
    setItem(itemDoc);
  };
  return <div onClick={Items()}></div>;
}
// Create a component that lets an anonymous user log in
function Login({ setUser }) {
  const loginAnonymous = async () => {
    const user = await app.logIn(Realm.Credentials.anonymous());
    setUser(user);
  };
  return <div onClick={loginAnonymous()}></div>;
}
const App = ({ Component, pageProps }) => {
  // Keep the logged in Realm user in local state. This lets the app re-render
  // whenever the current user changes (e.g. logs in or logs out).
  const [user, setUser] = React.useState(app.currentUser);
  const [item, setItem] = React.useState("");

  // If a user is logged in, show their details.
  // Otherwise, show the login screen.
  return (
    <div>
      <div className="App-header">
        {user ? (
          <div style={{backgroundColor:"#333333", color: "#FFFFFF", padding:'0.2rem'}}><p>User ID: {user.id}</p>
          </div>
        ) : (
          <Login setUser={setUser} />
        )}
      </div>
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout><style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
          font-family: "Roboto";
          background-image: linear-gradient(217deg, #08AEEA 0%, #2AF598 100%);
      `}</style></div>
  );
};

export default App;
