#!/bin/bash

# support for [rbenv](https://github.com/sstephenson/rbenv)
PATH=~/.rbenv/shims:$PATH
# grab the extension of the file we are dealing with
EXT="`echo $EDITOR_FILENAME | awk -F"." '{print $2}'`"

if [ "$EXT" = "rb" ]; then
	ruby -C $EDITOR_DIRECTORY_PATH $EDITOR_FILENAME
elif [ "$EXT" = "py" ]; then
	python $EDITOR_PATH
fi