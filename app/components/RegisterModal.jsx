'use client';

export default function RegisterModal({ isOpen, onClose, onSwitchToLogin }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
      <div className="bg-white max-w-md w-full mx-4 p-6 relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-xl cursor-pointer hover:text-gray-600">&times;</button>

        <div className="text-center mb-4">
          <h1 className="text-xl font-light mb-1">Become a member</h1>
          <p className="text-xs text-gray-600">Get personal offers, rewards and easier shopping.</p>
        </div>

        <form className="space-y-3">
          <input
            type="email"
            placeholder="Email*"
            className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none text-sm"
          />
          
          <input
            type="password"
            placeholder="Password*"
            className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none text-sm"
          />

          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="First name*"
              className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none text-sm"
            />
            <input
              type="text"
              placeholder="Last name*"
              className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none text-sm"
            />
          </div>

          <input
            type="date"
            placeholder="Date of birth"
            className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none text-sm"
          />

          <div className="space-y-2 text-xs">
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mr-2 mt-0.5 cursor-pointer" />
              <span>Yes, I'd like to be a H&M member.</span>
            </label>
            
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mr-2 mt-0.5 cursor-pointer" />
              <span>I'd like to receive offers via email.</span>
            </label>
          </div>

          <button type="submit" className="w-full bg-black text-white py-2 text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer">
            BECOME A MEMBER
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-600 mb-2">Already a member?</p>
          <button onClick={onSwitchToLogin} className="w-full border border-black text-black py-2 text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer">
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
}