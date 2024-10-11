# File: copy-default.ps1
# Purpose: Copy the custom settings from the docs

Copy-Item -Recurse -ErrorAction:SilentlyContinue ./docs/assets/profile ./default/docs/assets/
Copy-Item -Recurse -ErrorAction:SilentlyContinue ./docs/_includes ./default/docs/
Copy-Item -Recurse -ErrorAction:SilentlyContinue ./docs/_data ./default/docs/
Copy-Item ./docs/_config.yml ./default/docs/
Copy-Item ./docs/Gemfile ./default/docs/