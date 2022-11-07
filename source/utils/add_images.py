# %%

import markdown
from markdown.treeprocessors import Treeprocessor
from markdown.extensions import Extension

# %%
# modified the code from 2015 https://stackoverflow.com/questions/29259912/how-can-i-get-a-list-of-image-urls-from-a-markdown-file-in-python

# First create the treeprocessor

class ImgExtractor(Treeprocessor):
    def run(self, doc):
        "Find all images and append to markdown.images. "
        self.md.images = []
        for image in doc.findall('.//img'):
            self.md.images.append(image.get('src'))

# Then tell markdown about it

class ImgExtExtension(Extension):
    def extendMarkdown(self, md, md_globals):
        img_ext = ImgExtractor(md)
        md.treeprocessors.add('imgext', img_ext, '>inline')

# %% Finally create an instance of the Markdown class with the new extension

md = markdown.Markdown(extensions=[ImgExtExtension()])

# %% Now let's test it out:

# data = '''
# **this is some markdown**
# blah blah blah
# ![image here](http://somewebsite.com/image1.jpg)
# ![another image here](http://anotherwebsite.com/image2.jpg)
# '''
# html = md.convert(data)
# print(md.images)

#%%

from editfrontmatter import EditFrontMatter
from pathlib import Path

template_str = ''.join(open("add_cover.j2", "r").readlines())


# %%
import glob

for file in glob.glob("../../posts/*.md"):
    print(file)
    with open(file) as f:
        text = f.read()
        html = md.convert(text)
        images = md.images
        if images:
            cover = images[0]#[1:] # remove first char: /
            print('🖼️ ', cover)
            proc = EditFrontMatter(file_path=file, template_str=template_str)
            proc.run({'image': cover})
            with open(file, "w") as f:
                f.write(proc.dumpFileData())
                f.close()
# %%
