# Ionic 2 and Angular-Cli Starter

This project is a work in progress and should be considered unstable. It is using unmerged code for angular-cli which can be found [here](https://github.com/angular/angular-cli/pull/1109). Big thanks to [JonCubed](https://github.com/JonCubed) for doing the groundwork which made this possible.

**PLEASE read all of the [Ionic 2 getting started docs](http://ionicframework.com/docs/v2/getting-started/) and the [angular-cli README](https://github.com/angular/angular-cli) before continuing. It'll help this hodgepodge make sense!**

## Warning: Hacks and Gotchas
- **using unmerged code**: [PR](https://github.com/angular/angular-cli/pull/1109) and a [repo](https://github.com/natevecc/angular-cli) with it merged in and updated that this project is using. **Need to test a fresh install to make sure this works without errors**
- new router woes: The ionic team is migrating away from the old angular router to the new one. If you stick to only using their NavController you shouldn't run into issues. **Need to migrate to newer stable ionic release asap**
- cordova js and prod mode: right now the easiest way to run the ionic app on an emulator or device is by using prod mode. Need to set up an emulator dev environment that will allow sourcemaps and cordova to get loaded into the compiled app for easier debugging.
- in prod mode some polyfills are still looking for map files causing some non-fatal errors on emulators and devices
- jumbled build process that tries to use package.json scripts to smooth over but need a cleaner way. Maybe if angular-cli had plugin support...
- currently all of the ionic stylesheets are imported into the src/styles directory into device specific files. If you want to change global ionic style stuff go there otherwise use component level stylesheets
- project only setup to emulate on ios. See [ionic docs](http://ionicframework.com/docs/v2/getting-started/installation/#building-for-android) for how to add android support or run on devices. You'll need to make sure you have a prod build in the `www` directory before using any of the ionic `emulate` or `run` commands to make sure the `cordova.js` dependency is loaded. **Need to add and test android support**
- Right now ionic scss files are being imported using node-sass includePaths option but at the project level instead of at the node_modules level. ex: `@import "globals.core";` vs `@import "ionic-angule/globals.core";`. I'd prefer the second method as it implicitly communicates to developers that the file is coming from outside of the current file structure.

## Setup

You need to have the ionic 2 beta, cordova and angular-cli installed globally: `npm install -g ionic@beta cordova angular-cli`.
Then clone or download this project, run `npm install`, and change the following files:
- ionic.config.json
  - change the `name` property to the name of your project
- config.xml
  - change the name of the `widget.id` property to a proper reverse url name for your proeject. ex: `com.natevecc.ionic-angular-cli-starter`
  - change the name of the `name` tag to the name of your project. ex: `ionic-angular-cli-starter`
  - update the `author` tag

Then run `ionic state restore` to load up all the default plugins this project is setup to use.

## Developing, Building and Testing

We use the angular cli for most commands:
- Use `ng serve` to start up dev build along with a server at `http://localhost:4200/` to do browser based development.
- To do a production build you can do `ng build -prod`. **NOTE: production builds add the cordova polyfil to index.html**
- To run your app in an emulator do `npm run ionic:emulate:ios`. Under the hood: `ng build -prod && ionic emulate ios`. **Only supports iOS for now**. You will see an error about no gulpfile and making sure your build step has completed which is safe to ignore.
- To run the unit tests use angular-cli: `ng test`
- For e2e tests run `ng serve` followed by `ng e2e`

## Ionic and Cordova Plugins

This project has `ionic-native` installed and ready to go. Follow the Ionic docs on how to [add plugins](http://ionicframework.com/docs/v2/native/#Install_Plugins_Needed) to your projects and make sure you understand how to [add 3rd party libraries](https://github.com/angular/angular-cli/wiki/3rd-party-libs) to angular-cli projects. Don't forget when sharing this with others that they need to run the `ionic state restore` command to load up any plugins you add.

## Helping out

Please feel free to open issues and make PRs for anything you think should be changed or updated!
