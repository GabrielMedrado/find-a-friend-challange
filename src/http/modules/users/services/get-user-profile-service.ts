import { ResourceNotFoundError } from '@/http/errors/resource-not-found-error';
import { IUsersRepository } from '@/http/repositories/interfaces/users-repository-interface';
import { IGetUserProfileServiceRequest } from '../dto/get-profile-request.dto';
import { IGetUserProfileServiceResponse } from '../dto/get-profile-response.dto';

export class GetUserProfileService {
  constructor(private userRepository: IUsersRepository) {}

  async execute({
    userId,
  }: IGetUserProfileServiceRequest): Promise<IGetUserProfileServiceResponse> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new ResourceNotFoundError();
    }

    return { user };
  }
}
