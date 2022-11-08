
> This place is not a place of honor... no highly esteemed deed is commemorated here... nothing valued is here. 


This folder contains quick scripts to edit YAML metadata in bulk when moving from Hexo to 11ty

Dependencies are listed in `pyproject.toml`, install with `poetry install`

Note that the scripts break unicode characters such as ❤️ and é, review the diff carefully after running them.

## `add_images.py`

Adds a `cover` attribute with the first image in the post, if one is found


## `add_summary.py`

Adds a `summary` attribute with the first paragraph of the post. This was quite messy