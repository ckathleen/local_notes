## LOCAL NOTES
Applying gitignore functionality to specific comments.
Currently set up to work on in any *.js file. 
Comments that contain string 'LOCAL NOTE: ' will be ignored by git. This allows you to make notes to yourself without having to delete them before commiting useful stuff. 

If ```git pull``` is set up to rebase, local comments should be preserved.
If you need to checkout, you can always ```$ git stash --save "localnotes"``` and ```$ git stash apply```

## Usage

### Download ```local_notes_setup.sh```

### Run bash script
```$ sh local_notes_setup.sh```

-Will set up a git filter, appending ``` *.js filter=localnotes```` to ```<project root>/.gitattributes```. This file, by default, will be commited. The git filter can also be applied to  ```<project root>/.git/info/attributes``` if you rather the file not be commited. 
-Will open global git config file, ```~/.gitconfig``` and append 
```sh
[filter "localnotes"]
        clean = "sed '/LOCAL NOTE:/d'"
        smudge = cat
```

## Author

**Casey [casey@brkt.com](mailto:casey@brkt.com)**
