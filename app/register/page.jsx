export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto pt-16 px-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-light mb-2">Become a member</h1>
          <p className="text-sm text-gray-600">Become a H&M Member to get your personal offers, rewards and to make shopping easier.</p>
        </div>

        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm"
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Password*"
              className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="First name*"
              className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Last name*"
              className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm"
            />
          </div>

          <div>
            <input
              type="date"
              placeholder="Date of birth"
              className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm"
            />
          </div>

          <div className="space-y-3 text-sm">
            <label className="flex items-start">
              <input type="checkbox" className="mr-3 mt-1" />
              <span>Yes, I'd like to be a H&M member and receive the member benefits.</span>
            </label>
            
            <label className="flex items-start">
              <input type="checkbox" className="mr-3 mt-1" />
              <span>I'd like to receive personalised offers and inspiration via email.</span>
            </label>
          </div>

          <button className="w-full bg-black text-white py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
            BECOME A MEMBER
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">Already a member?</p>
          <a href="/login" className="w-full block border border-black text-black py-3 text-sm font-medium hover:bg-gray-50 transition-colors">
            SIGN IN
          </a>
        </div>
      </div>
    </div>
  );
}