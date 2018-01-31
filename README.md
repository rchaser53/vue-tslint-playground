git diff-tree --no-commit-id --name-only -r HEAD


git diff origin/master..head --name-only | xargs node xxx.js
