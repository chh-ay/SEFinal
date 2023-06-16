# Workflow

### Requirement

- Node 18.16.0+
  - Recommend checking out [FNM(Mac/Linux/Windows)](https://github.com/Schniz/fnm) or [NVM(Windows)](https://github.com/nvm-sh/nvm)
- For .env file copy it from the .env.example and a link that I will send into our telegram group

### After cloning the project

```bash
npm install
npm run dev
```

### Git flow

- Do not work on the master branch!
- Create your own branch. Eg:
  ```bash
  git checkout -b chhay
  ```
- Make a pull request once you're done working on something.
- Do not merge your own code, I will review it.
- Make use of rebase feature!
- This would be an example of the git command flow once I'm done working on my branch:
  ```
  git stash
  git checkout master
  git pull
  git checkout {your branch name}
  git rebase master
  git stash pop
  git add .
  git commit -m "{your commit message}"
  git push
  ```
  - Rebasing make it so the commit history is clean and remove the unnecessary merge commits!
