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

export const VIDEOS: VideoItem[] = [
  {
    id: "sultan-01",
    brandId: "sultan-al-asal",
    brandName: "سلطان العسل",
    title: "سلطان العسل - فيديو 1",
    thumbnail: "",
    videoUrl: "/videos/sultan-al-asal/sultan-01.mp4",
    duration: "",
    category: "فيديو",
    description: "فيديو سلطان العسل الأول"
  },
  {
    id: "sultan-02",
    brandId: "sultan-al-asal",
    brandName: "سلطان العسل",
    title: "سلطان العسل - فيديو 2",
    thumbnail: "",
    videoUrl: "/videos/sultan-al-asal/sultan-02.mp4",
    duration: "",
    category: "فيديو",
    description: "فيديو سلطان العسل الثاني"
  },
  {
    id: "sultan-03",
    brandId: "sultan-al-asal",
    brandName: "سلطان العسل",
    title: "سلطان العسل - فيديو 3",
    thumbnail: "",
    videoUrl: "/videos/sultan-al-asal/sultan-03.mp4",
    duration: "",
    category: "فيديو",
    description: "فيديو سلطان العسل الثالث"
  },
  {
    id: "sultan-04",
    brandId: "sultan-al-asal",
    brandName: "سلطان العسل",
    title: "سلطان العسل - فيديو 4",
    thumbnail: "",
    videoUrl: "/videos/sultan-al-asal/sultan-04.mp4",
    duration: "",
    category: "فيديو",
    description: "فيديو سلطان العسل الرابع"
  },
  {
    id: "fitness-01",
    brandId: "to-fitness",
    brandName: "نحو الرشاقه",
    title: "نحو الرشاقه - فيديو 1",
    thumbnail: "",
    videoUrl: "/videos/to-fitness/IMG_8150.mp4",
    duration: "",
    category: "فيديو",
    description: "فيديو نحو الرشاقه الأول"
  },
  {
    id: "fitness-02",
    brandId: "to-fitness",
    brandName: "نحو الرشاقه",
    title: "نحو الرشاقه - فيديو 2",
    thumbnail: "",
    videoUrl: "/videos/to-fitness/IMG_8151.mp4",
    duration: "",
    category: "فيديو",
    description: "فيديو نحو الرشاقه الثاني"
  },
  {
    id: "nukbat-01",
    brandId: "nukbat-al-jawf",
    brandName: "نخبة الجوف",
    title: "نخبة الجوف - فيديو 1",
    thumbnail: "",
    videoUrl: "/videos/nukbat-al-jawf/IMG_6822.mp4",
    duration: "",
    category: "فيديو",
    description: "فيديو نخبة الجوف الأول"
  },
  {
    id: "nukbat-02",
    brandId: "nukbat-al-jawf",
    brandName: "نخبة الجوف",
    title: "نخبة الجوف - فيديو 2",
    thumbnail: "",
    videoUrl: "/videos/nukbat-al-jawf/IMG_6823.mp4",
    duration: "",
    category: "فيديو",
    description: "فيديو نخبة الجوف الثاني"
  },
  {
    id: "nukbat-03",
    brandId: "nukbat-al-jawf",
    brandName: "نخبة الجوف",
    title: "نخبة الجوف - فيديو 3",
    thumbnail: "",
    videoUrl: "/videos/nukbat-al-jawf/IMG_6824.mp4",
    duration: "",
    category: "فيديو",
    description: "فيديو نخبة الجوف الثالث"
  },
  {
    id: "zeela-01",
    brandId: "zeela",
    brandName: "زيلا",
    title: "زيلا - فيديو 1",
    thumbnail: "",
    videoUrl: "/videos/zeela/IMG_6825.MP4",
    duration: "",
    category: "فيديو",
    description: "فيديو زيلا الأول"
  },
  {
    id: "zeela-02",
    brandId: "zeela",
    brandName: "زيلا",
    title: "زيلا - فيديو 2",
    thumbnail: "",
    videoUrl: "/videos/zeela/IMG_6826.MP4",
    duration: "",
    category: "فيديو",
    description: "فيديو زيلا الثاني"
  },
  {
    id: "zeela-03",
    brandId: "zeela",
    brandName: "زيلا",
    title: "زيلا - فيديو 3",
    thumbnail: "",
    videoUrl: "/videos/zeela/IMG_6827.MP4",
    duration: "",
    category: "فيديو",
    description: "فيديو زيلا الثالث"
  },
  {
    id: "mada-baram-01",
    brandId: "mada-al-baram",
    brandName: "مدى البراعم",
    title: "مدى البراعم - فيديو 1",
    thumbnail: "",
    videoUrl: "https://www.youtube.com/shorts/KMpHbL5wH1Q",
    duration: "",
    category: "فيديو",
    description: "فيديو مدى البراعم من يوتيوب"
  },
  {
    id: "hematech-01",
    brandId: "hermatech",
    brandName: "همتك",
    title: "همتك - فيديو 1",
    thumbnail: "",
    videoUrl: "/videos/hematech/IMG_8134.mp4",
    duration: "",
    category: "فيديو",
    description: "فيديو همتك الأول"
  },
  {
    id: "hematech-02",
    brandId: "hermatech",
    brandName: "همتك",
    title: "همتك - فيديو 2",
    thumbnail: "",
    videoUrl: "/videos/hematech/IMG_8135.mp4",
    duration: "",
    category: "فيديو",
    description: "فيديو همتك الثاني"
  },
  {
    id: "hematech-03",
    brandId: "hermatech",
    brandName: "همتك",
    title: "همتك - فيديو 3",
    thumbnail: "",
    videoUrl: "/videos/hematech/IMG_8136.mp4",
    duration: "",
    category: "فيديو",
    description: "فيديو همتك الثالث"
  }
];
