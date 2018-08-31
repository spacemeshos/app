<h1 align="center">
  <a href="https://spacemesh.io"><img width="400" src="https://spacemesh.io/content/images/2018/05/logo-black-on-white-trimmed.png" alt="Spacemesh logo" /></a>
  <p align="center">Spacemesh App 🏦📊</p>
</h1>

<p align="center">
<a href="https://gitcoin.co/profile/spacemeshos" title="Push Open Source Forward">
    <img src="https://gitcoin.co/static/v2/images/promo_buttons/slice_02.png" width="267px" height="52px" alt="Browse Gitcoin Bounties"/>
</a>
</p>


The cosmic Spacemesh App containing the Spacemesh Wallet and the Spacemesh Dashboard.
This app is based on the [Spacemesh Cosmic Apps Seed](https://github.com/spacemeshos/cosmic).

## Design Concept

<h1 align="center">

 <img src="https://raw.githubusercontent.com/spacemeshos/app/master/design/resources/mocks2.0/desktop_account_first_view.jpg" width="1200px" />


 <img src="https://raw.githubusercontent.com/spacemeshos/app/master/design/resources/mocks2.0/mobile_account_first_time.jpg" width="500px" />


 <img src="https://raw.githubusercontent.com/spacemeshos/app/master/design/resources/mocks2.0/mobile_net_select.jpg" width="500px" />


 <img src="https://raw.githubusercontent.com/spacemeshos/app/master/design/resources/concept2.0/mobile_first_run.png" />

 <img src="https://raw.githubusercontent.com/spacemeshos/app/master/design/resources/concept2.0/mobile_main_view.png" />

 <img src="https://raw.githubusercontent.com/spacemeshos/app/master/design/resources/concept2.0/mobile_views.png" />

  <img src="https://raw.githubusercontent.com/spacemeshos/app/master/design/resources/concept2.0/mobile_send_smc.png" />

  <img src="https://raw.githubusercontent.com/spacemeshos/app/master/design/resources/concept2.0/mobile_Send_smc_1.png" />

  <img src="https://raw.githubusercontent.com/spacemeshos/app/master/design/resources/concept2.0/mobile_account_backup_0.png" />

  <img src="https://raw.githubusercontent.com/spacemeshos/app/master/design/resources/concept2.0/mobile_account_backup.png" />

 <img src="https://raw.githubusercontent.com/spacemeshos/app/master/design/resources/concept2.0/mobile_get_smc.png" />

 <img src="https://raw.githubusercontent.com/spacemeshos/app/master/design/resources/concept2.0/mobile_multiple_accounts_and_wallets.png" />

 <img src="https://raw.githubusercontent.com/spacemeshos/app/master/design/resources/concept2.0/mobile_tx_log.png" />

 <img src="https://raw.githubusercontent.com/spacemeshos/app/master/design/resources/concept2.0/mobile_unlock_wallet.png" />

</h1>

- Click on an image to view full size
- [Browse latest design mocks](https://github.com/spacemeshos/app/tree/master/design/resources/mocks2.0)
- [Browse Design Guide](https://docs.google.com/presentation/d/1pIJ27TggMRrgfJ8fK8cp1-FLugFK2T2_86s7mmKCakI/edit?usp=sharing)

## App Architecture
We are using [Cosmic](https://github.com/spacemeshos/cosmic) as the seed for this app. Please read-up on Cosmic app architecture before doing design and coding work on the app.

## Getting Started
- Please head over to [the wiki](https://github.com/spacemeshos/spacemesh-app/wiki) and read the product requirements and deisgn docs
- Join our [Dev Gitter Chat](https://gitter.im/spacemesh-os/app)
- We are actively looking for contributors, collaborators and maintainers. Get in touch via Gitter

## Setup
1. Clone the repo

```
git clone https://github.com/spacemeshos/app.git
```

2. Follow [these instructions](https://facebook.github.io/react-native/docs/getting-started.html
) for setting up a React Native project dev environment

### Install project dependencies
```yarn install```


### Development builds

#### web
``` yarn web ```

#### Mobile
Remove all build directories (optional):

``` yarn clean-all```

Generate android and ios builds:

``` yarn mobile```

Serve App on Android Emulator:

```yarn android```

Serve App on iOS Simulator:

```yarn ios```

Start and Electron dev app session:

```yarn electron-dev```  

### Production builds

#### Mobile
```yarn mobile```

#### Web
```yarn build```

#### Desktop
```yarn dist```

#### Bundling for Android
```yarn bundle-android```

#### Building for OS X, Windows and Linux
```yarn electron-pack```


### Android Dev Notes
1. Follow the React Native instructions for installing Android dev tools

2. Make sure you have JAVA_HOME env var set to the Java 8 JDK as well as your ANDROID_HOME

```
e.g: export JAVA_HOME=<path-to-your-jdk>/<jdk>/Contents/Home
export ANDROID_HOME=<path-to-your-android-sdk>
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```
3. Run the emulator with an Android 6 (with Google Play) device

4. Update `build-scripts/local.properties` with the right path to your android sdk. [Detailed instructions](https://stackoverflow.com/questions/32634352/react-native-android-build-failed-sdk-location-not-found/43626724#43626724).


### Tests
This seed uses Jest for unit testing and calabash-android for android automation testing.

#### Running Calabash Android Tests
1. Install [ruby](https://rubyonrails.org)
1. Run ```bundle install```
2. Run ```bundle exec calabash-android run /path/to/android/apk/file```

### Running unit tests
```yarn test```

### Known issues
1. The name react-native was looked up in the Haste module map. Remove the *haste-map-* files from your tmp file and rebuild.
For Linux
```rm -rf /tmp/haste-map-*```
For OSX
```
yarn cache clean
watchman watch-del-all
rm -rf $TMPDIR/metro-bundler-cache-*
rm -rf $TMPDIR/metro-cache-*
rm -rf $TMPDIR/react-native-packager-cache-*
rm -rf $TMPDIR/haste-map-metro-*
```

