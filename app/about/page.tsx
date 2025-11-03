"use client"

import { useLanguage } from "@/lib/language-context"
import { Card } from "@/components/ui/card"
import { Calculator, Database, TrendingUp, Target, Eye, Heart } from "lucide-react"

export default function AboutPage() {
  const { t } = useLanguage()

  const sections = [
    {
      icon: <Eye className="w-8 h-8 text-terracotta-600" />,
      title: t("Our Vision", "हमारा दृष्टिकोण"),
      content: t(
        "We envision a Nepal where every citizen understands the true cost of governance and makes informed voting decisions. By quantifying the impact of bad governance on individual lives, we aim to create a more accountable and transparent political system.",
        "हम एक ऐसे नेपाल की कल्पना करते हैं जहाँ हर नागरिक शासन की वास्तविक लागत को समझे और सूचित मतदान निर्णय ले। व्यक्तिगत जीवन पर खराब शासन के असर को परिमाणित करके, हमारा लक्ष्य एक अधिक जवाबदेह और पारदर्शी राजनीतिक व्यवस्था बनाना है।",
      ),
    },
    {
      icon: <Target className="w-8 h-8 text-ochre-600" />,
      title: t("Our Mission", "हमारा मिशन"),
      content: t(
        "Our mission is to empower Nepali citizens with data-driven insights about governance costs. We provide tools to calculate personal losses due to inefficiency, educate voters on candidate evaluation, and foster a culture of accountability in politics.",
        "हमारा मिशन नेपाली नागरिकों को शासन लागत के बारे में डेटा-आधारित समझ के साथ सशक्त बनाना है। हम अकुशलता के कारण होने वाले व्यक्तिगत नुकसान की गणना के उपकरण प्रदान करते हैं, मतदाताओं को उम्मीदवार मूल्यांकन के बारे में शिक्षित करते हैं, और राजनीति में जवाबदेही की संस्कृति को बढ़ावा देते हैं।",
      ),
    },
  ]

  const methodology = [
    {
      icon: <Database className="w-6 h-6 text-forest-600" />,
      title: t("Data Collection", "डेटा संग्रह"),
      description: t(
        "We collect data through a comprehensive 10-question survey covering age, household size, region, occupation, income, recent issues, education dependents, healthcare expenses, daily spending impact, and voting history.",
        "हम 10 प्रश्नों वाले एक व्यापक सर्वेक्षण के माध्यम से डेटा एकत्र करते हैं, जिसमें आयु, परिवार का आकार, क्षेत्र, पेशा, आय, हाल की समस्याएँ, शिक्षा आश्रित, स्वास्थ्य खर्च, दैनिक खर्च का प्रभाव और मतदान इतिहास शामिल हैं।",
      ),
    },
    {
      icon: <Calculator className="w-6 h-6 text-forest-600" />,
      title: t("AI-Powered Analysis", "एआई-संचालित विश्लेषण"),
      description: t(
        "Your responses are analyzed by advanced AI models (Azure OpenAI Assistants) that calculate governance costs across multiple categories: healthcare delays, education expenses, infrastructure damage, utility inefficiencies, administrative delays, and lost opportunities.",
        "आपके उत्तरों का विश्लेषण उन्नत एआई मॉडल (Azure OpenAI Assistants) द्वारा किया जाता है, जो कई श्रेणियों में शासन लागत की गणना करते हैं: स्वास्थ्य में देरी, शिक्षा खर्च, बुनियादी ढांचे की क्षति, उपयोगिता की अकुशलता, प्रशासनिक देरी और खोए हुए अवसर।",
      ),
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-forest-600" />,
      title: t("Cost Calculation", "लागत गणना"),
      description: t(
        "We calculate costs based on documented inefficiencies: hospital wait times, delayed services, infrastructure damage, power cuts, water shortages, passport delays, and opportunity costs from time wasted. Each category is weighted according to your specific circumstances.",
        "हम लागत की गणना दस्तावेज़ित अकुशलताओं के आधार पर करते हैं: अस्पताल प्रतीक्षा समय, सेवाओं में देरी, बुनियादी ढांचे की क्षति, बिजली कटौती, पानी की कमी, पासपोर्ट में देरी और समय बर्बाद होने से अवसर लागत। हर श्रेणी का वज़न आपकी विशिष्ट परिस्थितियों के अनुसार किया जाता है।",
      ),
    },
  ]

  const categories = [
    {
      name: t("Healthcare", "स्वास्थ्य सेवा"),
      description: t(
        "Costs from delayed treatments, medicine shortages, and additional expenses due to inadequate healthcare infrastructure.",
        "देरी से इलाज, दवाओं की कमी और अपर्याप्त स्वास्थ्य बुनियादी ढांचे के कारण होने वाले अतिरिक्त खर्च।",
      ),
    },
    {
      name: t("Education", "शिक्षा"),
      description: t(
        "Extra costs for private tutoring, materials, and alternative education due to poor public school quality and resources.",
        "सार्वजनिक स्कूलों की खराब गुणवत्ता और संसाधनों के कारण निजी ट्यूशन, सामग्री और वैकल्पिक शिक्षा पर अतिरिक्त खर्च।",
      ),
    },
    {
      name: t("Infrastructure", "बुनियादी ढांचा"),
      description: t(
        "Vehicle damage, increased fuel consumption, and time lost due to poor road conditions and infrastructure maintenance.",
        "खराब सड़कों और बुनियादी ढांचे के रखरखाव की कमी के कारण वाहन क्षति, अधिक ईंधन खपत और समय की हानि।",
      ),
    },
    {
      name: t("Utilities", "उपयोगिताएँ"),
      description: t(
        "Additional expenses from power cuts (generators, inverters), water shortages (tanker purchases), and unreliable utility services.",
        "बिजली कटौती (जनरेटर, इन्वर्टर), पानी की कमी (टैंकर खरीद) और अविश्वसनीय उपयोगिता सेवाओं से होने वाला अतिरिक्त खर्च।",
      ),
    },
    {
      name: t("Administrative Delays", "प्रशासनिक देरी"),
      description: t(
        "Time and money lost in bureaucratic processes: passport delays, business registration, subsidy applications, and document processing.",
        "नौकरशाही प्रक्रियाओं में समय और धन की हानि: पासपोर्ट में देरी, व्यवसाय पंजीकरण, सब्सिडी आवेदन और दस्तावेज़ प्रसंस्करण।",
      ),
    },
    {
      name: t("Opportunity Cost", "अवसर लागत"),
      description: t(
        "Lost income and opportunities due to time wasted in queues, dealing with inefficiencies, and navigating broken systems.",
        "क़तारों में समय बर्बाद होने, अकुशलताओं से जूझने और टूटी प्रणालियों में भटकने के कारण खोई हुई आय और अवसर।",
      ),
    },
  ]

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 pattern-terraced">
      <div className="container mx-auto max-w-5xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-balance">
            {t("About Sell My Vote", "Sell My Vote के बारे में")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t(
              "Understanding the true cost of governance and empowering informed voting decisions",
              "शासन की वास्तविक लागत को समझना और सूचित मतदान निर्णयों को सशक्त बनाना",
            )}
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="p-6 space-y-4 hover:shadow-xl transition-shadow animate-bloom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3">
                {section.icon}
                <h2 className="text-2xl font-bold">{section.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("How We Calculate Your Costs", "हम आपकी लागत कैसे गणना करते हैं")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t(
                "Our methodology combines data science with real-world impact",
                "हमारी कार्यप्रणाली डेटा विज्ञान को वास्तविक दुनिया के प्रभाव से जोड़ती है",
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {methodology.map((method, index) => (
              <Card
                key={index}
                className="p-6 space-y-3 hover:shadow-xl transition-shadow animate-bloom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-2">
                  {method.icon}
                  <h3 className="text-xl font-semibold">{method.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{method.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Cost Categories */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">{t("What We Measure", "हम क्या मापते हैं")}</h2>
            <p className="text-muted-foreground text-lg">
              {t("Six key categories of governance impact on your life", "आपके जीवन पर शासन के प्रभाव की छह प्रमुख श्रेणियाँ")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="p-5 space-y-2 hover:shadow-lg transition-shadow animate-bloom"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-lg font-semibold text-terracotta-600">{category.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Transparency Note */}
        <Card className="p-8 bg-gradient-to-br from-terracotta-50 to-ochre-50 border-terracotta-200">
          <div className="flex items-start gap-4">
            <Heart className="w-8 h-8 text-terracotta-600 flex-shrink-0 mt-1" />
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-terracotta-900">
                {t("Our Commitment to Transparency", "पारदर्शिता के प्रति हमारी प्रतिबद्धता")}
              </h3>
              <p className="text-terracotta-800 leading-relaxed">
                {t(
                  "We believe in complete transparency. Our calculations are based on documented inefficiencies, publicly available data, and AI analysis. We don't manipulate numbers or push political agendas. Our goal is simple: help you understand what bad governance actually costs you, so you can make informed decisions at the ballot box.",
                  "हम पूर्ण पारदर्शिता में विश्वास करते हैं। हमारी गणनाएँ प्रलेखित अकुशलताओं, सार्वजनिक रूप से उपलब्ध डेटा और एआई विश्लेषण पर आधारित हैं। हम संख्याओं में हेरफेर नहीं करते और न ही राजनीतिक एजेंडा थोपते हैं। हमारा उद्देश्य सरल है: आपको यह समझने में मदद करना कि खराब शासन वास्तव में आपको कितना खर्च करवाता है ताकि आप मतदान करते समय सूचित निर्णय ले सकें।",
                )}
              </p>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center space-y-4 py-8">
          <h3 className="text-2xl font-bold">
            {t("Ready to Know Your Vote's Worth?", "क्या आप अपने वोट की कीमत जानने के लिए तैयार हैं?")}
          </h3>
          <p className="text-muted-foreground">
            {t(
              "Calculate your governance cost and join thousands of informed citizens",
              "अपनी शासन लागत की गणना करें और हज़ारों सूचित नागरिकों से जुड़ें",
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
