# Trilogy Design System : How to contribute ?

Welcome to Trilogy Design System, Bouygues Telecom's very own design system project.
This guide gives you the lowdown on how to chip into our project.

## Table of Contents

- [Quick Start](#quick-start)
  - [Prerequisites](#prerequisites)
  - [Development Setup](#development-setup)
    - [Web](#web)
    - [Mobile (Android / IOS)](#mobile-android--ios)
    - [Development experience](#development-experience)
- [How to Contribute](#how-to-contribute)
  - [Reporting Bugs](#reporting-bugs-bug)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Code Contributions](#code-contributions)
- [Code Formatting](#code-formatting)
- [Code Performance](#code-performance)
- [Branching Strategy](#branching-strategy)
  - [Naming Conventions](#naming-conventions)
  - [Gitmoji](#gitmoji)
  - [Merge Request Workflow](#merge-request-workflow)
- [FAQ](#faq)
- [Support](#support)

## Quick Start

## Project structure

```
.
├── config                  # Build / CI config
├── scripts                 # Build scripts
├── docs                    # Storybook documentation
├── examples                # React Native sample project with demo
│   └── mobile              # React Native sample
    └── react-tempalte      # Demo app (ReactJs/React Native)
├── packages                # Workspaces
│   ├── assets           ◀  # - Package assets (only for mobile)
│   │   ├── assets          # Fonts / icons
│   │   └── src             # Scripts / IconNameEnum
│   ├── react            ◀  # - Package react
│   │   ├── components      # React functional components
│   |   ├── context         # Providers (Themes , styles / hashed styles)
│   |   ├── events          # Event type definitions
│   |   ├── helpers         # Utility functions
│   |   ├── objects         # Atoms & facets definition & implementation
│   |   ├── services        # Hooks
│   |   └── types           # Typescript types
│   └── styles           ◀  # - Package styles
│       ├── assets          # Icons ( web )
│       ├── config          # Plugins / Theme
│       ├── framework       # SCSS Framework
│       ├── scripts         # Scripts autolayout , spacing
│       └── themes          # Themes default
├── LICENSE
├── package.json            # Node package reference
├── tsconfig.json           # Typescript configuration
└── README.md
```

### 🚨 Prerequisites

#### Web

- [Node.js](https://nodejs.org/en/) (>= 18.0.0)
- [npm](https://www.npmjs.com/) (>= 9.0.0)

#### Mobile (Android / IOS)

- [Java](https://www.java.com/fr/download/manual.jsp)
- [cocoapods](https://cocoapods.org/) (>= 1.10.1) (only for ios)
- [Xcode](https://developer.apple.com/xcode/) (>= 12.5.1) (only for ios)
- [Android Studio](https://developer.android.com/studio) (>= 4.2.2) (only for android)

See how to setup your environment for [Android](https://reactnative.dev/docs/environment-setup) and [IOS](https://reactnative.dev/docs/environment-setup)

### Development Setup

#### 🖥️ Web

- `npm install`: This script is used to install the dependencies of the project.
- `npm run build`: This deletes the 'lib' directory, runs the pre-build and builds the project before finishing up with other build tasks. You will need to run this script when you want to generate a production build of the app.
- `npm run start`: This script is used to run the app in development mode.
- `npm run build:css`: This script uses webpack to compile the styles.
- `npm run watch:css`: This script uses webpack to compile & watch the styles.
- `npm run storybook`: This script is used to run the Storybook.
- `npm run build:storybook`: This script is used for building the Storybook under the `docs/storybook` directory.

#### 📱 Mobile (Android / IOS)

- `npm run postinstall:native`: This script is used to install the dependencies of the native app.
- `npm run start:native`: This script is used to run the app in development mode.

#### 🧰 Development experience

- `npm run lint`: This script is used to maintain code quality by checking for style writing errors in the code.
- `npm run test`: This script is used to run Jest tests.

## How to Contribute

Make sure to checkout our [README.md](README.md) file to correctly setup your coding environment. 🚜

### 🐛 Reporting Bugs

When it comes to bugs we use the issue tracker. Before your report what you believe to be a bug please follow these
simple steps:

- Make sure you're using the latest version of Trilogy (the bug might have already been patched).
- Verify that your environment is properly setup and that the issue isn't an error on your side.
- See if other users have experienced the same issue, perhaps a ticket has already been created concerning this bug.
- Collect information concerning the bug.

Once you've followed these steps and are sure that the issue is indeed a bug, you can go ahead and create an issue on
the issue tracker.
Try to detail the problem as much as possible, including the steps needed to reproduce it.

### 💫 Suggesting Enhancements

If you have ideas that will help us improve the Trilogy design system simply open an issue. In this
issue give us an outline of your suggestion. Be clear about the idea you're suggesting and if you have some
feel free to provide examples or mockups to illustrate your idea. 🎨

### 💻 Code Contributions

To participate in the coding of the trilogy design system you first have to clone it's repository.
Once that's done you will need to setup a new branch. Check out our [Branching Strategy](#naming-conventions) to make
sure you
use the proper git conventions when naming your branch and entering commit messages. Take a look at [gitmojis](#gitmoji)
as well, since they're quite useful
for commit messages.
You should also take a look at [Code Formatting](#code-formatting) to ensure the code you're contributing adheres to our
coding standards. [Code Performance](#code-performance) is also a worth a look so as to guarantee adequate performance
from your code.

Useful git commands:

```shell
git clone //@TODO: Add link to repo
git branch --set-upstream-to develop
git checkout -b branch_name
git commit -m "commit_message"
git push origin branch_name
```

If you add, update, or delete a prop, be sure to run tests on both the Web and Native platforms. Since the components
  are iso, they are impacted by changes from both sides.

- You can test your components in the iso web/app files located in the folder `/demo` locally :

  ```shell
  #Used to run app on web
  npm run build
  npm run start
  #Used to run app on native ( Android / IOS)
  npm setup:native
  npm start:native
  ```

- Don't forget to add/modify/delete stories in storybook if necessary
  - The file containing stories is named `componant_name.stories`
  - To run storybook simply enter these commands:

  ```shell
  npm run build-storybook
  npm run storybook
  ```

- Be sure to add your changes to the [CHANGELOG.md](CHANGELOG.md) file at the end of each contribution.

## Code Formatting

🧹 To maintain our design system it is essential to adhere to specific coding standards and best practices.
As such for code formatting we rely on an ESLint configuration and Prettier. Thes files contain predefined rules and
settings to ensure uniformity in our code structure.
<details><summary>Setup ESLint & Prettier</summary>
- [ESLint & Prettier - Webstorm](https://blog.jetbrains.com/webstorm/2016/08/using-external-tools/)
- [ESLint - VSCode]() //No ref
</details>

## Branching Strategy

### Naming Conventions

When creating Commits and Merge requests it is important to follow certain guidelines:

- [A Simplified Convention for Naming Branches and Commits in Git](https://dev.to/varbsan/a-simplified-convention-for-naming-branches-and-commits-in-git-il4)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Gitmoji

You may have also noticed that we use [Gitmoji](https://gitmoji.dev/) for our commit messages. Make sure to take the
time to get accustomed
to these so that you use them properly.

<details><summary>A look at some useful Gitmojis</summary>

🔥 `:fire:` Delete file

✨ `:sparkles:` / ❇️ `:sparkle:` New feature(s)

💥 `:boom:` Breaking change

📝 `:memo:` Doc

✏️ `:pencil2:` Typo

🐛 `:bug:` Bugfix

🚑 `:ambulance:` Hotfix

💚 `:green_heart:` Update ci

♻️ `:recycle:` Refacto

🔧 `:wrench:` / 🔨 `:hammer:` Config files / Scripts

📦 `:package:` Update packages and dependencies
</details>

### Merge Request Workflow

<details><summary><b>1 - Create Merge Request</b></summary>
After pushing your code to your working branch, create a merge request and ensure that you have run tests beforehand to confirm that the code you want to merge is functioning correctly.
Your merge request should have a clear name and describe the changes that the merge will bring. Select the "draft" option when creating the merge request to indicate that the branch is not yet ready for merging.
</details>

<details><summary><b>2 - Review</b></summary>
Once you have created the merge request, members of the Trilogy team can review your code. If changes are necessary, you will be notified of the review. If no changes are necessary, you can skip the third step.
</details>

<details><summary><b>3 - Resolve Thread</b></summary>
After receiving the review, correct any potential mistakes or make any necessary improvements that were detected during the review. Keep in mind that all threads
must be resolved before merging the branch!! Only once that's done can you remove the draft option from your merge request.
</details>

<details><summary><b>4 - Wait for official merge </b></summary>
Now all you have to do is wait for the Trilogy team to run tests and deploy your changes. If everything runs smoothly
and the code respects the previously stated conventions, then you can expect your branch to be merged as soon as possible.

</details>

---
If you'd like to learn mode about open source checkout this useful [Guide](https://opensource.guide/how-to-contribute/)
