# README
Go to the android/ directory of your react-native project
Create a file called local.properties with this line:
sdk.dir = /Users/USERNAME/Library/Android/sdk

Generate a APK file:

keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
=> /android/app/my-release-key.keystore

cd android && ./gradlew assembleRelease
The APK location: android/app/build/outputs/apk/app

Android Emulator:
android avd  
adb devices
adb kill-server
adb start-server
react-native run-android
react-native log-android

iOS Notification setup:
https://medium.com/@DannyvanderJagt/how-to-use-push-notifications-in-react-native-41e8b14aadae#.4hyi4bwqf
react-native run-ios
react-native log-ios
