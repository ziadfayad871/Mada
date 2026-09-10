export interface VideoItem {
  id: string;
  brandId: string;
  brandName: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  category: 'فيديو' | 'تصوير' | 'حملات' | 'محتوى';
  description?: string;
}

// Sample reliable MP4 fallback video URLs for seamless playback
const SAMPLE_VIDEOS = [
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoylikes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
];

export const VIDEOS: VideoItem[] = [
  // Sultan Al Fasil (8 videos)
  {
    id: "video-01",
    brandId: "sultan-al-faisal",
    brandName: "سلطان الفيصل",
    title: "الفيديو الرئيسي - الفخامة الأصيلة",
    thumbnail: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[0],
    duration: "00:45",
    category: "فيديو",
    description: "فيديو سينمائي يستعرض التراث الأصيل والفخامة العصرية لعلامة سلطان الفيصل."
  },
  {
    id: "video-02",
    brandId: "sultan-al-faisal",
    brandName: "سلطان الفيصل",
    title: "محتوى إعلاني - تجربة الفخامة",
    thumbnail: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[1],
    duration: "00:32",
    category: "حملات",
    description: "إعلان ترويجي مميز موجه للجمهور المستهدف لإبراز التجربة الفاخرة."
  },
  {
    id: "video-03",
    brandId: "sultan-al-faisal",
    brandName: "سلطان الفيصل",
    title: "تصوير منتجات - تفاصيل العود والضيافة",
    thumbnail: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[2],
    duration: "00:28",
    category: "تصوير",
    description: "لقطات قريبة وفوتوغرافية سينمائية تبرز أدق التفاصيل والجودة."
  },
  {
    id: "video-04",
    brandId: "sultan-al-faisal",
    brandName: "سلطان الفيصل",
    title: "تجربة العملاء والضيافة",
    thumbnail: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[3],
    duration: "00:41",
    category: "محتوى",
    description: "استعراض آراء وتجارب العملاء مع خدمات الضيافة الخاصة بالبراند."
  },
  {
    id: "video-05",
    brandId: "sultan-al-faisal",
    brandName: "سلطان الفيصل",
    title: "كواليس الإنتاج والتصوير",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[4],
    duration: "00:50",
    category: "فيديو",
    description: "نظرة خلف الكواليس لتصوير وتجهيز حملة سلطان الفيصل."
  },
  {
    id: "video-06",
    brandId: "sultan-al-faisal",
    brandName: "سلطان الفيصل",
    title: "حملة التوسع والانتشار",
    thumbnail: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[0],
    duration: "00:38",
    category: "حملات",
    description: "فيديو ترويجي قصير لمنصات التواصل الاجتماعي يركز على الهوية."
  },
  {
    id: "video-07",
    brandId: "sultan-al-faisal",
    brandName: "سلطان الفيصل",
    title: "إطلاق المجموعات الخاصة",
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[1],
    duration: "01:05",
    category: "تصوير",
    description: "عرض بصري مبهر للمأكولات والمنتجات الفاخرة للعلامة."
  },
  {
    id: "video-08",
    brandId: "sultan-al-faisal",
    brandName: "سلطان الفيصل",
    title: "قصة البراند والهوية",
    thumbnail: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[2],
    duration: "00:55",
    category: "محتوى",
    description: "فيديو وثائقي قصير يروي قصة سلطان الفيصل ورؤيتها المستقبلية."
  },

  // Hermatech (5 videos)
  {
    id: "video-09",
    brandId: "hermatech",
    brandName: "hermatech",
    title: "الفيديو الترويجي - رؤية المستقبل",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[3],
    duration: "00:48",
    category: "فيديو",
    description: "عرض بصري للحلول التقنية والبرمجية التي تقدمها شركة hermatech."
  },
  {
    id: "video-10",
    brandId: "hermatech",
    brandName: "hermatech",
    title: "عرض الحلول التقنية",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[4],
    duration: "00:34",
    category: "حملات",
    description: "فيديو موجه لأصحاب الأعمال والشركات لاستعراض خدمات التحول الرقمي."
  },
  {
    id: "video-11",
    brandId: "hermatech",
    brandName: "hermatech",
    title: "شهادات العملاء وتطبيقات التقنية",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[0],
    duration: "00:27",
    category: "محتوى",
    description: "قصص نجاح واقعية لعملاء اعتمدوا على حلول hermatech."
  },
  {
    id: "video-12",
    brandId: "hermatech",
    brandName: "hermatech",
    title: "إطلاق الأنظمة البرمجية",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[1],
    duration: "00:42",
    category: "تصوير",
    description: "إعلان حماسي لإطلاق التحديثات البرمجية الجديدة."
  },
  {
    id: "video-13",
    brandId: "hermatech",
    brandName: "hermatech",
    title: "محتوى السوشيال ميديا التفاعلي",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[2],
    duration: "00:30",
    category: "محتوى",
    description: "محتوى فيديو قصير تفاعلي لمنصات لينكدإن وانستغرام."
  },

  // TO FITNESS (4 videos)
  {
    id: "video-14",
    brandId: "to-fitness",
    brandName: "TO FITNESS",
    title: "الفيديو الرئيسي - ابدأ رحلة اللياقة",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[3],
    duration: "00:52",
    category: "فيديو",
    description: "فيديو حماسي عالي الطاقة يستعرض تدريبات وأجواء TO FITNESS."
  },
  {
    id: "video-15",
    brandId: "to-fitness",
    brandName: "TO FITNESS",
    title: "تصوير الأنشطة والتمارين",
    thumbnail: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[4],
    duration: "00:36",
    category: "تصوير",
    description: "تصوير حركي ديناميكي للمعدات الرياضية وجلسات التدريب الشخصي."
  },
  {
    id: "video-16",
    brandId: "to-fitness",
    brandName: "TO FITNESS",
    title: "حملة التحدي الرياضي",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[0],
    duration: "00:29",
    category: "حملات",
    description: "حملة إعلانية ترويجية لتحفيز المشتركين على الانضمام للتحديات."
  },
  {
    id: "video-17",
    brandId: "to-fitness",
    brandName: "TO FITNESS",
    title: "نصائح الصحة واللياقة",
    thumbnail: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[1],
    duration: "00:44",
    category: "محتوى",
    description: "سلسلة محتوى تثقيفي وصحي موجه للمتابعين على منصات التواصل."
  },

  // LEESANTO (2 videos)
  {
    id: "video-18",
    brandId: "leesanto",
    brandName: "LEESANTO",
    title: "الفيديو الترويجي للعطور الفاخرة",
    thumbnail: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[2],
    duration: "00:40",
    category: "فيديو",
    description: "تصوير عالي الأناقة يعكس روائح وسحر العطور الأنيقة."
  },
  {
    id: "video-19",
    brandId: "leesanto",
    brandName: "LEESANTO",
    title: "تصوير تفاصيل المنتجات والزجاجات",
    thumbnail: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[3],
    duration: "00:25",
    category: "تصوير",
    description: "إبراز التصميم الهندسي لزجاجات العطر والتعبئة الفاخرة."
  },

  // Lulu Glass (2 videos)
  {
    id: "video-20",
    brandId: "lulu-glass",
    brandName: "Lulu Glass",
    title: "سحر الشفافية والجمال",
    thumbnail: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[4],
    duration: "00:33",
    category: "فيديو",
    description: "عرض سينمائي لإبداعات Lulu Glass في المنتجات الراقية."
  },
  {
    id: "video-21",
    brandId: "lulu-glass",
    brandName: "Lulu Glass",
    title: "حملة الأناقة الفندقية",
    thumbnail: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[0],
    duration: "00:46",
    category: "حملات",
    description: "حملة إعلانية مخصصة لمنتجات الضيافة والمنازل الفاخرة."
  }
];
