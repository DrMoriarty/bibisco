.PHONY: run build package-mac-x64 package-mac-arm64 package-mac installer-mac-x64 installer-mac-arm64 installer-mac

YARN := yarn
APP_VERSION := 4.0.0
BUILD_VERSION := 1.0.100

default: run

run:
	$(YARN) electron .

build:
	$(YARN) electron-packager . --out=../../dist --asar --asar-unpack=**/*.node --overwrite --all

package-mac-x64:
	$(YARN) electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=../../release-builds --app-bundle-id=com.bibisco.2.0.0 --app-version=$(APP_VERSION) --build-version=$(BUILD_VERSION) --osx-sign.hardenedRuntime=true --osx-sign.type=distribution --osx-sign.entitlements=entitlements.mac.plist --osx-sign.entitlements-inherit=entitlements.mac.inherit.plist --osx-notarize.appleId='andreafeccomandi@gmail.com' --osx-notarize.appleIdPassword='<APPLE_ID_PASSWORD>' --osx-notarize.teamId='<APPLE_TEAM_ID>' --osx-notarize.tool='notarytool' --ignore=/bibiscoenv --ignore=/dictionaries/unnormalized --ignore=/scripts --ignore=/simple-spellchecker/dict/ --ignore=/@paulcbetts/cld/deps  --ignore=/@paulcbetts/cld/src --ignore=/@paulcbetts/cld/test --ignore=/@paulcbetts/spellchecker/src --ignore=/docx/ts --ignore=/example --ignore=/examples --ignore=/screenshots --ignore=/test --ignore=/tests

package-mac-arm64:
	$(YARN) electron-packager . --overwrite --platform=darwin --arch=arm64 --icon=assets/icons/mac/icon.icns --prune=true --out=../../release-builds --app-bundle-id=com.bibisco.2.0.0 --app-version=$(APP_VERSION) --build-version=$(BUILD_VERSION) --osx-sign.hardenedRuntime=true --osx-sign.type=distribution --osx-sign.entitlements=entitlements.mac.plist --osx-sign.entitlements-inherit=entitlements.mac.inherit.plist --osx-notarize.appleId='andreafeccomandi@gmail.com' --osx-notarize.appleIdPassword='<APPLE_ID_PASSWORD>' --osx-notarize.teamId='<APPLE_TEAM_ID>' --osx-notarize.tool='notarytool' --ignore=/bibiscoenv --ignore=/dictionaries/unnormalized --ignore=/scripts --ignore=/simple-spellchecker/dict/ --ignore=/@paulcbetts/cld/deps  --ignore=/@paulcbetts/cld/src --ignore=/@paulcbetts/cld/test --ignore=/@paulcbetts/spellchecker/src --ignore=/docx/ts --ignore=/example --ignore=/examples --ignore=/screenshots --ignore=/test --ignore=/tests

package-mac: package-mac-arm64 package-mac-x64

installer-mac-x64: package-mac-x64
	$(YARN) electron-installer-dmg ../../release-builds/bibisco-darwin-x64/bibisco.app bibisco-mac-x64-$(APP_VERSION) --background=assets/icons/mac/background.png  --icon=assets/icons/mac/icon.icns --debug --out=../../release-builds --overwrite

installer-mac-arm64: package-mac-arm64
	$(YARN) electron-installer-dmg ../../release-builds/bibisco-darwin-arm64/bibisco.app bibisco-mac-arm64-$(APP_VERSION) --background=assets/icons/mac/background.png  --icon=assets/icons/mac/icon.icns --debug --out=../../release-builds --overwrite

installer-mac: installer-mac-arm64 installer-mac-x64
