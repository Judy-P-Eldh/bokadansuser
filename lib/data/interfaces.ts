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
  ages?: string[];
  styles?: string[];
  types?: string[];
  school_ids?: string[]; // Ändrat från schools till school_ids
}

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterOptions {
  days: FilterOption[];
  dates: FilterOption[];
  ages: FilterOption[];
  styles: FilterOption[];
  types: FilterOption[];
  schools: FilterOption[];
}

export interface DrawerFilterProps {
  filterOptions: FilterOptions;
}

export interface FilterProps {
  filterOptions: FilterOptions;
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
   schools: { // Ändrat från school: string till schools: object
    id: number;
    name: string;
  } | null;
  day: string;
  start_time: string | null;
  end_time: string | null;
  start_date: string;
  end_date: string;
  nr_times: number;
}

export interface RegisterFormEntry {
  studentName: string;
  studentBirthYear: number;
  email: string;
  course: string;
  parentName: string;
}

export interface FormParams {
  courseNames: {
    id: number;
    name: string;
    min_birth_year?: number | null;
    max_birth_year?: number | null;
  }[];
}
