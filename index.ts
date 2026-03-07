import type { UserConfig } from '@commitlint/types'

import { RuleConfigSeverity } from '@commitlint/types'

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'scope-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'subject-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
  },
  helpUrl: 'https://github.com/ogea12/commitlint-config#readme',
} satisfies UserConfig
