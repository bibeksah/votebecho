"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Info } from "lucide-react"

interface CostBreakdownCardProps {
  categories: Array<{
    name: string
    amount: number
  }>
}

const categoryLabels: Record<string, { en: string; hi: string }> = {
  healthcare: { en: "Healthcare", hi: "स्वास्थ्य सेवा" },
  education: { en: "Education", hi: "शिक्षा" },
  infrastructure: { en: "Infrastructure", hi: "बुनियादी ढांचा" },
  utilities: { en: "Utilities", hi: "उपयोगिताएँ" },
  timeWasted: { en: "Time Wasted", hi: "समय की बर्बादी" },
  opportunityCost: { en: "Opportunity Cost", hi: "अवसर लागत" },
}

export function CostBreakdownCard({ categories }: CostBreakdownCardProps) {
  const { language, t } = useLanguage()

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-NP", {
      style: "currency",
      currency: "NPR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace("NPR", "Rs.")
  }

  return (
    <div className="bg-card rounded-xl border border-border shadow-lg p-6 md:p-8 space-y-6">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-balance flex-1">
          {t("Your Hidden Tax of Bad Governance", "खराब शासन का आपका छिपा कर")}
        </h2>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="flex-shrink-0">
              <Info className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="sr-only">{t("Information", "जानकारी")}</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {t("How We Calculate Your Costs", "हम आपकी लागत कैसे गणना करते हैं")}
              </DialogTitle>
              <DialogDescription className="text-base space-y-4 pt-4">
                <p>
                  {t(
                    "Your cost breakdown is calculated using advanced AI analysis based on your survey responses. We analyze multiple factors including your age, household size, region, occupation, income level, and recent experiences with government services.",
                    "आपकी लागत का विवरण आपके सर्वेक्षण उत्तरों के आधार पर उन्नत एआई विश्लेषण से गणना किया जाता है। हम आपके आयु, परिवार का आकार, क्षेत्र, पेशा, आय स्तर, और सरकारी सेवाओं के साथ हाल के अनुभव सहित कई कारकों का विश्लेषण करते हैं।",
                  )}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">
                    {t("Cost Categories Include:", "लागत श्रेणियाँ शामिल हैं:")}
                  </h4>
                  <ul className="space-y-2 list-disc list-inside text-sm">
                    <li>
                      <strong>{t("Healthcare", "स्वास्थ्य सेवा")}:</strong>{" "}
                      {t(
                        "Costs from delayed treatments, medicine shortages, and inadequate healthcare infrastructure",
                        "देरी से उपचार, दवाओं की कमी और अपर्याप्त स्वास्थ्य बुनियादी ढांचे से होने वाली लागत",
                      )}
                    </li>
                    <li>
                      <strong>{t("Education", "शिक्षा")}:</strong>{" "}
                      {t(
                        "Extra expenses for private tutoring and materials due to poor public school quality",
                        "सार्वजनिक स्कूलों की खराब गुणवत्ता के कारण निजी ट्यूशन और सामग्री पर अतिरिक्त खर्च",
                      )}
                    </li>
                    <li>
                      <strong>{t("Infrastructure", "बुनियादी ढांचा")}:</strong>{" "}
                      {t(
                        "Vehicle damage and increased fuel consumption from poor road conditions",
                        "खराब सड़कों के कारण वाहन क्षति और ईंधन की अधिक खपत",
                      )}
                    </li>
                    <li>
                      <strong>{t("Utilities", "उपयोगिताएँ")}:</strong>{" "}
                      {t(
                        "Additional costs from power cuts, water shortages, and unreliable services",
                        "बिजली कटौती, पानी की कमी और अविश्वसनीय सेवाओं से होने वाला अतिरिक्त खर्च",
                      )}
                    </li>
                    <li>
                      <strong>{t("Administrative Delays", "प्रशासनिक देरी")}:</strong>{" "}
                      {t(
                        "Time and money lost in bureaucratic processes like passport delays and business registration",
                        "पासपोर्ट में देरी और व्यवसाय पंजीकरण जैसी नौकरशाही प्रक्रियाओं में समय और धन की हानि",
                      )}
                    </li>
                    <li>
                      <strong>{t("Opportunity Cost", "अवसर लागत")}:</strong>{" "}
                      {t(
                        "Lost income from time wasted dealing with inefficiencies",
                        "अकुशलता से निपटने में समय बर्बाद होने से होने वाली आय का नुकसान",
                      )}
                    </li>
                  </ul>
                </div>

                <p className="text-sm italic">
                  {t(
                    "These calculations are estimates based on documented inefficiencies and your specific circumstances. Actual costs may vary.",
                    "ये गणनाएँ प्रलेखित अकुशलताओं और आपकी विशिष्ट परिस्थितियों पर आधारित अनुमान हैं। वास्तविक लागत भिन्न हो सकती है।",
                  )}
                </p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        {categories.map((category, index) => {
          const label = categoryLabels[category.name]
          const displayName = label ? (language === "hi" ? label.hi : label.en) : category.name

          return (
            <div
              key={category.name}
              className="flex items-center justify-between py-4 border-b border-border last:border-0 animate-bloom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-base md:text-lg font-medium text-foreground/90">{displayName}:</span>
              <span className="text-lg md:text-xl font-bold text-terracotta-600 devanagari-numerals">
                {formatAmount(category.amount)} {t("only", "मात्र")}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
