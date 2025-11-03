"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { X } from "lucide-react"

type Offer = {
  id: string
  icon: string
  en: string
  hi: string
}

const OFFERS: Offer[] = [
  { id: "tee", icon: "👕", en: "A free t-shirt", hi: "एक फ्री टी-शर्ट" },
  { id: "liquor", icon: "🍾", en: "A bottle of liquor", hi: "शराब की बोतल" },
  { id: "cash", icon: "💸", en: "₹500 cash", hi: "₹500 नक़द" },
  { id: "promises", icon: "🫥", en: "Empty promises", hi: "खोखले वादे" },
  { id: "biryani", icon: "🍛", en: "A pack of biryani", hi: "बिरयानी का पैकेट" },
  { id: "ride", icon: "🚗", en: "A ride in the campaign car", hi: "कैंपेन कार में सैर" },
  { id: "sms", icon: "📩", en: "An SMS saying 'thank you'", hi: "'थैंक यू' वाला एसएमएस" },
]

const SNARK: Record<string, { en: string; hi: string }> = {
  tee: {
    en: "Enjoy the free tee—democracy runs on cotton now.",
    hi: "फ्री टी-शर्ट मुबारक—अब लोकतंत्र सूत पर चलेगा।",
  },
  liquor: {
    en: "Cheers to short-term spirits and long-term hangovers.",
    hi: "कम समय की खुशी, लंबे समय का हैंगओवर—चियर्स!",
  },
  cash: {
    en: "₹500 today, costlier tomorrow—great ROI for corruption.",
    hi: "आज ₹500, कल महंगा कल—भ्रष्टाचार का बढ़िया सौदा!",
  },
  promises: {
    en: "You picked promises—just like the budget: imaginary.",
    hi: "आपने वादे चुने—बजट की तरह, काल्पनिक।",
  },
  biryani: {
    en: "Biryani now, burnt policies later. Bon appétit.",
    hi: "अभी बिरयानी, बाद में जली हुई नीतियाँ। स्वादिष्ट?",
  },
  ride: {
    en: "Nice ride. Pity your rights didn't get a seat.",
    hi: "सैर बढ़िया थी, अफ़सोस हक़ को सीट नहीं मिली।",
  },
  sms: {
    en: "A 'thank you' SMS—receipt for selling your future.",
    hi: "'थैंक यू' SMS—भविष्य बेचने की रसीद।",
  },
}

export default function SellMyVoteButton() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [selectedId, setSelectedId] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [snarkOpen, setSnarkOpen] = useState(false)

  const onDoNotSell = () => {
    setMessage(t("🎉 Congratulations, you still have integrity!", "🎉 बधाई हो, आपके अंदर अभी भी ईमानदारी है!"))
    setOpen(false)
    setSnarkOpen(true)
  }

  const onConfirmSale = () => {
    if (!selectedId) {
      return
    }
    const snark = SNARK[selectedId]
    setMessage(t(snark.en, snark.hi))
    setOpen(false)
    setSnarkOpen(true)
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <Button
        variant="destructive"
        size="lg"
        className="text-lg font-bold animate-bounce rounded-full px-6 shadow-md hover:shadow-lg"
        onClick={() => setOpen(true)}
      >
        {t("Sell My Vote", "मेरा वोट बेचो")}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-balance">
              {t("😂 The Marketplace of Democracy", "😂 लोकतंत्र का बाज़ार")}
            </DialogTitle>
            <p className="text-muted-foreground mt-2 text-pretty">
              {t(
                "Ever wondered what your vote is really worth to our beloved candidates? Pick your favorite 'deal' from the satirical menu below! (Just kidding: Your vote is priceless.)",
                "क्या आपने कभी सोचा है कि नेताओं के लिए आपका वोट कितने का है? नीचे दिए गए मज़ाकिया ऑफ़र्स में से एक चुनें! (सिर्फ़ मज़ाक — आपका वोट अमूल्य है.)",
              )}
            </p>
          </DialogHeader>

          <Card className="mt-3 p-4">
            <div className="mb-2 text-sm text-muted-foreground">
              {t("Pick one offer", "एक ऑफ़र चुनें")}
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              {OFFERS.map((offer) => {
                const isSelected = selectedId === offer.id
                const label = t(offer.en, offer.hi)
                return (
                  <label key={offer.id} className="cursor-pointer" aria-label={label}>
                    <input
                      type="radio"
                      name="sell-my-vote"
                      value={offer.id}
                      checked={isSelected}
                      onChange={() => setSelectedId(offer.id)}
                      className="peer sr-only"
                    />
                    <div className="flex items-center gap-3 rounded-md border border-border bg-card px-3 py-2 transition-colors hover:bg-muted/50 peer-checked:border-forest-600 peer-checked:bg-forest-600/5">
                      <span className="text-xl" aria-hidden="true">
                        {offer.icon}
                      </span>
                      <span className="text-sm font-medium text-pretty">{label}</span>
                    </div>
                  </label>
                )
              })}
            </div>
          </Card>

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between mt-4">
            <Button variant="outline" onClick={onDoNotSell} className="w-full sm:w-auto">
              {t("Do Not Sell", "मत बेचो")}
            </Button>
            <div className="flex flex-col items-stretch sm:items-end gap-1 w-full sm:w-auto">
              <Button
                variant="destructive"
                onClick={onConfirmSale}
                disabled={!selectedId}
                className="w-full sm:w-auto"
              >
                {t("Confirm Sale", "पक्का करो")}
              </Button>
              {!selectedId && (
                <span className="text-[11px] text-muted-foreground">
                  {t("Select an offer to continue", "आगे बढ़ने के लिए कोई ऑफ़र चुनें")}
                </span>
              )}
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            {t("Satire. Never sell your vote.", "यह व्यंग्य है। कभी भी अपना वोट न बेचें।")}
          </p>
        </DialogContent>
      </Dialog>

      {/* Result/SNARK popup dialog */}
      <Dialog
        open={snarkOpen}
        onOpenChange={(v) => {
          setSnarkOpen(v)
          if (!v) {
            // Reset after closing the result popup
            setMessage("")
            setSelectedId("")
          }
        }}
      >
        <DialogContent className="sm:max-w-lg">
          {/* Close button top-right */}
          <button
            type="button"
            onClick={() => setSnarkOpen(false)}
            className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label={t("Close", "बंद करें")}
          >
            <X className="h-4 w-4" />
          </button>

          <DialogHeader>
            <DialogTitle className="text-center">
              {t("Your Choice, Your Consequence", "आपकी पसंद, उसका परिणाम")}
            </DialogTitle>
          </DialogHeader>

          <div className="mt-2 text-center">
            <p className="text-lg md:text-xl font-extrabold leading-relaxed">
              {message}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
