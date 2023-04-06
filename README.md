# To work on this repo
1. open up vs code
2. type (ctrl + shift + ` ) to open vscode command line
4. mkdir ui-website
5. cd ui-website
6. git clone https://github.com/raphaelsalak/ui-website.git
7. cd ui-website/ 

# Create a new branch for a feature
git checkout -b "name-of-branch"

# Switch to an existing branch
git switch [tab][tab]

# Do not switch to the main branch ever

# Push files to a branch
1. git add . 
2. git commit -m "message"
3. git push

# Pull request and merge to main
1. from main dropdown, click on the branch you were working on. 
2. see the file changes that were done.
3. it should open a pull request automatically and you just need to click merge accept. 
4. if it doesn't, click on 1 commit ahead, then click create pull request, then merge accept.
5. this should merge changes from the branch you were working on to the main branch.
6. click on delete branch once pull request is successfully merged and closed.

# Local branches don't get deleted automatically
# To delete the local branch only if it has been pushed or merged
git branch -d <branch> 
# To delete a local branch no matter what
git branch -D <branch> 

# You can delete remote branches from the github ui
