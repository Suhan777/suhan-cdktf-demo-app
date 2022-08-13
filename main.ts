import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import {AzurermProvider, DataAzurermResourceGroup, StorageAccount } from "@cdktf/provider-azurerm";
import {AwsProvider} from "@cdktf/provider-aws";
import { S3Bucket, S3BucketAcl } from "@cdktf/provider-aws/lib/s3";



class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);
    // define resources here
    new AzurermProvider(this, "AzureRm", {
      features: {},
      skipProviderRegistration : true
    })
    new AwsProvider(this, "AWS", {
      region: 'ap-southeast-2'
    })
    const rg = new DataAzurermResourceGroup(this,'testrg', {name: 'rg-aurelz-sandbox'} )
    new StorageAccount(this, 'suhantestsa', {
      name: 'suhantestsa',
      resourceGroupName: rg.name,
      location: rg.location,
      accountTier: 'Standard',
      accountReplicationType: 'LRS'
    })
    const s3bucket = new S3Bucket(this, 'tests3', {
      bucket: "suhan-cdktf-test-s3"
    })
    new S3BucketAcl(this, 'bucketacl', {
      bucket: s3bucket.id,
      acl: 'private'
    })
  }
}

const app = new App();
new MyStack(app, "suhan-cdktf-demo-app");
app.synth();
