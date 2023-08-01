export default function LoginInfo() {
  return (
    <div id="login-info">
      <div className="join join-vertical flex items-center justify-center">
        <div className="mt-32 form-control w-full max-w-xs join-item">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Your email"
            className="input input-bordered w-full max-w-xs join-item"
          />
        </div>
        <div className="form-control w-full max-w-xs join-item">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Your password"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="join-item pt-4">
          <button id="login-info" className="btn btn-outline">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
