export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  isQuick: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "graphic-design",
    number: "01",
    title: "التصميم الجرافيكي",
    shortDescription: "ابتكار تصاميم بصرية مميزة تعكس هوية علاماتك التجارية وتلفت الأنظار.",
    fullDescription: "نبتكر تصاميم جرافيكية متكاملة تبدأ من الهوية البصرية وحتى المطبوعات والمواد التسويقية الرقمية بأسلوب عصري واحترافي يضمن إبراز قيم براندك.",
    iconName: "Palette",
    isQuick: true
  },
  {
    id: "photography-production",
    number: "02",
    title: "التصوير والإنتاج",
    shortDescription: "إنتاج مرئي وسينمائي احترافي يروي قصة منتجاتك وخدماتك بأعلى جودة.",
    fullDescription: "معدات تصوير واستوديو متكامل لإخراج مقاطع فيديو سينمائية، إعلانات ترويجية، وتصوير منتجات عالي الدقة يبرز جمالية براندك.",
    iconName: "Camera",
    isQuick: true
  },
  {
    id: "content-creation",
    number: "03",
    title: "صناعة المحتوى",
    shortDescription: "كتابة نصوص وصناعة محتوى إبداعي يربط براندك بجمهورك بفعالية.",
    fullDescription: "صياغة سيناريوهات جذابة، كتابة المحتوى التسويقي لمنصات التواصل، وصناعة ريلز وفيديوهات قصيرة تحقق أعلى نسب التفاعل.",
    iconName: "PenTool",
    isQuick: true
  },
  {
    id: "social-media-management",
    number: "04",
    title: "إدارة حسابات التواصل الاجتماعي",
    shortDescription: "تخطيط ونشر وإدارة يومية احترافية تتفاعل مع متابعيك وتزيد وصولك.",
    fullDescription: "إدارة شاملة لحسابات انستغرام، تيك توك، اكس، ولينكدإن، تشمل جدولة المنشورات، التفاعل مع الجمهور، وتحليل الآداء المستمر.",
    iconName: "Share2",
    isQuick: true
  },
  {
    id: "ad-campaigns",
    number: "05",
    title: "إدارة الحملات الإعلانية",
    shortDescription: "حملات مدفوعة استراتيجية تستهدف عملائك المحتملين بدقة وتزيد مبيعاتك.",
    fullDescription: "تخطيط وتنفيذ حملات الإعلانات المدفوعة على مختلف المنصات الرقمية واستهداف الجمهور المناسب للوصول لأعلى عائد على الاستثمار.",
    iconName: "TrendingUp",
    isQuick: true
  },
  {
    id: "sponsored-promotion",
    number: "06",
    title: "ترويج ممول",
    shortDescription: "استراتيجيات ترويج ممول مبنية على تحليلات دقيقة لضمان انتشار أسرع.",
    fullDescription: "تحسين حملات الترويج الممول بأساليب مبتكرة تعتمد على التحليل اللحظي للبيانات لضمان أقصى كفاءة للميزانية التسويقية.",
    iconName: "Target",
    isQuick: false
  },
  {
    id: "brand-identity",
    number: "07",
    title: "الهوية البصرية",
    shortDescription: "بناء وتطوير هويات بصرية متكاملة وشاملة تميز علاماتكم التجارية.",
    fullDescription: "تطوير دليل الهوية البصرية الكامل، من الشعار، الألوان، الخطوط، وأسلوب التقديم الذي يرسخ الصورة الذهنية لدى العملاء.",
    iconName: "Sparkles",
    isQuick: false
  },
  {
    id: "event-organization",
    number: "08",
    title: "تنظيم الفعاليات",
    shortDescription: "تغطية وتنظيم الفعاليات والمعارض التجارية بتغطيات إعلامية استثنائية.",
    fullDescription: "تنسيق وإدارة التغطيات الإعلامية للمؤتمرات، المعارض، وإطلاق المنتجات بتغطيات مرئية مباشرة ومحتوى احترافي.",
    iconName: "Award",
    isQuick: false
  }
];
