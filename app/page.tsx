"use client"

import { Button } from "@/components/ui/button"
import { Check, MessageCircle, TrendingUp, Users } from "lucide-react"

export default function SamuelConfidenceLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-900 to-black flex items-center justify-center p-6">
      {/* Subtle background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl flex items-center justify-center shadow-xl mb-4">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white uppercase tracking-wider">TRADER TACTICS</h1>
          <p className="text-white/80">@Tradertactics</p>
        </div>

        {/* Main Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-2">FOREX SIGNALS</h2>
          <h3 className="text-xl text-white/90 mb-8">DAILY PROFITS GUARANTEED</h3>

          {/* Features */}
          <div className="space-y-4 mb-8 text-left">
            <div className="flex items-center text-white/90">
              <div className="w-6 h-6 rounded-full bg-green-500/20 backdrop-blur-sm flex items-center justify-center mr-3">
                <Check className="w-4 h-4 text-green-400" />
              </div>
              <span>Free Daily Forex Signals 📈</span>
            </div>

            <div className="flex items-center text-white/90">
              <div className="w-6 h-6 rounded-full bg-green-500/20 backdrop-blur-sm flex items-center justify-center mr-3">
                <Check className="w-4 h-4 text-green-400" />
              </div>
              <span>85%+ Win Rate Accuracy 🎯</span>
            </div>

            <div className="flex items-center text-white/90">
              <div className="w-6 h-6 rounded-full bg-green-500/20 backdrop-blur-sm flex items-center justify-center mr-3">
                <Check className="w-4 h-4 text-green-400" />
              </div>
              <span>Live Market Analysis 📊</span>
            </div>

            <div className="flex items-center text-white/90">
              <div className="w-6 h-6 rounded-full bg-green-500/20 backdrop-blur-sm flex items-center justify-center mr-3">
                <Check className="w-4 h-4 text-green-400" />
              </div>
              <span>Risk Management Tips 🛡️</span>
            </div>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-xl p-3">
              <div className="flex items-center justify-center mb-1">
                <Users className="w-4 h-4 text-green-400 mr-1" />
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="text-2xl font-bold text-white">17,700</div>
              <div className="text-sm text-white/70">Live Members</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-xl p-3">
              <div className="text-2xl font-bold text-white">Daily</div>
              <div className="text-sm text-white/70">Signals</div>
            </div>
          </div>

          {/* CTA */}
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-xl py-4 text-lg font-semibold rounded-xl transition-all duration-300 mb-4"
            onClick={() => window.open("https://t.me/+poltdw-R09VkZmU8", "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            JOIN FREE CHANNEL
          </Button>

          {/* Admin Contact */}
          <div className="text-center mb-4">
            <p className="text-white/80 text-sm mb-2">Need help? Contact admin:</p>
            <Button
              variant="outline"
              size="sm"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              onClick={() => window.open("https://t.me/Tradertactics", "_blank")}
            >
              @Tradertactics
            </Button>
          </div>

          <p className="text-xs text-white/60">⚡ Start earning today - No payment required</p>
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-6">
          <p className="text-white/70 text-sm">🔒 Trusted by thousands of traders worldwide</p>
        </div>
      </div>
    </div>
  )
}
