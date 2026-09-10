export interface Achievement {
  id: string;
  number: string;
  label: string;
  sublabel?: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "views",
    number: "+30M",
    label: "مشاهدة",
    sublabel: "عبر مختلف منصات التواصل الاجتماعي"
  },
  {
    id: "reach",
    number: "+15M",
    label: "وصول إجمالي",
    sublabel: "للجمهور المستهدف في المملكة"
  },
  {
    id: "clients",
    number: "+80",
    label: "عميل",
    sublabel: "علامات تجارية وثقت بنا"
  },
  {
    id: "campaigns",
    number: "+120",
    label: "حملة ناجحة",
    sublabel: "تم تنفيذها بإتقان وتميز"
  }
];
