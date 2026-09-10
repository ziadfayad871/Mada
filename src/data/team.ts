export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image: string;
  specialties: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "zahra-al-shehri",
    name: "زهراء الشهري",
    role: "Content Creator",
    bio: "متخصصة في صناعة المحتوى الإبداعي وصياغة القصص التسويقية التي تلامس الجمهور وتصنع أثراً حقيقياً.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    specialties: ["صناعة المحتوى", "كتابة السيناريو", "التوجيه الإبداعي"]
  },
  {
    id: "haya-al-ajmi",
    name: "هياء العجمي",
    role: "Co-Founder & Marketing",
    bio: "شريكة مؤسسة وخبيرة في الاستراتيجيات التسويقية وبناء الهويات التجارية الناجحة في السوق السعودي.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    specialties: ["الاستراتيجيات التسويقية", "إدارة الحملات", "تطوير الأعمال"]
  }
];
