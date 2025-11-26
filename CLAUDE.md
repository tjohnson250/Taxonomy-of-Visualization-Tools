# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Quarto-based project that presents research on visualization tool taxonomies. The project creates RevealJS presentation slides and HTML content analyzing different visualization tools along multiple dimensions (abstraction level, expressiveness, ease of use, interaction capabilities, etc.).

## Build and Rendering Commands

The project uses Quarto to render `.qmd` files into HTML presentations and pages. Quarto must be installed on the system to work with this project.

**Render all content:**
```bash
quarto render
```

**Render a specific presentation:**
```bash
quarto render viz_tool_dimensions_presentation.qmd
quarto render "Grammar of Graphics Pres.qmd"
quarto render Taxonomy-of-Visualization-Tools.qmd
```

**Preview with live reload:**
```bash
quarto preview
```

**Preview a specific file:**
```bash
quarto preview viz_tool_dimensions_presentation.qmd
```

## Project Structure

- **Source files**: `.qmd` files in the root directory contain the presentation content
  - `viz_tool_dimensions_presentation.qmd` - Main presentation on the 10-dimensional taxonomy
  - `Taxonomy-of-Visualization-Tools.qmd` - Earlier version covering visualization dimensions
  - `Grammar of Graphics Pres.qmd` - Grammar of Graphics focused presentation

- **Output**: Rendered HTML files are published to the `docs/` directory (configured via `_quarto.yml`)
  - The `docs/` directory is used for GitHub Pages deployment

- **Configuration**: `_quarto.yml` sets up the website project and output directory

- **Supporting files**:
  - `makeGlossary.js` - JavaScript utility for creating interactive glossary components in presentations
  - `references.bib` - BibTeX bibliography file for academic citations (Heer, Shneiderman, etc.)
  - `healthcare cost data.xlsx/csv` - Sample datasets used in presentation examples
  - `Processing-iris_scatterplot.html` - Embedded Processing visualization example

## Content Architecture

The project demonstrates visualization concepts through executable code examples in multiple languages:

- **R code blocks**: Using ggplot2, dplyr, openxlsx, flextable
  - Examples show Grammar of Graphics principles (aesthetics, geometries, scales, facets, statistics)
  - Uses `healthcare cost data.xlsx` for demonstrations

- **Python code blocks**: Using Altair and vega_datasets
  - Demonstrates declarative visualization grammar
  - Requires `reticulate` R package to execute Python within R Markdown

- **JavaScript code blocks**: D3.js and Vega-Lite examples
  - Shows low-level and high-level declarative approaches
  - Includes interaction patterns and cross-filtering examples

## Key Conceptual Framework

The presentations build on Heer and Shneiderman's taxonomy (2012, 2019) and extend it with additional dimensions:

**Original Heer taxonomy levels** (primarily abstraction level):
- Graphics APIs (Processing, OpenGL)
- Component Architectures (Prefuse, VTK)
- Visualization Grammars (D3.js, Protovis)
- Visual Analysis Grammars (ggplot2, Tableau)
- Chart Libraries (Excel, Plotly Express)

**Extended 10-dimensional framework**:
1. Abstraction Level
2. Expressiveness
3. Ease of Use
4. Interaction Capabilities
5. Data Abstraction
6. Reusability
7. Interface Paradigm (GUI vs. Declarative)
8. Theoretical Foundation
9. Dissemination/Collaboration
10. Cost

When modifying content, maintain consistency with this conceptual framework.

## Working with Quarto Presentations

Quarto presentations use RevealJS format with special features:

- **Slide delimiters**: `##` creates new slides
- **Auto-animate**: Use `{auto-animate="true"}` for smooth transitions between slides
- **Code highlighting**: Use `#| code-line-numbers: "2-3"` to highlight specific lines
- **Scrollable slides**: Use `{.scrollable}` for slides with overflow content
- **Columns**: Use `::::: columns` and `::: {.column width="50%"}` for multi-column layouts
- **Executable code**: Code blocks with `{r}` or `{python}` execute during rendering
- **Output positioning**: Use `#| output-location: column` to control where output appears

## Dependencies

**R packages** (based on code examples):
- ggplot2
- dplyr
- openxlsx
- flextable
- reticulate (for Python integration)

**Python packages**:
- altair
- vega_datasets

The project assumes these are installed but does not include package management files.

## Publishing Workflow

The rendered output in `docs/` is configured for GitHub Pages deployment. The root `index.html` redirects to `Taxonomy-of-Visualization-Tools.html`. After rendering, commit both source `.qmd` files and the generated `docs/` directory.
