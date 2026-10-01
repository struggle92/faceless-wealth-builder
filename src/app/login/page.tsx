export default function LoginPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <div className="form-card">
          <h3>Welcome back</h3>
          <p>Log in to access your content, dashboard, and affiliate tools.</p>
          <form>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Password
              <input type="password" placeholder="••••••••" />
            </label>
            <button type="submit" className="button">Login</button>
          </form>
        </div>
      </div>
    </main>
  );
}
