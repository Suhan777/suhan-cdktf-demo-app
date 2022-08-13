# Simple Terraform CDK Project 
This repository is a simple typescript terraform cdk project to deploy a standard storage account into an Azure resource group.

# Pre-requistes
 - nodejs 16.14.2
 - cdktf-cli

# Build
```sh
npm install --global cdktf-cli@latest
npm install
az login
```
This will install the cdktf-cli and az login will inject the credentials used to deploy the 
resources
# Run
```sh
cdktf deploy 
```
This will provision the infrastructure
# Teardown
```sh
cdktf destroy 
```
This will destroy the infrastructure