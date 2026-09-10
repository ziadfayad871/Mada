export interface Brand {
  id: string;
  slug: string;
  name: string;
  englishName?: string;
  tagline: string;
  description: string;
  logo: string; // SVG or image path
  coverImage: string;
  tags: string[];
  stats: {
    videosCount: number;
    campaignsCount: number;
    reach?: string;
  };
}

export const BRANDS: Brand[] = [
  {
    id: "sultan-al-faisal",
    slug: "sultan-al-faisal",
    name: "سلطان الفيصل",
    englishName: "SULTAN ALFASIL",
    tagline: "الفخامة والضيافة الأصيلة",
    description: "علامة تجارية سعودية متخصصة في الفخامة والضيافة، تقدم تجربة استثنائية تعكس التراث والحداثة في كل تفصيلة. من خلال حملاتنا، استعرضنا هوية العلامة بأسلوب عصري أنيق يبرز قيمها الفريدة ويوصل رسالتها للجمهور المستهدف.",
    logo: "/assets/brands/sultan-al-faisal.svg",
    coverImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    tags: ["تصميم الهوية البصرية", "إنتاج فيديوهات", "إدارة السوشيال ميديا", "تصوير فوتوغرافي"],
    stats: {
      videosCount: 8,
      campaignsCount: 5,
      reach: "+4.2M"
    }
  },
  {
    id: "hermatech",
    slug: "hermatech",
    name: "hermatech",
    englishName: "Hermatech",
    tagline: "تقنية تصنع المستقبل",
    description: "خطة تسويقية متكاملة قدمت من خلالها رؤية العلامة واستعراض الحلول البرمجية والتقنية المبتكرة التي تقدمها للجمهور المستهدف عبر مقاطع سينمائية عالية الجودة وصناعة محتوى مؤثّر.",
    logo: "/assets/brands/hermatech.svg",
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    tags: ["تصميم الهوية البصرية", "إنتاج فيديوهات", "إدارة السوشيال ميديا"],
    stats: {
      videosCount: 5,
      campaignsCount: 3,
      reach: "+2.8M"
    }
  },
  {
    id: "to-fitness",
    slug: "to-fitness",
    name: "TO FITNESS",
    englishName: "TO FITNESS",
    tagline: "صحة · لياقة · حياة أفضل",
    description: "حملة متكاملة تهدف إلى تعزيز العلامة التجارية وتوصيل رسالتها للجمهور المستهدف بطريقة ملهمة وعصرية، تشجع على نمط الحياة الصحي والرياضي المميز.",
    logo: "/assets/brands/to-fitness.svg",
    coverImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    tags: ["تصميم الفيديوهات", "إدارة السوشيال ميديا", "تصميم الهوية"],
    stats: {
      videosCount: 4,
      campaignsCount: 3,
      reach: "+3.5M"
    }
  },
  {
    id: "leesanto",
    slug: "leesanto",
    name: "LEESANTO",
    englishName: "LEESANTO",
    tagline: "الأناقة والتميز العاطري",
    description: "تصميم هوية بصرية وإنتاج محتوى مرئي يعكس الفخامة والجودة العالية للمنتجات العطرية، مع إبراز أدق التفاصيل من خلال تصوير منتجات باحترافية عالية.",
    logo: "/assets/brands/leesanto.svg",
    coverImage: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
    tags: ["الهوية البصرية", "صناعة المحتوى", "تصوير المنتجات"],
    stats: {
      videosCount: 4,
      campaignsCount: 2,
      reach: "+1.9M"
    }
  },
  {
    id: "lulu-glass",
    slug: "lulu-glass",
    name: "Lulu Glass",
    englishName: "Lulu Glass",
    tagline: "الفخامة والشفافية",
    description: "إبراز جمال وتفاصيل المنتجات العطرية والزجاجية الفاخرة من خلال تصوير سينمائي ومحتوى إعلاني مبتكر وحملات ممولة ذات عائد عالٍ.",
    logo: "/assets/brands/lulu-glass.svg",
    coverImage: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80",
    tags: ["تصوير سينمائي", "إعلانات ممولة", "إدارة الحملات"],
    stats: {
      videosCount: 3,
      campaignsCount: 2,
      reach: "+2.1M"
    }
  },
  {
    id: "acme",
    slug: "acme",
    name: "ACME Studio",
    englishName: "ACME Studio",
    tagline: "ابتكار وحلول إبداعية",
    description: "استراتيجية تسويق وهوية بصرية متكاملة للعلامات التجارية الواعدة.",
    logo: "/assets/brands/acme.svg",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    tags: ["الهوية البصرية", "صناعة المحتوى"],
    stats: { videosCount: 2, campaignsCount: 1 }
  },
  {
    id: "urban-look",
    slug: "urban-look",
    name: "UrbanLook",
    englishName: "UrbanLook",
    tagline: "الموضة والأزياء العصرية",
    description: "حملات تصويرية وفيديوهات ترويجية لمجموعات الأزياء الموسمية.",
    logo: "/assets/brands/urban-look.svg",
    coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    tags: ["تصوير فوتوغرافي", "إدارة السوشيال ميديا"],
    stats: { videosCount: 3, campaignsCount: 2 }
  },
  {
    id: "skyline",
    slug: "skyline",
    name: "Skyline",
    englishName: "Skyline Development",
    tagline: "التطوير العقاري الفاخر",
    description: "إنتاج فيديوهات تعريفية وجولات افتراضية سينمائية للمشاريع العقارية.",
    logo: "/assets/brands/skyline.svg",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    tags: ["إنتاج فيديوهات", "تصوير سينمائي"],
    stats: { videosCount: 4, campaignsCount: 2 }
  },
  {
    id: "nexa",
    slug: "nexa",
    name: "NEXA Tech",
    englishName: "NEXA Tech",
    tagline: "الابتكار الرقمي",
    description: "حملات إعلانية وتصميم محتوى رقمي متطور للحلول التقنية.",
    logo: "/assets/brands/nexa.svg",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    tags: ["إعلانات ممولة", "صناعة المحتوى"],
    stats: { videosCount: 2, campaignsCount: 1 }
  }
];
