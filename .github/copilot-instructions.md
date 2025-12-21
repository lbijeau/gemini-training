# Copilot Instructions for Scavenger Hunt Platform

## Project Overview

Mobile-first scavenger/interactive experience platform, targeting GooseChase feature parity.

### Major Components

- Organizer Studio (Web): Create/manage Experiences
- Player Apps (iOS/Android): Join and play

## Architecture & Domain Model

- Experience: title, cover, description, start/end, visibility, status, branding
- Mission: linked to Experience; types: Photo/Video, Text, GPS; points, order, availability, feed visibility, submission sources
- User Roles: Owner, Editor, Viewer (RBAC)
- Teams/Individuals: join as team or solo
- Live Feed & Leaderboard: real-time updates
- Broadcasts: one-way messages
- Exports & Stats: media, CSV exports, analytics

## Patterns & Conventions

- Status transitions: draft → scheduled → live → ended (Experience); draft/published (Mission)
- RBAC: enforce role-based access for authoring/lifecycle
- Optimistic concurrency: prevent editor clobbering
- Audit logging: track create/update/status changes
- Mission unlocks: absolute, relative, on-completion
- Feed visibility: missions can be hidden but still score
- Domain model: use enums/structured objects as in requirements docs
- File organization: core logic in `models/`, `services/`, `api/`
- Documentation: keep requirements and parity notes up to date

## Integration Points

- Player apps interact with Studio backend via API
- Document any third-party services/libraries used

## Developer Workflow

- No build/test scripts found yet; document custom commands if added
- Prioritize MVP parity features (EPIC 1 & 2 in `Requirements.md`)

## Development Guidelines

### Philosophy & Simplicity

- Prefer small, testable changes; incremental progress
- Learn from existing code before implementing
- Clear intent over clever code; boring and obvious is best
- Single responsibility per function/class; avoid premature abstractions

### Process

1. Break complex work into 3-5 stages, document in `IMPLEMENTATION_PLAN.md`
2. Implementation flow: Understand → Test (red) → Implement (green) → Refactor → Commit
3. Maximum 3 attempts per issue; document failures and reassess if stuck

### Technical Standards & Code Quality

- Composition over inheritance; use dependency injection
- Prefer interfaces for testability/flexibility
- Explicit data flow/dependencies
- Test-driven when possible; never disable tests
- Every commit must compile, pass all tests, follow formatting/linting
- Run formatters/linters and self-review before committing
- Commit messages should explain "why"

### Error Handling

- Fail fast with descriptive messages/context
- Handle errors at appropriate level; never silently swallow exceptions

### Decision Framework

- Choose approaches based on: testability, readability, consistency, simplicity, reversibility

### Project Integration

- Find similar features/components and follow existing patterns
- Use same libraries/utilities and test patterns
- Use existing build/test/formatter tools; don't introduce new ones without justification

### Quality Gates

- Definition of Done: tests passing, conventions followed, no linter warnings, clear commits, matches plan, no TODOs without issues
- Test guidelines: test behavior, one assertion per test, clear names, deterministic

### Important Reminders

NEVER:

- Use --no-verify to bypass commit hooks
- Disable tests instead of fixing them
- Commit code that doesn't compile
- Make assumptions—verify with existing code
  ALWAYS:
- Commit working code incrementally
- Update plan documentation as you go
- Learn from existing implementations
- Stop after 3 failed attempts and reassess

## Examples

- Experience Status: Draft (editable, not visible), Scheduled (countdown), Live (accepting submissions), Ended (submissions closed)
- Mission Availability: Absolute (unlock at time), Relative (unlock N minutes after start), On-completion (unlock when another mission is completed)

## Key Files

- `Requirements.md`: Jira-ready checklist, acceptance criteria, domain model
- `Scavenger Hunt.md`: Feature parity teardown, UX notes, build hints

---

Update this file as new workflows, conventions, or dependencies are added. For questions, review requirements docs or ask the project owner.
