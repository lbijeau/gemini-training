# Development Guidelines

## Philosophy

### Core Beliefs

- **Incremental progress over big bangs** - Small changes that compile and pass tests
- **Learning from existing code** - Study and plan before implementing
- **Pragmatic over dogmatic** - Adapt to project reality
- **Clear intent over clever code** - Be boring and obvious

### Simplicity Means

- Single responsibility per function/class
- Avoid premature abstractions
- No clever tricks - choose the boring solution
- If you need to explain it, it's too complex

## Process

### 1. Planning & Staging

Break complex work into 3-5 stages. Document in `IMPLEMENTATION_PLAN.md`:

```markdown
## Stage N: [Name]

**Goal**: [Specific deliverable]
**Success Criteria**: [Testable outcomes]
**Tests**: [Specific test cases]
**Status**: [Not Started|In Progress|Complete]
```

- Update status as you progress
- Remove file when all stages are done
- For detailed task breakdown within stages, use `superpowers:writing-plans`
- Track real-time progress with `TodoWrite` - create todos for each task, mark in_progress/completed as you work

### 2. Implementation Flow

1. **Understand** - Study existing patterns in codebase
2. **Implement** - Follow `superpowers:test-driven-development` (Red-Green-Refactor)
3. **Commit** - With clear message linking to plan

### 3. When Stuck (After 3 Attempts)

**CRITICAL**: Maximum 3 attempts per issue, then STOP and use `superpowers:systematic-debugging`.

Do not guess at fixes. The skill provides a 4-phase framework for root cause investigation.

## Technical Standards

### Architecture Principles

- **Composition over inheritance** - Use dependency injection
- **Interfaces over singletons** - Enable testing and flexibility
- **Explicit over implicit** - Clear data flow and dependencies
- **Test-driven when possible** - Never disable tests, fix them

### Code Quality

- **Every commit must**:
  - Compile successfully
  - Pass all existing tests
  - Include tests for new functionality
  - Follow project formatting/linting

- **Before committing**:
  - Run formatters/linters
  - Run tests and confirm passing (don't assume - verify)
  - Self-review changes
  - Ensure commit message explains "why"

### Error Handling

- Fail fast with descriptive messages
- Include context for debugging
- Handle errors at appropriate level
- Never silently swallow exceptions

## Decision Framework

When multiple valid approaches exist, choose based on:

1. **Testability** - Can I easily test this?
2. **Readability** - Will someone understand this in 6 months?
3. **Consistency** - Does this match project patterns?
4. **Simplicity** - Is this the simplest solution that works?
5. **Reversibility** - How hard to change later?

## Project Integration

### Learning the Codebase

- Find 3 similar features/components
- Identify common patterns and conventions
- Use same libraries/utilities when possible
- Follow existing test patterns

### Tooling

- Use project's existing build system
- Use project's test framework
- Use project's formatter/linter settings
- Don't introduce new tools without strong justification

## Quality Gates

### Definition of Done

- [ ] Tests written and passing (verified, not assumed)
- [ ] Code follows project conventions
- [ ] No linter/formatter warnings
- [ ] Commit messages are clear
- [ ] Implementation matches plan
- [ ] No TODOs without issue numbers

Before claiming any task complete, run `superpowers:verification-before-completion` gate.

### Test Guidelines

- Test behavior, not implementation
- One assertion per test when possible
- Clear test names describing scenario
- Use existing test utilities/helpers
- Tests should be deterministic

## Superpowers Integration

This document defines principles. For execution methodology, use these skills:

| Principle                   | Skill                                        |
| --------------------------- | -------------------------------------------- |
| TDD / Test-first            | `superpowers:test-driven-development`        |
| When stuck after 3 attempts | `superpowers:systematic-debugging`           |
| Planning complex work       | `superpowers:writing-plans`                  |
| Executing plans             | `superpowers:executing-plans`                |
| Before claiming done        | `superpowers:verification-before-completion` |
| Design exploration          | `superpowers:brainstorming`                  |

## Static Analysis

### Session Start Checks

A session start hook runs static analysis before Claude starts working:

- **Duplicate Detection**: Finds 15-line code blocks duplicated across files
- **Cross-Layer Imports**: Auto-discovers apps from `apps/` directory
  - Each app cannot import from other apps
  - Shared directories allowed: `packages/`, `shared/`, `lib/`, `common/`, `utils/`
  - For this project: backend ↛ mobile/studio, mobile ↛ backend/studio, studio ↛ backend/mobile
- **Complexity Diff**: Flags added code with 30+ lines or 4+ nesting depth

These checks provide early feedback without consuming tokens. Results are warnings, not blockers.

### Addressing Duplicates

When duplicates are flagged:

1. Extract shared code to utilities or shared components
2. For test setup: Create test helpers or fixtures
3. For middleware: Move to shared middleware directory
4. Document why if intentional duplication is needed

## Important Reminders

**NEVER**:

- Use `--no-verify` to bypass commit hooks
- Disable tests instead of fixing them
- Commit code that doesn't compile
- Make assumptions - verify with existing code

**ALWAYS**:

- Commit working code incrementally
- Update plan documentation as you go
- Learn from existing implementations
- Stop after 3 failed attempts and use systematic-debugging
