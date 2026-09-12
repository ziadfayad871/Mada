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
  }
];
