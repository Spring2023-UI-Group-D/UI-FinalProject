## To connect to the repository
1. open vscode
2. make a folder named ui-repo
3. open that folder on vscode

## Next, Open the command line
(ctrl + shift + ` )

## Finally, copy over the code to your workspace
```
git clone https://github.com/Spring2023-UI-Group-D/UI-FinalProject.git
cd UI-FinalProject/
```

## If you want to make a new branch and work on another thing
```
git checkout -b "name-of-branch"
git push --set-upstream origin <name-of-branch>
```

## To see the available active branches and switch to one
```
git switch [tab][tab]
```
## To see the latest changes for the branch you are currently in
```
git fetch
```
## If you want the latest changes for the branch you are currently in to go to your local workspace
```
git merge
```

## Push files to the branch you are currently in
```
git add . 
git commit -m "message"
git push
```

## Merge the branch you are currently in to main
After a git push, a pull request will popup.  
A pull request requires at least one reviewer to accept for it to go through.  
After the request is merged and closed, click "Delete branch" popup to delete the remote branch from github.
### Local branches in your workspace don't get deleted automatically
## To delete a local branch
```
git branch -D <branch> 
```
### You can delete remote branches from the github ui
# finalproject
