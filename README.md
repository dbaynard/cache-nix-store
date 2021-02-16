# Cache nix store

This actions allows caching of installations done via the [Nix package manager](https://nixos.org) to improve workflow execution time. 

Forked from [rikhuijzer/cache-install][orig-url].

[![][tests-img]][tests-url]

Installing packages via the Nix package manager is generally quite quick.
However, sometimes the packages take a long time to compile or to download from their original sources.
For example, this occurs with R packages and LaTeX which are downloaded from respectively `CRAN` and `math.utah.edu`.
This GitHub Action speeds up the installation by simply caching the Nix store and the symlinks to the packages in the store in the [GitHub Actions cache](https://github.com/actions/cache).
So, the installed packages are restored from the cache by copying back `/nix/store`, the symlinks to `/nix/store/*` and some paths for the PATH environment variable.

## Inputs

- `key` - An explicit key for restoring and saving the cache
- `nix_version` - Nix version, defaults to `nixos-unstable`
- `nix_file` - Nix file, defaults to `default.nix`

## Example workflow

```
name: latex

on: push

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Cache install Nix packages
      uses: nix-actions/cache-install@v1.0.6
      with:
        key: nix-${{ hashFiles('mypackages.nix') }}
        nix_file: 'mypackages.nix'

    - name: Calculate some things
      run: julia -e 'using MyPackage; MyPackage.calculate()'

    - name: Build LaTeX
      run: latexmk -f -pdf example.tex

    - name: Build website
      run: hugo --gc --minify
```

where the file `mypackages.nix` contains

```
let
  # Pinning explicitly to 20.03.
  rev = "5272327b81ed355bbed5659b8d303cf2979b6953";
  nixpkgs = fetchTarball "https://github.com/NixOS/nixpkgs/archive/${rev}.tar.gz";
  pkgs = import nixpkgs {};
  myTex = with pkgs; texlive.combine {
    inherit (texlive) scheme-medium pdfcrop;
  };
in with pkgs; [
  hugo 
  julia 
  myTex
]
```

[tests-img]: https://github.com/dbaynard/cache-nix-store/workflows/test/badge.svg
[tests-url]: https://github.com/dbaynard/cache-nix-store/actions
[orig-url]: https://github.com/nix-actions/cache-install/actions
