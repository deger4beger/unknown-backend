import { Test } from '@nestjs/testing';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';

describe('UserService', () => {

    let service: UserService;

    const repo = {

    }

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            providers: [UserService, {
                provide: getRepositoryToken(UserEntity),
                useValue: repo
            }],
        }).compile()

        service = moduleRef.get<UserService>(UserService)

    })

    // it("service should be defined", () => {
    //     expect(service).toBeDefined()
    // })

})