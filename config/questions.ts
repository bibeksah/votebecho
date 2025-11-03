// Survey questions configuration
// ADMIN NOTE: Edit the 'sentToFastModel' and 'sentToReasoningModel' arrays to control which answers are sent to each AI model

export interface QuestionOption {
  value: string
  label: string
  labelHi?: string // Hindi translation
}

export interface Question {
  id: keyof import("../types/survey").SurveyAnswers
  type: "number" | "dropdown" | "multiselect" | "scale" | "nested" | "text"
  question: string
  questionHi: string // Hindi translation
  placeholder?: string
  placeholderHi?: string
  options?: QuestionOption[]
  min?: number
  max?: number
  validation?: {
    required: boolean
    min?: number
    max?: number
  }
  sentToFastModel: boolean // ADMIN: Set to true to send this answer to GPT-4o for fun facts
  sentToReasoningModel: boolean // ADMIN: Set to true to send this answer to o1 for cost calculation
  hasOtherOption?: boolean // ADMIN: Set to true to show text input when "other" is selected
  otherOptionValue?: string // ADMIN: Value of the "other" option
}

export const SURVEY_QUESTIONS: Question[] = [
  {
    id: "name",
    type: "text",
    question: "What is your name?",
  questionHi: "आपका नाम क्या है?",
    placeholder: "Enter your name",
  placeholderHi: "अपना नाम दर्ज करें",
    validation: { required: true },
    sentToFastModel: false,
    sentToReasoningModel: false,
  },
  {
    id: "age",
    type: "number",
    question: "How old are you?",
  questionHi: "आपकी उम्र क्या है?",
    placeholder: "Enter your age",
  placeholderHi: "अपनी आयु दर्ज करें",
    min: 18,
    max: 100,
    validation: { required: true, min: 18, max: 100 },
    sentToFastModel: true, // ADMIN: Sent to fast model
    sentToReasoningModel: true, // ADMIN: Sent to reasoning model
  },
  {
    id: "householdSize",
    type: "number",
    question: "How many people depend on you financially?",
  questionHi: "आप पर आर्थिक रूप से कितने लोग निर्भर हैं?",
    placeholder: "Number of dependents",
  placeholderHi: "आश्रितों की संख्या",
    min: 0,
    max: 20,
    validation: { required: true, min: 0, max: 20 },
    sentToFastModel: false,
    sentToReasoningModel: true,
  },
  {
    id: "region",
    type: "nested",
    question: "Where do you live?",
    questionHi: "आप कहाँ रहते हैं?",
    options: [
      { value: "andhra-pradesh", label: "Andhra Pradesh", labelHi: "आंध्र प्रदेश" },
      { value: "arunachal-pradesh", label: "Arunachal Pradesh", labelHi: "अरुणाचल प्रदेश" },
      { value: "assam", label: "Assam", labelHi: "असम" },
      { value: "bihar", label: "Bihar", labelHi: "बिहार" },
      { value: "chhattisgarh", label: "Chhattisgarh", labelHi: "छत्तीसगढ़" },
      { value: "goa", label: "Goa", labelHi: "गोवा" },
      { value: "gujarat", label: "Gujarat", labelHi: "गुजरात" },
      { value: "haryana", label: "Haryana", labelHi: "हरियाणा" },
      { value: "himachal-pradesh", label: "Himachal Pradesh", labelHi: "हिमाचल प्रदेश" },
      { value: "jharkhand", label: "Jharkhand", labelHi: "झारखंड" },
      { value: "karnataka", label: "Karnataka", labelHi: "कर्नाटक" },
      { value: "kerala", label: "Kerala", labelHi: "केरल" },
      { value: "madhya-pradesh", label: "Madhya Pradesh", labelHi: "मध्य प्रदेश" },
      { value: "maharashtra", label: "Maharashtra", labelHi: "महाराष्ट्र" },
      { value: "manipur", label: "Manipur", labelHi: "मणिपुर" },
      { value: "meghalaya", label: "Meghalaya", labelHi: "मेघालय" },
      { value: "mizoram", label: "Mizoram", labelHi: "मिज़ोरम" },
      { value: "nagaland", label: "Nagaland", labelHi: "नगालैंड" },
      { value: "odisha", label: "Odisha", labelHi: "ओडिशा" },
      { value: "punjab", label: "Punjab", labelHi: "पंजाब" },
      { value: "rajasthan", label: "Rajasthan", labelHi: "राजस्थान" },
      { value: "sikkim", label: "Sikkim", labelHi: "सिक्किम" },
      { value: "tamil-nadu", label: "Tamil Nadu", labelHi: "तमिलनाडु" },
      { value: "telangana", label: "Telangana", labelHi: "तेलंगाना" },
      { value: "tripura", label: "Tripura", labelHi: "त्रिपुरा" },
      { value: "uttar-pradesh", label: "Uttar Pradesh", labelHi: "उत्तर प्रदेश" },
      { value: "uttarakhand", label: "Uttarakhand", labelHi: "उत्तराखंड" },
      { value: "west-bengal", label: "West Bengal", labelHi: "पश्चिम बंगाल" },
      // Union Territories
      { value: "delhi", label: "Delhi (NCT)", labelHi: "दिल्ली (एनसीटी)" },
      { value: "jammu-kashmir", label: "Jammu & Kashmir (UT)", labelHi: "जम्मू और कश्मीर (केन्द्रीय शासित प्रदेश)" },
      { value: "ladakh", label: "Ladakh (UT)", labelHi: "लद्दाख (केन्द्रीय शासित प्रदेश)" },
      { value: "chandigarh", label: "Chandigarh (UT)", labelHi: "चंडीगढ़ (केन्द्रीय शासित प्रदेश)" },
      { value: "puducherry", label: "Puducherry (UT)", labelHi: "पुडुचेरी (केन्द्रीय शासित प्रदेश)" },
      { value: "andaman-nicobar", label: "Andaman & Nicobar Islands (UT)", labelHi: "अंडमान और निकोबार द्वीपसमूह (के.शा.प्र.)" },
      { value: "dadra-nagar-haveli-daman-diu", label: "Dadra & Nagar Haveli and Daman & Diu (UT)", labelHi: "दादरा और नगर हवेली एवं दमन और दीव (के.शा.प्र.)" },
      { value: "lakshadweep", label: "Lakshadweep (UT)", labelHi: "लक्षद्वीप (के.शा.प्र.)" },
    ],
    validation: { required: true },
    sentToFastModel: true,
    sentToReasoningModel: true,
  },
  {
    id: "occupation",
    type: "dropdown",
    question: "What is your primary occupation?",
    questionHi: "आपका मुख्य व्यवसाय क्या है?",
    options: [
      { value: "student", label: "Student", labelHi: "विद्यार्थी" },
      { value: "farmer", label: "Farmer", labelHi: "किसान" },
      { value: "business", label: "Business Owner", labelHi: "व्यवसायी" },
      { value: "government", label: "Government Employee", labelHi: "सरकारी कर्मचारी" },
      { value: "private", label: "Private Sector", labelHi: "निजी क्षेत्र" },
      { value: "daily-wage", label: "Daily Wage Worker", labelHi: "दैनिक मज़दूरी" },
      { value: "professional", label: "Professional (Doctor, Engineer, etc.)", labelHi: "पेशेवर (डॉक्टर, इंजीनियर आदि)" },
      { value: "unemployed", label: "Unemployed", labelHi: "बेरोजगार" },
      { value: "retired", label: "Retired", labelHi: "सेवानिवृत्त" },
      { value: "other", label: "Other", labelHi: "अन्य" },
    ],
    validation: { required: true },
    hasOtherOption: true,
    otherOptionValue: "other",
    sentToFastModel: true,
    sentToReasoningModel: true,
  },
  {
    id: "incomeRange",
    type: "dropdown",
    question: "What is your approximate monthly income?",
  questionHi: "आपकी अनुमानित मासिक आय कितनी है?",
    options: [
      { value: "0-15000", label: "Rs. 0 - 15,000", labelHi: "रु. ०-१५,०००" },
      { value: "15000-30000", label: "Rs. 15,000 - 30,000", labelHi: "रु. १५,०००-३०,०००" },
      { value: "30000-50000", label: "Rs. 30,000 - 50,000", labelHi: "रु. ३०,०००-५०,०००" },
      { value: "50000-75000", label: "Rs. 50,000 - 75,000", labelHi: "रु. ५०,०००-७५,०००" },
      { value: "75000-100000", label: "Rs. 75,000 - 1,00,000", labelHi: "रु. ७५,०००-१,००,०००" },
      { value: "100000+", label: "Rs. 1,00,000+", labelHi: "रु. १,००,०००+" },
    ],
    validation: { required: true },
    sentToFastModel: true,
    sentToReasoningModel: true,
  },
  {
    id: "recentIssues",
    type: "multiselect",
    question: "Have you faced any of these issues last year due to government inefficiency?",
    questionHi: "क्या आपने पिछले वर्ष सरकारी अक्षमता के कारण इन समस्याओं का सामना किया?",
    options: [
      { value: "accident", label: "Accident/Injury", labelHi: "दुर्घटना/चोट" },
      { value: "company-registration", label: "Delayed company registration", labelHi: "कंपनी पंजीकरण में देरी" },
      { value: "subsidy", label: "Subsidy not received", labelHi: "अनुदान प्राप्त नहीं हुआ" },
      { value: "road-damage", label: "Road damage/Poor infrastructure", labelHi: "सड़क क्षति/खराब बुनियादी ढाँचा" },
      { value: "hospital", label: "Hospital/Medicine shortage", labelHi: "अस्पताल/दवा की कमी" },
      { value: "water", label: "Water shortage", labelHi: "पानी की कमी" },
      { value: "power-cuts", label: "Frequent power cuts", labelHi: "बार-बार बिजली कटौती" },
      { value: "passport", label: "Passport delay", labelHi: "पासपोर्ट में देरी" },
      { value: "other", label: "Other", labelHi: "अन्य" },
    ],
    validation: { required: true },
    hasOtherOption: true,
    otherOptionValue: "other",
    sentToFastModel: false,
    sentToReasoningModel: true,
  },
  {
    id: "educationDependents",
    type: "number",
    question: "How many children or dependents are in school?",
  questionHi: "कितने बच्चे या आश्रित स्कूल में हैं?",
    placeholder: "Number of students",
  placeholderHi: "छात्रों की संख्या",
    min: 0,
    max: 10,
    validation: { required: true, min: 0, max: 10 },
    sentToFastModel: false,
    sentToReasoningModel: true,
  },
  {
    id: "healthcareExpenses",
    type: "nested",
    question: "Did you incur any major medical expenses last year?",
  questionHi: "क्या आपने पिछले वर्ष कोई बड़ा चिकित्सा खर्च किया?",
    validation: { required: true },
    sentToFastModel: false,
    sentToReasoningModel: true,
  },
  {
    id: "dailySpendingImpact",
    type: "scale",
    question: "Did you face higher costs for fuel, electricity, or essentials due to poor governance?",
  questionHi: "क्या आपने खराब शासन के कारण ईंधन, बिजली या आवश्यक वस्तुओं की ऊँची लागत का सामना किया?",
    min: 1,
    max: 5,
    validation: { required: true, min: 1, max: 5 },
    sentToFastModel: false,
    sentToReasoningModel: true,
  },
  {
    id: "votingHistory",
    type: "dropdown",
    question: "Are you a first-time voter or have you voted before?",
    questionHi: "क्या आप प्रथम बार मतदाता हैं या पहले भी मतदान कर चुके हैं?",
    options: [
      { value: "first-time", label: "First-time voter", labelHi: "पहली बार मतदाता" },
      { value: "voted-once", label: "Voted once before", labelHi: "पहले एक बार मतदान किया" },
      { value: "regular", label: "Regular voter (2+ times)", labelHi: "नियमित मतदाता (2+ बार)" },
      { value: "never", label: "Never voted", labelHi: "कभी मतदान नहीं किया" },
    ],
    validation: { required: true },
    sentToFastModel: true,
    sentToReasoningModel: true,
  },
]

// Helper function to get answers for fast model (GPT-4o)
export function getAnswersForFastModel(answers: Partial<import("../types/survey").SurveyAnswers>) {
  const fastModelQuestions = SURVEY_QUESTIONS.filter((q) => q.sentToFastModel)
  const selectedAnswers: Record<string, any> = {}

  fastModelQuestions.forEach((q) => {
    if (answers[q.id] !== undefined) {
      selectedAnswers[q.id] = answers[q.id]
    }
  })

  return selectedAnswers
}

// Helper function to get all answers for reasoning model (o1)
export function getAnswersForReasoningModel(answers: import("../types/survey").SurveyAnswers) {
  return answers // Send all answers to reasoning model
}
