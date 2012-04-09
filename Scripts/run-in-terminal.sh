#!/bin/bash

PATH=~/.rbenv/shims:$PATH
EXT="`echo $EDITOR_FILENAME | awk -F"." '{print $2}'`"

if [ "$EXT" = "rb" ]; then
	ruby -C $EDITOR_DIRECTORY_PATH $EDITOR_FILENAME
elif [ "$EXT" = "py" ]; then
	python $EDITOR_PATH
fi