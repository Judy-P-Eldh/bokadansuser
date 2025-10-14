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