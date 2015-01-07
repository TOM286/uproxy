/// <reference path='../../interfaces/ui-polymer.d.ts' />
/// <reference path='../scripts/core_connector.ts' />

declare var core :CoreConnector;

console.log('loading description ' + model.globalSettings.description);
Polymer({
  model : model,
  update: function() {
    model.globalSettings.description = this.model.globalSettings.description;
    core.updateGlobalSettings(model.globalSettings);
  }
});
