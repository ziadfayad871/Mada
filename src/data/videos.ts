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
  // سلطان العسل
  {
    id: "sultan-01",
    brandId: "sultan-al-asal",
    brandName: "سلطان العسل",
    title: "سلطان العسل - فيديو 1",
    thumbnail: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://drive.google.com/uc?export=download&id=1oUa_MYk6AGJUxT4FrN0ydjRy5okn7HcI",
    duration: "00:45",
    category: "فيديو",
    description: "فيديو سلطان العسل الأول"
  },
  {
    id: "sultan-02",
    brandId: "sultan-al-asal",
    brandName: "سلطان العسل",
    title: "سلطان العسل - فيديو 2",
    thumbnail: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://drive.google.com/uc?export=download&id=1hzGIWLLeSrtN8xKN2LvaSjbfIUB4C7Xa",
    duration: "00:32",
    category: "حملات",
    description: "فيديو سلطان العسل الثاني"
  },
  {
    id: "sultan-03",
    brandId: "sultan-al-asal",
    brandName: "سلطان العسل",
    title: "سلطان العسل - فيديو 3",
    thumbnail: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://drive.google.com/uc?export=download&id=1jS2X6XWEfFdJMuuTWFvd2sZ7WhAYNX-P",
    duration: "00:28",
    category: "تصوير",
    description: "فيديو سلطان العسل الثالث"
  }
];
