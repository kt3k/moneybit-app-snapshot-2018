# clean
> Cleans the built files

    npx rimraf build

# start
> Starts everything

    saku -p serve doc lang index open-later

# start-ja
> Starts everything in japanese mode

    npx cross-env LANG_TAG=ja saku start

# serve
> Starts the dev server

    npx bulbo serve

# build
> Builds the assets

    npx bulbo build
    npx domaindoc build
    npx langsheet build
    npx wsindex build

# doc
> Serves the domain document

    npx domaindoc

# index
> Serves and opens the dev index page

    npx wsindex

# open-later
> Opens index page after 1 sec.

    sleep 1
    npx opener http://localhost:9000

# gh-pages
> Updates the gh-pages branch

    saku clean
    npx cross-env BASEPATH=/moneybit-app-snapshot-2018/app npx bulbo build
    npx domaindoc build
    npx langsheet build
    npx wsindex build
    npx cpx "design/*.*" build/design/
    npx gh-pages -d build

# lint
> Lint source code

    npx standard

# fix
> Auto fixes the lint errors

    npx prettier --write --no-semi --single-quote --print-width 200 *.js 'src/**/*.js'
    npx standard --fix

# test
> Runs the tests

    npx karma start

# codecov
> Sends the reports to codecov.io

    npx codecov

# lang
> Serves the language document

    npx langsheet
