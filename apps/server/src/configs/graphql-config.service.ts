import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { CorporateAccountsModule } from '@ffdc/api_corporate-accounts';
import { join } from 'path';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  createGqlOptions(): GqlModuleOptions {
    const playgroundDevOptions = {
      settings: {
        'request.credentials': 'include',
      },
    };
    return {
      typePaths: [
        join(
          __dirname,
          '../../../node_modules/@ffdc/api_corporate-accounts/**/*.graphql'
        ),
      ],
      include: [CorporateAccountsModule],
      playground:
        process.env.NODE_ENV === 'production' ? false : playgroundDevOptions,
    };
  }
}
