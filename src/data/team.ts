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
    image: "/assets/team-zahra.jpg",
    specialties: ["صناعة المحتوى", "كتابة السيناريو", "التوجيه الإبداعي"]
  },
  {
    id: "haya-al-ajmi",
    name: "هياء العجمي",
    role: "Co-Founder & Marketing",
    bio: "شريكة مؤسسة وخبيرة في الاستراتيجيات التسويقية وبناء الهويات التجارية الناجحة في السوق السعودي.",
    image: "/assets/team-haya.jpg",
    specialties: ["الاستراتيجيات التسويقية", "إدارة الحملات", "تطوير الأعمال"]
  }
];
