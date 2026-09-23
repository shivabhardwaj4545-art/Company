'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@kodx.studio');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      // Validate credentials
      if (email.trim().toLowerCase() === 'admin@kodx.studio' && password === 'admin123') {
        localStorage.setItem('kodx_admin_auth', 'true');
        localStorage.setItem('kodx_admin_user', JSON.stringify({ email, role: 'Super Admin' }));
        router.push('/admin');
      } else {
        setError('Invalid admin credentials. Please check email and password.');
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white flex items-center justify-center p-4 relative overflow-hidden font-body">
      {/* Background Accent Globs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#5b45ff]/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#9d97f0]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(91,69,255,0.15)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="w-full max-w-md relative z-10">
        {/* Logo & Portal Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 group mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#5b45ff] text-white flex items-center justify-center font-black text-2xl border border-white/20 shadow-md group-hover:scale-105 transition-transform">
              K
            </div>
          </Link>
          <h1 className="font-display font-black text-3xl tracking-tight text-white uppercase">
            KodX<span className="text-[#5b45ff]">.</span> Admin Portal
          </h1>
          <p className="text-xs font-mono text-gray-400 mt-1">
            Restricted Executive Command Center
          </p>
        </div>

        {/* Login Card */}
        <div className="p-8 rounded-3xl bg-[#141518]/90 backdrop-blur-xl border border-[#222429] shadow-2xl">
          {/* Quick Credential Box */}
          <div className="mb-6 p-4 rounded-2xl bg-[#5b45ff]/10 border border-[#5b45ff]/30">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#9d97f0] uppercase mb-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 0121 9z" />
              </svg>
              Admin Access Credentials
            </div>
            <div className="text-xs font-mono text-gray-300 space-y-1">
              <div>
                <span className="text-gray-400">Email:</span> <code className="text-white font-bold">admin@kodx.studio</code>
              </div>
              <div>
                <span className="text-gray-400">Password:</span> <code className="text-[#9d97f0] font-bold">admin123</code>
              </div>
            </div>
          </div>

          {error && (
            <div className="mb-5 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400 font-mono flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-gray-400 uppercase mb-1.5">
                Admin Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@kodx.studio"
                className="w-full px-4 py-3 bg-[#0B0C0E] border border-[#222429] rounded-xl text-sm text-white placeholder-gray-600 focus:border-[#5b45ff] focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-400 uppercase mb-1.5">
                Admin Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-[#0B0C0E] border border-[#222429] rounded-xl text-sm text-white placeholder-gray-600 focus:border-[#5b45ff] focus:outline-none transition-all pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs font-mono"
                >
                  {showPassword ? 'HIDE' : 'SHOW'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3.5 px-4 rounded-xl bg-[#5b45ff] text-white font-mono font-bold text-sm uppercase tracking-wider hover:bg-[#4834e7] transition-all shadow-[0_0_20px_rgba(91,69,255,0.3)] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <span>Sign In to Admin Portal</span>
              )}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-[#222429] text-center">
            <Link
              href="/"
              className="text-xs font-mono text-gray-400 hover:text-white transition-colors"
            >
              ← Back to KodX Studio Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
