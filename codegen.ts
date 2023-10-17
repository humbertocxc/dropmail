import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://dropmail.me/api/schema.graphql',
  documents: ['src/**/*.tsx', 'src/graphql/**/*.graphqls', 'src/graphql/**/*.ts'],
  generates: {
    'src/__generated__/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
      }
    }
  }
}

export default config
