import LoginInfo from './LoginInfo';
import LoginOAuth from './LoginOAuth';
import ImageResizer from './ImageResizer';

export default function Login() {
  return (
    <div
      id="login"
      className="join join-vertical flex items-center justify-center"
    >
      <div className="join-item">
        <LoginInfo></LoginInfo>
      </div>
      <h3 className="join-item pt-4">Or...</h3>

      <div className="join-item pt-3">
        <LoginOAuth></LoginOAuth>
      </div>
      <div id="oauth-logins" className="join join-horizontal flex pt-4">
        <img
          className="h-auto join-item w-20 pr-4"
          src="/github-mark.svg"
          alt="Github Logo"
        />
        <img
          className="h-auto join-item object-contain w-20 pr-4"
          src="/flogo.svg"
          alt="Facebook Logo"
        />
        <img
          className="h-auto join-item object-contain w-20 pr-4"
          src="/glogo.svg"
          alt="Google Logo"
        />
      </div>
    </div>
  );
}
