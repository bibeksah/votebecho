"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Share2, RotateCcw, BookOpen } from "lucide-react"
import Link from "next/link"

interface FinalMessageCardProps {
  totalCost: number
  onShare: () => void
  onCalculateAgain: () => void
}

export function FinalMessageCard({ totalCost, onShare, onCalculateAgain }: FinalMessageCardProps) {
  const { t } = useLanguage()

  return (
    <div className="bg-card rounded-xl border border-border shadow-lg p-6 md:p-8 space-y-6">
      <div className="space-y-4 text-base md:text-lg text-foreground/90 leading-relaxed">
        <p className="text-pretty">
          {t(
            `If you still want to sell your vote, at least recover all the money you lost due to bad governance last year.`,
            `अगर आप फिर भी अपना वोट बेचना चाहते हैं, तो कम से कम पिछले साल खराब शासन के कारण खोए हुए सारे पैसे वापस वसूल लें।`,
          )}
        </p>
        <p className="text-pretty font-medium">
          {t(
            "But ask yourself: If you sell your vote for Rs. 500 or Rs. 1,000, who's really profiting?",
            "लेकिन खुद से पूछें: अगर आप अपना वोट रु. 500 या रु. 1,000 में बेचते हैं, तो असल में फायदा किसका हो रहा है?",
          )}
        </p>
        <p className="text-pretty text-lg font-semibold text-forest-700">
          {t(
            "Your vote is worth more than money—it's your power to demand accountability, better services, and real change.",
            "आपका वोट पैसों से अधिक मूल्यवान है—यह जवाबदेही, बेहतर सेवाएँ और वास्तविक बदलाव की मांग करने की आपकी शक्ति है।",
          )}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Link href="/evaluate" className="flex-1">
          <Button className="w-full h-12 text-base bg-forest-600 hover:bg-forest-700">
            <BookOpen className="mr-2 h-5 w-5" />
            {t("Learn How to Evaluate Candidates", "उम्मीदवारों का मूल्यांकन करना सीखें")}
          </Button>
        </Link>
        <Button variant="outline" onClick={onShare} className="flex-1 h-12 text-base bg-transparent">
          <Share2 className="mr-2 h-5 w-5" />
          {t("Share My Results", "मेरा परिणाम साझा करें")}
        </Button>
        <Button variant="outline" onClick={onCalculateAgain} className="h-12 text-base bg-transparent">
          <RotateCcw className="mr-2 h-5 w-5" />
          {t("Calculate Again", "फिर से गणना करें")}
        </Button>
      </div>
    </div>
  )
}
