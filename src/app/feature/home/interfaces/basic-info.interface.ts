import { LocationInfo } from './location-info.interface';
import { ProfileInfo } from './profile-info.interface';

export interface BasicInfo {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: LocationInfo;
  profiles: ProfileInfo[];
}
