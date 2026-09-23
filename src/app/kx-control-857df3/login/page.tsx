'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Lock, Mail, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      // Validate credentials
      if (email.trim().toLowerCase() === 'admin@kodx.studio' && password === 'admin123') {
        localStorage.setItem('kodx_admin_auth', 'true');
        localStorage.setItem('kodx_admin_user', JSON.stringify({ email, role: 'Super Admin' }));
        router.push('/kx-control-857df3');
      } else {
        setError('Invalid admin credentials. Please check email and password.');
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white flex items-center justify-center p-4 relative overflow-hidden font-body">
      {/* Background Accent Globs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#857df3]/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#9d97f0]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(133,125,243,0.15)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      {/* LOGIN CARD */}
      <div className="w-full max-w-md p-8 rounded-3xl bg-[#141518] border border-[#222429] shadow-2xl relative z-10 space-y-6">
        {/* Header Icon & Title */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#857df3]/15 border border-[#857df3]/30 text-[#857df3] mb-2 shadow-lg">
            <Shield className="w-7 h-7 text-[#857df3]" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#857df3]/10 border border-[#857df3]/30 text-[#9d97f0] text-[10px] font-mono font-bold uppercase tracking-widest mb-1">
            <Sparkles className="w-3 h-3 text-[#857df3]" /> Security Portal Key
          </div>

          <h1 className="text-2xl font-bold font-display text-white">AiKodX Control Center</h1>
          <p className="text-xs text-gray-400 font-mono">
            Authorized admin credentials required for system access.
          </p>
        </div>

        {/* Error Notification */}
        {error && (
          <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono text-center animate-shake">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-mono font-bold text-gray-300">Admin Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@kodx.studio"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0B0C0E] border border-[#222429] text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-[#857df3] transition-all font-mono"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-mono font-bold text-gray-300">Security Password</label>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0B0C0E] border border-[#222429] text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-[#857df3] transition-all font-mono"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-[#857df3] text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#7268ea] transition-all shadow-lg shadow-[#857df3]/25 flex items-center justify-center gap-2 group mt-2"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Authenticating...</span>
              </span>
            ) : (
              <>
                <span>Access System Workspace</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
              </>
            )}
          </button>
        </form>

        {/* Demo Credentials Footer */}
        <div className="pt-4 border-t border-[#222429] text-center space-y-2">
          <div className="p-3 rounded-xl bg-[#0B0C0E] border border-[#222429] text-[11px] font-mono text-gray-400 space-y-1">
            <p className="text-gray-300 font-bold">Key Credentials:</p>
            <p>
              Email: <span className="text-[#9d97f0]">admin@kodx.studio</span>
            </p>
            <p>
              Pass: <span className="text-[#9d97f0]">admin123</span>
            </p>
          </div>

          <Link
            href="/"
            className="inline-block text-[11px] font-mono text-gray-500 hover:text-gray-300 transition-colors pt-2"
          >
            ← Return to AiKodX Public Studio
          </Link>
        </div>
      </div>
    </div>
  );
}
