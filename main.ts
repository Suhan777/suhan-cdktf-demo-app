import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import {AzurermProvider, DataAzurermResourceGroup, StorageAccount } from "@cdktf/provider-azurerm";


class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);
    // define resources here
    new AzurermProvider(this, "AzureRm", {
      features: {},
      skipProviderRegistration : true
    })
    const rg = new DataAzurermResourceGroup(this,'testrg', {name: 'rg-aurelz-sandbox'} )
    new StorageAccount(this, 'suhantestsa', {
      name: 'suhantestsa',
      resourceGroupName: rg.name,
      location: rg.location,
      accountTier: 'Standard',
      accountReplicationType: 'LRS'
    })
  }
}

const app = new App();
new MyStack(app, "suhan-cdktf-demo-app");
app.synth();
