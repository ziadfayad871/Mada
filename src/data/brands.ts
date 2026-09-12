export interface Brand {
  id: string;
  slug: string;
  name: string;
  englishName?: string;
  tagline: string;
  description: string;
  logo: string;
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
    id: "sultan-al-asal",
    slug: "sultan-al-asal",
    name: "سلطان العسل",
    englishName: "SULTAN AL ASAL",
    tagline: "الفخامة والضيافة الأصيلة",
    description: "علامة تجارية سعودية متخصصة في الفخامة والضيافة، تقدم تجربة استثنائية تعكس التراث والحداثة في كل تفصيلة.",
    logo: "/assets/brands/sultan-al-asal.svg",
    coverImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    tags: ["تصميم الهوية البصرية", "إنتاج فيديوهات", "إدارة السوشيال ميديا", "تصوير فوتوغرافي"],
    stats: { videosCount: 8, campaignsCount: 5, reach: "+4.2M" }
  },
  {
    id: "hermatech",
    slug: "hermatech",
    name: "همتك",
    englishName: "HEMATECH",
    tagline: "تقنية تصنع المستقبل",
    description: "خطة تسويقية متكاملة قدمت من خلالها رؤية العلامة واستعراض الحلول البرمجية والتقنية المبتكرة.",
    logo: "/assets/brands/hermatech.svg",
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    tags: ["تصميم الهوية البصرية", "إنتاج فيديوهات", "إدارة السوشيال ميديا"],
    stats: { videosCount: 5, campaignsCount: 3, reach: "+2.8M" }
  },
  {
    id: "to-fitness",
    slug: "to-fitness",
    name: "نحو الرشاقه",
    englishName: "TO FITNESS",
    tagline: "صحة · لياقة · حياة أفضل",
    description: "حملة متكاملة تهدف إلى تعزيز العلامة التجارية وتوصيل رسالتها للجمهور المستهدف بطريقة ملهمة وعصرية.",
    logo: "/assets/brands/to-fitness.svg",
    coverImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    tags: ["تصميم الفيديوهات", "إدارة السوشيال ميديا", "تصميم الهوية"],
    stats: { videosCount: 4, campaignsCount: 3, reach: "+3.5M" }
  },
  {
    id: "leesanto",
    slug: "leesanto",
    name: "لي سانتو",
    englishName: "LEESANTO",
    tagline: "الأناقة والتميز العاطري",
    description: "تصميم هوية بصرية وإنتاج محتوى مرئي يعكس الفخامة والجودة العالية للمنتجات العطرية.",
    logo: "/assets/brands/leesanto.svg",
    coverImage: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
    tags: ["الهوية البصرية", "صناعة المحتوى", "تصوير المنتجات"],
    stats: { videosCount: 4, campaignsCount: 2, reach: "+1.9M" }
  },
  {
    id: "lulu-glass",
    slug: "lulu-glass",
    name: "لولو جلاس",
    englishName: "Lulu Glass",
    tagline: "الفخامة والشفافية",
    description: "إبراز جمال وتفاصيل المنتجات العطرية والزجاجية الفاخرة من خلال تصوير سينمائي ومحتوى إعلاني مبتكر.",
    logo: "/assets/brands/lulu-glass.svg",
    coverImage: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80",
    tags: ["تصوير سينمائي", "إعلانات ممولة", "إدارة الحملات"],
    stats: { videosCount: 3, campaignsCount: 2, reach: "+2.1M" }
  },
  {
    id: "zeela",
    slug: "zeela",
    name: "زيلا",
    englishName: "ZEELA",
    tagline: "أناقة عصرية",
    description: "علامة تجارية متخصصة في تقديم منتجات أنيقة وعصرية بتصميم مميز يجمع بين البساطة والفخامة.",
    logo: "/assets/brands/zeela.svg",
    coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    tags: ["الهوية البصرية", "صناعة المحتوى", "إدارة السوشيال ميديا"],
    stats: { videosCount: 3, campaignsCount: 2, reach: "+1.5M" }
  },
  {
    id: "mada-al-baram",
    slug: "mada-al-baram",
    name: "مدى البراعم",
    englishName: "MADA AL BARAM",
    tagline: "رعاية和发展 الأصالة",
    description: "علامة تجارية متخصصة في رعاية和发展 الأطفال وتقديم خدمات تعليمية وترفيهية متكاملة.",
    logo: "/assets/brands/mada-al-baram.svg",
    coverImage: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=1200&q=80",
    tags: ["تصميم الهوية البصرية", "إنتاج المحتوى", "التسويق الرقمي"],
    stats: { videosCount: 4, campaignsCount: 3, reach: "+2.0M" }
  }
];
