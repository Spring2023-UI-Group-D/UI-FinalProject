## To copy over the repo to your workspace
1. open up vs code
2. (ctrl + shift + ` ) to open vscode command line
```
git clone https://github.com/Spring2023-UI-Group-D/UI-FinalProject.git
```
## Open the repository in vscode
1. select open folder
3. browse for UI-FinalProject
4. double click UI-FinalProject
5. select folder

## To enter commands in the command line, go to the repository folder
```
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
