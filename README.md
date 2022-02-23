# Whats new here ?
Rsuite library is very good interns of generating font file with only the required svg's, but one problem is, to do this, you need to remove all the unwanted svg from the course directory, This is bad, may be tomorrow, you might need to add one more svg, 

This repo is an extended version of rsutie, which solve this problem. 

We have a file called `script/icon-types.ts`, Here you can mention all the required svg names, Then the run `npm run build` to generate font with only the mentioned svg's
# RSUITE Icon Svg
RSUITE all icons source files.

## Start
```bash
npm install
```

## Rebuild
You can delete useless the icon svg file in `src/svg` directory。Then run this command to rebuild.
```bash
npm run build
```

## Changelog

### 2018-08-29

Updated icons: `more`,`reload`,`tag`,`list`,`edit`,`share`,`copy`,`dashboard`,`pie-chart`

Created icons: `id-info`,`setting`,`back-arrow`,`character-area`,`character-authorize`,`creative`,`data-authorize`,`detail`,`explore`,`export`,`file-download`,`file-upload`,`gear`,`id-mapping`,`import`,`off`,`peoples-map`,`peoples`,`sales,growth`,`project`,`public-opinion`,`rate`,`realtime`,`related-map`,`search-peoples`,`speaker`,`tag-area`,`tag-authorize`,`tag-unauthorize`,`task`,`trend`,`user-info`,`views-authorize`,`views-unauthorize`
