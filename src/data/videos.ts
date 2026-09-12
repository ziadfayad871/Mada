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

/*
  HOW TO ADD YOUR VIDEOS:
  =======================
  1. Upload your video to YouTube or any hosting service
  2. Copy the video URL (YouTube link or direct .mp4 link)
  3. For thumbnail: use a screenshot of the video, or an Unsplash image
  4. Add the entry below following the same format

  Example with YouTube:
    videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"

  Example with direct MP4:
    videoUrl: "https://your-domain.com/videos/my-video.mp4"

  Example with local file (put in public/videos/ folder):
    videoUrl: "/Mada/videos/my-video.mp4"
*/

export const VIDEOS: VideoItem[] = [
  // سلطان العسل
  // {
  //   id: "video-01",
  //   brandId: "sultan-al-asal",
  //   brandName: "سلطان العسل",
  //   title: "عنوان الفيديو",
  //   thumbnail: "https://images.unsplash.com/photo-XXXXX?auto=format&fit=crop&w=800&q=80",
  //   videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  //   duration: "00:45",
  //   category: "فيديو",
  //   description: "وصف مختصر للفيديو"
  // },

  // hermatech
  // {
  //   id: "video-02",
  //   brandId: "hermatech",
  //   brandName: "hermatech",
  //   title: "عنوان الفيديو",
  //   thumbnail: "https://images.unsplash.com/photo-XXXXX?auto=format&fit=crop&w=800&q=80",
  //   videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  //   duration: "00:45",
  //   category: "فيديو",
  //   description: "وصف مختصر للفيديو"
  // },

  // TO FITNESS
  // {
  //   id: "video-03",
  //   brandId: "to-fitness",
  //   brandName: "TO FITNESS",
  //   title: "عنوان الفيديو",
  //   thumbnail: "https://images.unsplash.com/photo-XXXXX?auto=format&fit=crop&w=800&q=80",
  //   videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  //   duration: "00:45",
  //   category: "فيديو",
  //   description: "وصف مختصر للفيديو"
  // },

  // LEESANTO
  // {
  //   id: "video-04",
  //   brandId: "leesanto",
  //   brandName: "LEESANTO",
  //   title: "عنوان الفيديو",
  //   thumbnail: "https://images.unsplash.com/photo-XXXXX?auto=format&fit=crop&w=800&q=80",
  //   videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  //   duration: "00:45",
  //   category: "فيديو",
  //   description: "وصف مختصر للفيديو"
  // },

  // Lulu Glass
  // {
  //   id: "video-05",
  //   brandId: "lulu-glass",
  //   brandName: "Lulu Glass",
  //   title: "عنوان الفيديو",
  //   thumbnail: "https://images.unsplash.com/photo-XXXXX?auto=format&fit=crop&w=800&q=80",
  //   videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  //   duration: "00:45",
  //   category: "فيديو",
  //   description: "وصف مختصر للفيديو"
  // },
];
