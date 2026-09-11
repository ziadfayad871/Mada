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
    id: "digital-marketing",
    number: "01",
    title: "التسويق الرقمي",
    shortDescription: "استراتيجيات تسويقية متكاملة تحقق النمو والانتشار المستدام لعلامتك التجارية.",
    fullDescription: "نبتكر حملات تسويقية ذكية تعتمد على أحدث الأساليب والتقنيات لتحقيق أقصى عائد على الاستثمار والوصول للجمهور المستهدف بدقة.",
    iconName: "TrendingUp",
    isQuick: true
  },
  {
    id: "social-media",
    number: "02",
    title: "إدارة السوشيال ميديا",
    shortDescription: "إدارة احترافية لحسابات التواصل الاجتماعي تزيد التفاعل والوصول.",
    fullDescription: "إدارة شاملة لجميع حساباتك على منصات التواصل الاجتماعي تشمل التخطيط والنشر والتفاعل وتحليل الأداء المستمر.",
    iconName: "Share2",
    isQuick: true
  },
  {
    id: "creative-design",
    number: "03",
    title: "التصميم الإبداعي",
    shortDescription: "ابتكار تصاميم بصرية مميزة تعكس هوية علامتك التجارية.",
    fullDescription: "نبتكر تصاميم إبداعية متكاملة من الهوية البصرية إلى المواد التسويقية الرقمية بأسلوب عصري يضمن إبراز قيم براندك.",
    iconName: "Palette",
    isQuick: true
  },
  {
    id: "video-production",
    number: "04",
    title: "إنتاج الفيديوهات",
    shortDescription: "إنتاج مرئي وسينمائي احترافي يروي قصة منتجاتك بأعلى جودة.",
    fullDescription: "معدات تصوير واستوديو متكامل لإخراج مقاطع فيديو سينمائية، إعلانات ترويجية، وتصوير منتجات عالي الدقة.",
    iconName: "Clapperboard",
    isQuick: true
  },
  {
    id: "photography",
    number: "05",
    title: "تصوير فوتوغرافي",
    shortDescription: "تصوير احترافي للمنتجات والفعاليات وال אמנات البصرية.",
    fullDescription: "جلسات تصوير احترافية للمنتجات والفعاليات والمطاعم والقطع الفنية بصور عالية الجودة تعكس جمالية براندك.",
    iconName: "Camera",
    isQuick: true
  },
  {
    id: "content-creation",
    number: "06",
    title: "صناعة المحتوى",
    shortDescription: "كتابة نصوص وصناعة محتوى إبداعي يربط براندك بجمهورك.",
    fullDescription: "صياغة سيناريوهات جذابة، كتابة المحتوى التسويقي، وصناعة ريلز وفيديوهات قصيرة تحقق أعلى نسب التفاعل.",
    iconName: "Lightbulb",
    isQuick: true
  },
  {
    id: "web-development",
    number: "07",
    title: "تطوير المواقع الإلكترونية",
    shortDescription: "تصميم وتطوير مواقع إلكترونية احترافية تعكس هوية علامتك.",
    fullDescription: "تطوير مواقع إلكترونية عصرية وسريعة الاستجابة تقدم تجربة مستخدم مميزة وتعزز حضورك الرقمي.",
    iconName: "PenTool",
    isQuick: false
  },
  {
    id: "paid-ads",
    number: "08",
    title: "إعلانات ممولة",
    shortDescription: "حملات إعلانية مدفوعة استراتيجية تستهدف عملائك بدقة.",
    fullDescription: "تخطيط وتنفيذ حملات الإعلانات المدفوعة على مختلف المنصات لتحقيق أقصى عائد على الاستثمار.",
    iconName: "Target",
    isQuick: false
  },
  {
    id: "marketing-consulting",
    number: "09",
    title: "الاستشارات التسويقية",
    shortDescription: "استشارات تسويقية متخصصة لبناء استراتيجيات فعالة.",
    fullDescription: "نقدم استشارات تسويقية شاملة تشمل تحليل السوق والمنافسين وبناء استراتيجيات تسويقية فعالة تحقق أهدافك.",
    iconName: "Award",
    isQuick: false
  }
];
