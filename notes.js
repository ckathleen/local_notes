-STEP 1
--set up filter in <project root>/.gitattributes that will be committed or in <project root>/.git/info/attributes 
--add filter: *.js filter=localnotes
-STEP 2
--git config --global filter.gitignore.smudge cat
-STEP 3
    --if just local notes are added (no usecase there) because you wouldnt be commiting those comments so

--either git push -f 
--or $git stash save "localnotes" and then git stash apply 
