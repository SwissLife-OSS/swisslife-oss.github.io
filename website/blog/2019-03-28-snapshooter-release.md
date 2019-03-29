---
title: First SwissLife OSS - Snapshooter
author: Normen Scheiber
authorURL: https://github.com/nscheibe
authorImageURL: https://avatars2.githubusercontent.com/u/46715105?s=460&v=4
---

SwissLife released its first official Open Source Software
[Snapshooter](https://swisslife-oss.github.io/snapshooter/), which
is a flexible snapshot test utility for .Net, to simplify the result validation
within tests.

[Snapshooter](https://swisslife-oss.github.io/snapshooter/) is a tool for
developers and testers, who want to validate their test result in a simplified
way. Instead of writing hundreds of assert statements or dividing tests into
many sub-tests, we are able to check the result now with one single assert.

[Snapshooter](https://swisslife-oss.github.io/snapshooter/) simply creates
a snapshot of your test result and stores it alongside of your test. Every time
when the test is excuted, the current test result will be snapshotted and
compared with the stored snapshot. The test will fail if the two snapshots do
not match.

Snapshooter is based on the idea of
**[Jest Snapshot Testing](https://jestjs.io/docs/en/snapshot-testing/)**
