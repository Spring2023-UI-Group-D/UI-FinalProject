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
git push --set-upstream origin <name-of-branch>
```

## Switch to an existing branch
```
git switch [tab][tab]
```
## Push files to a branch
```
git add . 
git commit -m "message"
git push
```

## Pull request and merge to main
When you want to add the changes you worked on to go to the main branch. 
Push to the branch you are on right now, then an option for a pull request will pop up.
A pull request requires at least one reviewer to accept for it to go through. 



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
