<#
File: init-jekyll-site.ps1
Author: Chuncheng Zhang
Date: 2024-09-27
Copyright & Email: chuncheng.zhang@ia.ac.cn

Purpose:
    Init the ./docs folder

After:
    After the ./docs is created, do the things:
    - Edit the ./docs/_config.yml file for jekyll configuration.
    - Edit the ./docs/Gemfile file for ruby configuration.
    - Run `bundle install` in ./docs/ folder to install the ruby.
    - Run `bundle exec jekyll serve --trace` in ./docs/ folder to start the jekyll serve
    - BTW, I have put my default configuration into the ./default folder.
#>

jekyll new docs 
