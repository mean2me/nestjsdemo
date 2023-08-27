export interface UserDto {
  id: string;
  name: string;
  surname: string;
  email: string;
  enabled: boolean;
  avatar?: string;
}

export type FilterContextType = {
  showDisabled: boolean;
  setFilter: (filter: boolean) => void;
};
