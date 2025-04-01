# Runs Tableau Desktop App with `spice_jdbc` connector loaded via DConnectPluginsPath
run-with-tableau:
	@PLUGIN_PATH="$(CURDIR)/"; \
	TABLEAU_APP=$$(ls -d /Applications/Tableau\ Desktop\ *.app 2>/dev/null | sort -V | tail -n 1); \
	TABLEAU_APP="$$TABLEAU_APP/Contents/MacOS/Tableau"; \
	echo "Running: $$TABLEAU_APP -DConnectPluginsPath=$$PLUGIN_PATH"; \
	"$$TABLEAU_APP" -DConnectPluginsPath="$$PLUGIN_PATH"