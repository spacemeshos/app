# Contributing to `spacemeshos/app`

We welcome all contributions from folks who are willing to work in good faith
with the community. No contribution is too small and all contributions are
valued.

* [Issues](#issues)
* [Discussions And General Help](#discussions-and-general-help)
* [Pull Requests](#pull-requests)
  * [Step 1: Fork](#step-1-fork)
  * [Step 2: Branch](#step-2-branch)
  * [Step 3: Code](#step-3-code)
  * [Step 4: Commit](#step-4-commit)
  * [Step 5: Rebase](#step-5-rebase)
  * [Step 6: PRs](#step-6-prs)
  * [Step 7: Tests](#step-7-tests)
  * [Step 8: PR Submission Checklist](#step-8-pr-submission-checklist)

## Issues

Issues in [`spacemeshos/app`](https://github.com/spacemeshos/app/issues) are the primary means by which bug reports and
general discussions are made. A contributor is allowed to create an issue,
discuss and provide a fix if needed.

## Discussions And General Help

Please join our [Gitter](https://gitter.im/spacemesh-os/app) channel for general discussions/help.

## Pull Requests

Pull Requests are the way in which concrete changes are made to the code.

## Prerequisites

- `node` >= `8` (LTS recommended)
- `npm`

### Step 1: Fork

Fork the project [on GitHub](https://github.com/spacemeshos/app) and clone your
fork locally.

```shell
git clone git@github.com:spacemeshos/app.git
cd app
git remote add upstream https://github.com/spacemeshos/app.git
git fetch upstream
```

### Step 2: Branch

It's always better to create local branches to work on a specific issue. Makes
life easier for you if you are the kind who enjoys multiple things parallely.
These should also be created directly off of the `develop` branch.

```shell
git checkout -b feature -t upstream/develop
```

### Step 3: Code

To keep the style of the Javascript code consistent we have a basic linting configured.
To check your contributed code for errors and also to automatically fix them:

 ```shell
 npm run lint
 ```


* Use the pre-configured eslint for Javascript
* Avoid trailing whitespace & un-necessary white lines
* Indentation is as follows
  * 1 tab = 2 spaces for `.html` and `.js` files
  * 1 tab = 4 spaces for everything else
* Add relevant unit tests for all new logic and update existing tests to accommodate new logic.

- Plase document each type, method, class or interface in your code
- Pleae write unit tests to each function and type
- For Typescript code, pleae make sure you tlint qll your new or modified code before submitting a PR

### Step 4: Commit

1. List all your changes as a list if needed else simply give a brief
  description on what the changes are.
2. All lines at 100 columns.
3. If your PR fixed an issue, Use the `Fixes:` prefix and the full issue URL.
  For other references use `Refs:`.

    _Examples:_
    * `Fixes: https://github.com/spacemeshos/app/issues/1`
    * `Refs: https://github.com/spacemeshos/app/issues/1`

5. _Sample commit A_
    ```txt
    if you can write down the changes explaining it in a paragraph which each
    line wrapped within 100 lines.

    Fixes: https://github.com/spacemeshos/app/issues/1
    Refs: https://github.com/spacemeshos/app/issues/1
    ```

    _Sample commit B_
    ```txt
    - list out your changes as points if there are many changes
    - if needed you can also send it across as
    - all wrapped within 100 lines

    Fixes: https://github.com/spacemeshos/app/issues/1
    Refs: https://github.com/spacemeshos/app/issues/1
    ```
6. [Squashing](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History) and [Merging](https://git-scm.com/docs/git-merge) your commits to make our history neater is always welcomed, but squashing can be handled during the merge process.

### Step 5: Rebase

As a best practice, once you have committed your changes, it is a good idea
to use `git rebase` (not `git merge`) to ensure your changes are placed at the
top. Plus merge conflicts can be resolved

```shell
git fetch upstream
git rebase upstream/develop
```

### Step 6: PRs

Please ensure that your pull request follows all of the community guidelines to include:

* Title is descriptive and generally focused on what the PR addresses (If your PR is a work in progress, include `WIP` in the title. Once the PR is ready for review, please remove `WIP`)
* Description explains what the PR achieves/addresses
* If the PR modifies the UI in any way, please attach screenshots of all purposeful changes (before and after screens are recommended)

### Step 7: Tests
- You must write unit tests for each new function, method and component you add and make sure you get to +90% test coverage. This is critical for high-quality code
- You must write integration tests for each new flow / feature you add or modeify
- You must make sure that all exisiting tests pass before submitting a new PR
- You must write UI tests for all new UI functionality

## Step 8: PR Submission checklist
- [ ] The latest develop branch code is merged into your work branch
- [ ] All new code is properly documented
- [ ] Unit tests for all new functions and methoods
- [ ] Intergration tests for all new flows
- [ ] UI tests for all new UI widgets
- [ ] All new code is fully linted
- [ ] All targets compile on your branch