'use client';

export default function LoginModal({ isOpen, onClose, onSwitchToRegister }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
      <div className="bg-white max-w-md w-full mx-4 p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl cursor-pointer hover:text-gray-600">&times;</button>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-light mb-2">Sign in</h1>
          <p className="text-sm text-gray-600">Become a member — don't miss out on deals, offers, discounts and bonus vouchers.</p>
        </div>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm"
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="mr-2 cursor-pointer" />
              Remember me
            </label>
            <a href="#" className="text-black underline cursor-pointer hover:text-gray-600">Forgot password?</a>
          </div>

          <button type="submit" className="w-full bg-black text-white py-3 text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer">
            SIGN IN
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">Not a member yet?</p>
          <button onClick={onSwitchToRegister} className="w-full border border-black text-black py-3 text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer">
            BECOME A MEMBER
          </button>
        </div>
      </div>
    </div>
  );
}