"use client"

import { useLanguage } from "@/lib/language-context"
import { EvaluationSection } from "@/components/evaluate/evaluation-section"
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft, FileText } from "lucide-react"
import Link from "next/link"
import { ClipboardCheck, Target, Shield, DollarSign, Users } from "lucide-react"
import { useEffect } from "react"

export default function EvaluatePage() {
  const { language, t } = useLanguage()

  useEffect(() => {
    localStorage.setItem("hasVisitedEvaluate", "true")
  }, [])

  const evaluationSections = [
    {
      title: "Check Their Track Record",
      titleHi: "उनका ट्रैक रिकॉर्ड की जाँच करें",
      description: "Past performance is the best indicator of future results",
      descriptionHi: "भविष्य के परिणामों का सबसे अच्छा संकेतक पिछला प्रदर्शन है",
      icon: <ClipboardCheck className="w-6 h-6" />,
      items: [
        {
          id: "track-1",
          text: "Review their past performance in previous roles or positions",
          textHi: "पिछले पदों/भूमिकाओं में उनके प्रदर्शन की समीक्षा करें",
        },
        {
          id: "track-2",
          text: "Compare promises made versus promises delivered",
          textHi: "किए गए वादों बनाम निभाए गए वादों की तुलना करें",
        },
        {
          id: "track-3",
          text: "Check their attendance and participation records in meetings",
          textHi: "बैठकों में उनकी उपस्थिति और सहभागिता रिकॉर्ड जाँचें",
        },
        {
          id: "track-4",
          text: "Look for concrete achievements and measurable outcomes",
          textHi: "ठोस उपलब्धियाँ और मापने योग्य परिणाम तलाशें",
        },
      ],
    },
    {
      title: "Evaluate Their Platform",
      titleHi: "उनके प्लैटफ़ॉर्म/एजेंडा का मूल्यांकन करें",
      description: "Distinguish between vague promises and actionable plans",
      descriptionHi: "अस्पष्ट वादों और लागू होने वाली योजनाओं में अंतर करें",
      icon: <Target className="w-6 h-6" />,
      items: [
        {
          id: "platform-1",
          text: "Look for specific, measurable goals instead of vague promises",
          textHi: "अस्पष्ट वादों की जगह विशिष्ट, मापने योग्य लक्ष्य देखें",
        },
        {
          id: "platform-2",
          text: "Ask about budget allocation and implementation timelines",
          textHi: "बजट आवंटन और कार्यान्वयन समय-सीमा के बारे में पूछें",
        },
        {
          id: "platform-3",
          text: "Assess relevance to your community's actual needs",
          textHi: "आपके समुदाय की वास्तविक जरूरतों से मेल का आकलन करें",
        },
        {
          id: "platform-4",
          text: "Check if their plans are realistic and achievable",
          textHi: "देखें कि उनकी योजनाएँ वास्तविक और हासिल करने योग्य हैं या नहीं",
        },
      ],
    },
    {
      title: "Assess Their Integrity",
      titleHi: "उनकी ईमानदारी/नैतिकता का आकलन करें",
      description: "Character matters as much as competence",
      descriptionHi: "चरित्र उतना ही महत्वपूर्ण है जितनी क्षमता",
      icon: <Shield className="w-6 h-6" />,
      items: [
        {
          id: "integrity-1",
          text: "Review their financial transparency and asset declarations",
          textHi: "उनकी वित्तीय पारदर्शिता और संपत्ति घोषणाओं की समीक्षा करें",
        },
        {
          id: "integrity-2",
          text: "Check for any criminal records or pending court cases",
          textHi: "किसी आपराधिक रिकॉर्ड या लंबित अदालती मामलों की जाँच करें",
        },
        {
          id: "integrity-3",
          text: "Look for potential conflicts of interest",
          textHi: "हितों के संभावित टकराव की तलाश करें",
        },
        {
          id: "integrity-4",
          text: "Research their reputation in the community",
          textHi: "समुदाय में उनकी साख/प्रतिष्ठा के बारे में जानकारी लें",
        },
      ],
    },
    {
      title: "Question Their Funding",
      titleHi: "उनके फंडिंग स्रोतों पर सवाल करें",
      description: "Follow the money to understand their loyalties",
      descriptionHi: "वफादारियाँ समझने के लिए पैसे का पीछा करें",
      icon: <DollarSign className="w-6 h-6" />,
      items: [
        {
          id: "funding-1",
          text: "Find out who is financing their campaign",
          textHi: "पता करें कि उनके अभियान को कौन फंड कर रहा है",
        },
        {
          id: "funding-2",
          text: "Look for corporate or special interest connections",
          textHi: "कॉरपोरेट या विशेष हित संबंध देखें",
        },
        {
          id: "funding-3",
          text: "Review their declaration of campaign expenses",
          textHi: "अभियान खर्च की उनकी घोषणाओं की समीक्षा करें",
        },
        {
          id: "funding-4",
          text: "Understand if funding sources align with public interest",
          textHi: "समझें कि क्या फंडिंग के स्रोत सार्वजनिक हित से मेल खाते हैं",
        },
      ],
    },
    {
      title: "Measure Their Accessibility",
      titleHi: "उनकी उपलब्धता/पहुँच को मापें",
      description: "A representative should be available to those they represent",
      descriptionHi: "एक प्रतिनिधि अपने मतदाताओं के लिए उपलब्ध होना चाहिए",
      icon: <Users className="w-6 h-6" />,
      items: [
        {
          id: "access-1",
          text: "Check if they hold regular public meetings",
          textHi: "देखें क्या वे नियमित सार्वजनिक बैठकें करते हैं",
        },
        {
          id: "access-2",
          text: "Review their responsiveness to constituent concerns",
          textHi: "मतदाताओं की चिंताओं पर उनकी प्रतिक्रिया का आकलन करें",
        },
        {
          id: "access-3",
          text: "Assess their presence in the community (not just during elections)",
          textHi: "समुदाय में उनकी उपस्थिति (सिर्फ चुनाव के समय नहीं) देखें",
        },
        {
          id: "access-4",
          text: "Look for multiple channels of communication (phone, email, social media)",
          textHi: "संचार के कई माध्यम (फोन, ईमेल, सोशल मीडिया) देखें",
        },
      ],
    },
  ]

  const handleDownloadTemplate = () => {
    // Create a simple CSV template for candidate comparison
    const csvContent = `Candidate Name,Track Record Score (1-10),Platform Score (1-10),Integrity Score (1-10),Funding Transparency (1-10),Accessibility Score (1-10),Total Score,Notes
Candidate 1,,,,,,,
Candidate 2,,,,,,,
Candidate 3,,,,,,,
`

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", "candidate-comparison-template.csv")
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen pattern-dhaka py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-bloom">
          <h1 className="text-3xl md:text-5xl font-bold text-balance bg-gradient-to-r from-terracotta-600 via-ochre-600 to-forest-700 bg-clip-text text-transparent">
            {t("Don't Just Vote—Vote Smart", "सिर्फ वोट न दें—समझदारी से वोट दें")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t(
              "Use this comprehensive guide to evaluate candidates and make informed decisions that will impact your community for years to come.",
              "उम्मीदवारों का मूल्यांकन करने और आने वाले वर्षों तक आपके समुदाय को प्रभावित करने वाले सूचित निर्णय लेने के लिए इस व्यापक मार्गदर्शिका का उपयोग करें।",
            )}
          </p>
        </div>

        {/* Evaluation Sections */}
        <div className="space-y-6">
          {evaluationSections.map((section, index) => (
            <div key={section.title} className="animate-bloom" style={{ animationDelay: `${index * 100}ms` }}>
              <EvaluationSection {...section} language={language} />
            </div>
          ))}
        </div>

        {/* Download Template */}
        <div className="bg-gradient-to-br from-ochre-50 to-cream-100 rounded-xl border border-ochre-200 shadow-md p-6 md:p-8 text-center space-y-4">
          <FileText className="w-12 h-12 text-ochre-600 mx-auto" />
          <h3 className="text-xl md:text-2xl font-bold">
            {t("Compare Candidates Side-by-Side", "उम्मीदवारों की तुलना साथ-साथ करें")}
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t(
              "Download our comparison template to score and compare multiple candidates across all evaluation criteria.",
              "सभी मूल्यांकन मानदंडों पर कई उम्मीदवारों को स्कोर और तुलना करने के लिए हमारा तुलना टेम्पलेट डाउनलोड करें।",
            )}
          </p>
          <Button onClick={handleDownloadTemplate} size="lg" className="h-12 px-8 text-base">
            <Download className="mr-2 h-5 w-5" />
            {t("Download Comparison Template", "तुलना टेम्पलेट डाउनलोड करें")}
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link href="/results">
            <Button variant="outline" className="h-12 px-6 bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("Back to Results", "परिणाम पर वापस जाएँ")}
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="h-12 px-6 bg-transparent">
              {t("Back to Home", "मुखपृष्ठ पर वापस जाएँ")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
