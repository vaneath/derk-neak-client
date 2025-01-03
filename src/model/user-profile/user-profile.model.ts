import { UserProfileData } from './user-profile.interface';

export class UserProfileModel implements UserProfileData {
  firstName: string;
  lastName: string;
  profileImageUrl?: string;
  email: string;

  constructor(data: UserProfileData) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.profileImageUrl = data.profileImageUrl;
    this.email = data.email;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
