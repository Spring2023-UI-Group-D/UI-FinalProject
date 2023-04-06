## To work on this repo
1. open up vs code
2. (ctrl + shift + ` ) to open vscode command line
3. type these commands in
```
mkdir ui-website
cd ui-website
git clone https://github.com/raphaelsalak/ui-website.git
cd ui-website/ 
```

## Create a new branch for a feature
```
git checkout -b "name-of-branch"
```

## Switch to an existing branch
```
git switch [tab][tab]
```

### Do not switch to the main branch ever

## Push files to a branch
```
git add . 
git commit -m "message"
git push
```

## Pull request and merge to main
1. From main dropdown, click on the branch you were working on. 
2. See the file changes that were done.
3. It should open a pull request automatically and you just need to click merge accept. 
4. If it doesn't, click on 1 commit ahead, then click create pull request, then merge accept.
5. This should merge changes from the branch you were working on to the main branch.
6. After the pull request is merged and closed, a delete branch button will popup, click on delete branch to delete remote branch.

### Local branches don't get deleted automatically
## To delete the local branch only if it has been pushed or merged
```
git branch -d <branch> 
```
## To delete a local branch no matter what
```
git branch -D <branch> 
```
### You can delete remote branches from the github ui
