# %%

import markdown
from markdown.treeprocessors import Treeprocessor

from editfrontmatter import EditFrontMatter
from pathlib import Path
import glob

template_str = ''.join(open("add_summary.j2", "r").readlines())

md = markdown.Markdown()

# %%

from bs4 import BeautifulSoup

for file in glob.glob("../../posts/*.md"):
    print(file)
    with open(file) as f:
        text = f.read()
        post_html = md.convert(text)
        soup = BeautifulSoup(post_html, 'lxml')
        p_list = soup.find_all('p')
        summary = p_list[1].text
        if not summary:
            summary = p_list[2].text
        summary = summary.strip()
        summary = str.replace(summary, '"', "'")
        proc = EditFrontMatter(file_path=file, template_str=template_str)
        proc.run({'text': summary})
        with open(file, "w") as f:
            f.write(proc.dumpFileData())
            f.close()