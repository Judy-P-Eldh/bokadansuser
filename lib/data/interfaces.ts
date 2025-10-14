export interface MobileMenuButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CourseFilters {
  days?: string[];
  dates?: string[];
  age?: string[];
  styles?: string[];
  types?: string[];
  // antal?: number[]; // ta med om det behövs
}

export interface Course {
  id: number;
  name: string;
  description: string;
  level: string;
  agegroup: string | null;
  price: number;
  featured: boolean | null;
  featured_message: string | null;
  min_birth_year: number | null;
  max_birth_year: number | null;
  school_id: number;
  day: string;
  start_time: string | null;
  end_time: string | null;
  start_date: string;
  end_date: string;
  nr_times: number;
}
