import { GuestPage, UserPage } from './Pages';

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserPage />;
  }
  return <GuestPage />;
}

export default Greeting;
