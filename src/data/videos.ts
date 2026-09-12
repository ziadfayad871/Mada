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
    videoUrl: "https://drive.google.com/file/d/1oUa_MYk6AGJUxT4FrN0ydjRy5okn7HcI/preview",
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
    videoUrl: "https://drive.google.com/file/d/1hzGIWLLeSrtN8xKN2LvaSjbfIUB4C7Xa/preview",
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
    videoUrl: "https://drive.google.com/file/d/1jS2X6XWEfFdJMuuTWFvd2sZ7WhAYNX-P/preview",
    duration: "",
    category: "فيديو",
    description: "فيديو سلطان العسل الثالث"
  }
];
