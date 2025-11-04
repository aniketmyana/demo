export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto pt-16 px-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-light mb-2">Sign in</h1>
          <p className="text-sm text-gray-600">Become a member — don't miss out on deals, offers, discounts and bonus vouchers.</p>
        </div>

        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm"
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-black underline">Forgot password?</a>
          </div>

          <button className="w-full bg-black text-white py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
            SIGN IN
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">Not a member yet?</p>
          <a href="/register" className="w-full block border border-black text-black py-3 text-sm font-medium hover:bg-gray-50 transition-colors">
            BECOME A MEMBER
          </a>
        </div>
      </div>
    </div>
  );
}