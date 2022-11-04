
#%%

from editfrontmatter import EditFrontMatter
from pathlib import Path

#%%

template_str = ''.join(open("add_tags_template.j2", "r").readlines())

# test path
# file_path = "../reading/‘SEEING FUTURES’%3A Politics of visuality and affect.md"

#%%

'''
# this scripts adds tags to files that have YAML metadata, ie that were created before logseq

example code and docs
https://karlredman.github.io/EditFrontMatter/examples/example1/example1.html
https://github.com/karlredman/EditFrontMatter/blob/master/examples/example1/example1.py
'''

target_dir = "../reading"
tags_to_add = "reading"

open_files = Path(target_dir).glob('*.md')

for file_name in open_files:
    file_path = os.path.join(target_dir, file_name)

    # check if file has logseq metadata
    f = open(file_path, "r")
    lines = f.readlines()
    if '::' in lines[0]:
        # skip it if so
        continue

    proc = EditFrontMatter(file_path=file_path, template_str=template_str)

    proc.run({
    'tags': tags_to_add
    })

    with open(file_path, "w") as f:
        f.write(proc.dumpFileData())
        f.close()

