"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Share2, Copy, Check } from "lucide-react"
import { useState } from "react"

interface SocialChallengeProps {
  referralCode: string
  friendsReferred: number
}

export function SocialChallenge({ referralCode, friendsReferred }: SocialChallengeProps) {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const referralLink = `${typeof window !== "undefined" ? window.location.origin : ""}/survey?ref=${referralCode}`

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("[v0] Failed to copy:", err)
    }
  }

  const handleShare = async () => {
    const shareText = t(
      "I just discovered how much bad governance costs me. Calculate your own governance cost!",
      "मैंने अभी पता लगाया कि खराब शासन मुझे कितना खर्च कराता है। अपना शासन लागत गणना करें!",
    )

    if (navigator.share) {
      try {
        await navigator.share({
          title: t("Know Your Vote's Worth", "अपने वोट की कीमत जानें"),
          text: shareText,
          url: referralLink,
        })
      } catch (err) {
        console.log("[v0] Share cancelled:", err)
      }
    } else {
      handleCopyLink()
    }
  }

  return (
    <div className="bg-gradient-to-br from-ochre-50 to-cream-100 rounded-xl border border-ochre-200 shadow-md p-6 space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ochre-500 to-terracotta-500 flex items-center justify-center text-white">
          <Share2 className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold">{t("Challenge Your Friends", "अपने दोस्तों को चुनौती दें")}</h3>
          <p className="text-sm text-muted-foreground devanagari-numerals">
            {t(
              `You've helped ${friendsReferred} friends become aware`,
              `आपने ${friendsReferred} दोस्तों को जागरूक बनने में मदद की है`,
            )}
          </p>
        </div>
      </div>

      <p className="text-sm text-foreground/80">
        {t(
          "Share your unique link and help 3 friends discover their governance cost. Together, we can build a more informed electorate.",
          "अपना विशेष लिंक साझा करें और 3 दोस्तों को उनकी शासन लागत जानने में मदद करें। मिलकर, हम अधिक सूचित मतदाता बना सकते हैं।",
        )}
      </p>

      <div className="flex gap-2">
        <Button onClick={handleShare} className="flex-1 h-10">
          <Share2 className="mr-2 h-4 w-4" />
          {t("Share Link", "लिंक साझा करें")}
        </Button>
        <Button onClick={handleCopyLink} variant="outline" className="h-10 px-4 bg-transparent">
          {copied ? <Check className="h-4 w-4 text-forest-600" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      {/* Progress */}
      <div className="space-y-2 pt-2">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{t("Challenge Progress", "चुनौती प्रगति")}</span>
          <span className="devanagari-numerals">{friendsReferred}/3</span>
        </div>
        <div className="h-2 bg-white/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-ochre-500 to-terracotta-500 transition-all duration-500"
            style={{ width: `${Math.min((friendsReferred / 3) * 100, 100)}%` }}
          />
        </div>
      </div>
    </div>
  )
}
