# Simple Terraform CDK Project
This repository is a simple typescript terraform cdk project to deploy a standard storage account into an Azure resource group and create a s3 bucket in an AWS Account.

# Pre-requisites
 - nodejs 16.14.2
 - cdktf-cli

# Build
```sh
npm install --global cdktf-cli@latest
npm install
az login
export AWS_ACCESS_KEY_ID=<aws_access_key_id>
export AWS_SECRET_ACCESS_KEY=<aws_secret_access_key>
export AWS_SESSION_TOKEN=<aws_session_token>
```
This will install the cdktf-cli and az login will inject the credentials used to deploy the azure resources and setting AWS credentials will allow credentials to be set to deploy aws resources.
# Run
```sh
cdktf deploy 
```
This will provision the infrastructure.
# Teardown
```sh
cdktf destroy 
```
This will destroy the infrastructure.