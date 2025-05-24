.PHONY: run build-mac build-win build-linux build package-mac-x64 package-mac-arm64 package-mac installer-mac-x64 installer-mac-arm64 installer-mac

YARN := yarn
APP_VERSION := 4.0.0
BUILD_VERSION := 1.0.100

default: run

run:
	$(YARN) electron .

build-mac:
	$(YARN) electron-packager . --overwrite --platform=darwin --arch=all --icon=assets/icons/mac/icon.icns --prune=true  --out=../../dist --app-bundle-id=com.bibisco.2.0.0 --app-version=$(APP_VERSION) --build-version=$(BUILD_VERSION)  --asar --asar-unpack=**/*.node

build-win:
	$(YARN) electron-packager . bibisco --overwrite --platform=win32 --arch=all --icon=assets/icons/win/bibisco_circle_hr_MYa_icon.ico --prune=true --out=../../dist --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=\"bibisco\" --asar --asar-unpack=**/*.node

build-linux:
	$(YARN) electron-packager . --overwrite --platform=linux --arch=all --icon=assets/icons/linux/bibisco-circle-hr.png --prune=true --out=../../dist

build: build-mac build-win build-linux

package-mac-x64:
	$(YARN) electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=../../release-builds --app-bundle-id=com.bibisco.2.0.0 --app-version=$(APP_VERSION) --build-version=$(BUILD_VERSION) --osx-sign.hardenedRuntime=true --osx-sign.type=distribution --osx-sign.entitlements=entitlements.mac.plist --osx-sign.entitlements-inherit=entitlements.mac.inherit.plist --osx-notarize.appleId='andreafeccomandi@gmail.com' --osx-notarize.appleIdPassword='<APPLE_ID_PASSWORD>' --osx-notarize.teamId='<APPLE_TEAM_ID>' --osx-notarize.tool='notarytool'

package-mac-arm64:
	$(YARN) electron-packager . --overwrite --platform=darwin --arch=arm64 --icon=assets/icons/mac/icon.icns --prune=true --out=../../release-builds --app-bundle-id=com.bibisco.2.0.0 --app-version=$(APP_VERSION) --build-version=$(BUILD_VERSION) --osx-sign.hardenedRuntime=true --osx-sign.type=distribution --osx-sign.entitlements=entitlements.mac.plist --osx-sign.entitlements-inherit=entitlements.mac.inherit.plist --osx-notarize.appleId='andreafeccomandi@gmail.com' --osx-notarize.appleIdPassword='<APPLE_ID_PASSWORD>' --osx-notarize.teamId='<APPLE_TEAM_ID>' --osx-notarize.tool='notarytool'

package-mac: package-mac-arm64 package-mac-x64

installer-mac-x64: package-mac-x64
	$(YARN) electron-installer-dmg ../../release-builds/bibisco-darwin-x64/bibisco.app bibisco-mac-x64-$(APP_VERSION) --background=assets/icons/mac/background.png  --icon=assets/icons/mac/icon.icns --debug --out=../../release-builds --overwrite

installer-mac-arm64: package-mac-arm64
	$(YARN) electron-installer-dmg ../../release-builds/bibisco-darwin-arm64/bibisco.app bibisco-mac-arm64-$(APP_VERSION) --background=assets/icons/mac/background.png  --icon=assets/icons/mac/icon.icns --debug --out=../../release-builds --overwrite

installer-mac: installer-mac-arm64 installer-mac-x64
